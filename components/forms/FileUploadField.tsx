"use client";

import { FileText, Upload, X } from "lucide-react";
import { useEffect, useRef, useState, type DragEvent } from "react";
import {
  CONTACT_FILES_ACCEPT,
  CONTACT_FILES_MAX_COUNT,
  CONTACT_FILES_MAX_TOTAL_BYTES,
  formatFileSize,
  isAllowedContactFileType,
} from "@/lib/contact-files";
import { cn } from "@/lib/utils";

// Les photos de cellulaire (3-8 Mo) sont réduites avant l'envoi : 2000 px de
// côté suffisent pour juger d'un chantier et ramènent une photo à ~0,5 Mo.
const MAX_IMAGE_EDGE = 2000;
const JPEG_QUALITY = 0.8;

async function shrinkImage(file: File): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/gif") return file;

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_IMAGE_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) return file;
    // Fond blanc : un plan PNG transparent deviendrait noir en JPEG.
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);
    context.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY),
    );
    if (!blob || blob.size >= file.size) return file;

    const baseName = file.name.replace(/\.[^.]+$/, "") || "photo";
    return new File([blob], `${baseName}.jpg`, {
      type: "image/jpeg",
      lastModified: file.lastModified,
    });
  } catch {
    // Format que le navigateur ne sait pas décoder (ex. HEIC sur Chrome) :
    // on garde l'original, le plafond total s'applique quand même.
    return file;
  }
}

type SelectedFile = { file: File; previewUrl?: string };

type FileUploadFieldProps = {
  id: string;
  name: string;
  locale: string;
  invalid?: boolean;
};

export function FileUploadField({ id, name, locale, invalid }: FileUploadFieldProps) {
  const en = locale === "en";
  const inputRef = useRef<HTMLInputElement>(null);
  const [selected, setSelected] = useState<SelectedFile[]>([]);
  // Copie synchrone de la liste + file d'attente : deux ajouts rapprochés
  // (sélections successives, glisser-déposer) ne s'écrasent pas.
  const listRef = useRef<SelectedFile[]>([]);
  const queueRef = useRef<Promise<void>>(Promise.resolve());
  const [pending, setPending] = useState(0);
  const processing = pending > 0;
  const [notice, setNotice] = useState<string | null>(null);
  const [dragging, setDragging] = useState(false);

  // Le fichier réellement envoyé est celui de l'<input> : on le resynchronise
  // à chaque changement de la liste.
  useEffect(() => {
    const input = inputRef.current;
    if (!input) return;
    const transfer = new DataTransfer();
    selected.forEach(({ file }) => transfer.items.add(file));
    input.files = transfer.files;
  }, [selected]);

  // React vide le formulaire après l'action : on vide la liste avec lui.
  useEffect(() => {
    const form = inputRef.current?.form;
    if (!form) return;
    const onReset = () => {
      listRef.current = [];
      setSelected([]);
      setNotice(null);
    };
    form.addEventListener("reset", onReset);
    return () => form.removeEventListener("reset", onReset);
  }, []);

  // Libère les aperçus au démontage.
  useEffect(
    () => () => {
      listRef.current.forEach(({ previewUrl }) => {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
      });
    },
    [],
  );

  function commit(next: SelectedFile[]) {
    listRef.current = next;
    setSelected(next);
  }

  function addFiles(incoming: File[]) {
    if (incoming.length === 0) return;
    setPending((count) => count + 1);
    queueRef.current = queueRef.current
      .then(() => processFiles(incoming))
      .finally(() => setPending((count) => count - 1));
  }

  async function processFiles(incoming: File[]) {
    setNotice(null);

    const rejected: string[] = [];
    const next = [...listRef.current];
    let total = next.reduce((sum, { file }) => sum + file.size, 0);

    for (const original of incoming) {
      if (!isAllowedContactFileType(original.type)) {
        rejected.push(
          en
            ? `${original.name}: photos or PDF only.`
            : `${original.name} : photos ou PDF seulement.`,
        );
        continue;
      }
      if (next.length >= CONTACT_FILES_MAX_COUNT) {
        rejected.push(
          en
            ? `${CONTACT_FILES_MAX_COUNT} files maximum.`
            : `${CONTACT_FILES_MAX_COUNT} fichiers au maximum.`,
        );
        break;
      }
      const file = await shrinkImage(original);
      if (total + file.size > CONTACT_FILES_MAX_TOTAL_BYTES) {
        rejected.push(
          en
            ? `${original.name} goes over the ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES, "en")} limit. Send it to ventes@dilamco.com after your request.`
            : `${original.name} dépasse la limite de ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES)}. Envoyez-le à ventes@dilamco.com après votre demande.`,
        );
        continue;
      }
      total += file.size;
      next.push({
        file,
        previewUrl: file.type.startsWith("image/") ? URL.createObjectURL(file) : undefined,
      });
    }

    commit(next);
    setNotice(rejected.length > 0 ? [...new Set(rejected)].join(" ") : null);
  }

  function removeAt(index: number) {
    const removed = listRef.current[index];
    if (removed?.previewUrl) URL.revokeObjectURL(removed.previewUrl);
    commit(listRef.current.filter((_, i) => i !== index));
    setNotice(null);
  }

  function onDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragging(false);
    addFiles(Array.from(event.dataTransfer.files));
  }

  const totalBytes = selected.reduce((sum, { file }) => sum + file.size, 0);

  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        onDragOver={(event) => {
          event.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        aria-busy={processing}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-control border border-dashed border-input bg-background px-4 py-6 text-center transition-ui",
          "hover:border-primary/40 hover:bg-primary-soft/40",
          "focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50",
          dragging && "border-primary/60 bg-primary-soft/60",
          invalid && "border-destructive",
        )}
      >
        <span className="icon-pill size-10 bg-primary-soft text-primary">
          <Upload className="size-4" strokeWidth={2} />
        </span>
        <span className="text-sm font-medium">
          {processing
            ? en
              ? "Preparing files…"
              : "Préparation des fichiers…"
            : en
              ? "Add photos or plans"
              : "Ajouter des photos ou des plans"}
        </span>
        <span className="text-xs text-muted-foreground">
          {en
            ? `Photos or PDF · ${CONTACT_FILES_MAX_COUNT} files · ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES, "en")} total`
            : `Photos ou PDF · ${CONTACT_FILES_MAX_COUNT} fichiers · ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES)} au total`}
        </span>
        {/* Sélecteur : alimente la liste, n'est jamais envoyé. */}
        <input
          id={id}
          type="file"
          multiple
          accept={CONTACT_FILES_ACCEPT}
          className="sr-only"
          onChange={(event) => {
            const files = Array.from(event.target.files ?? []);
            event.target.value = "";
            addFiles(files);
          }}
        />
      </label>

      {/* Champ envoyé avec le formulaire, rempli depuis la liste. */}
      <input ref={inputRef} type="file" name={name} multiple hidden tabIndex={-1} />

      {selected.length > 0 ? (
        <ul className="space-y-2">
          {selected.map(({ file, previewUrl }, index) => (
            <li
              key={`${file.name}-${index}`}
              className="flex items-center gap-3 rounded-control border border-input bg-background p-2"
            >
              {previewUrl ? (
                // eslint-disable-next-line @next/next/no-img-element -- aperçu local (blob:)
                <img
                  src={previewUrl}
                  alt=""
                  className="size-10 shrink-0 rounded-[8px] object-cover"
                />
              ) : (
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[8px] bg-primary-soft text-primary">
                  <FileText className="size-4" strokeWidth={2} />
                </span>
              )}
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(file.size, locale)}</p>
              </div>
              <button
                type="button"
                onClick={() => removeAt(index)}
                aria-label={en ? `Remove ${file.name}` : `Retirer ${file.name}`}
                className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-ui hover:bg-muted hover:text-foreground focus-ring"
              >
                <X className="size-4" strokeWidth={2} />
              </button>
            </li>
          ))}
          <li className="text-xs text-muted-foreground">
            {en
              ? `${selected.length} file(s) · ${formatFileSize(totalBytes, "en")} of ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES, "en")}`
              : `${selected.length} fichier(s) · ${formatFileSize(totalBytes)} sur ${formatFileSize(CONTACT_FILES_MAX_TOTAL_BYTES)}`}
          </li>
        </ul>
      ) : null}

      {notice ? (
        <p className="text-xs text-destructive" role="alert">
          {notice}
        </p>
      ) : null}
    </div>
  );
}
