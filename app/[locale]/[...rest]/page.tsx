import { notFound } from "next/navigation";

// Attrape toute URL inconnue sous la locale pour rendre notre page 404
// (app/[locale]/not-found.tsx) au lieu de la 404 générique de Next.
export default function CatchAllPage() {
  notFound();
}
