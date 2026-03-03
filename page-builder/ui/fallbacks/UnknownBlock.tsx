export function UnknownBlock(props: { blockKey: string; isPreview?: boolean }) {
  if (!props.isPreview) return null;

  return (
    <div className="rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-left">
      <div className="text-sm font-semibold">Unknown block</div>
      <div className="mt-1 text-sm opacity-80">
        No registry entry found for: <code>{props.blockKey}</code>
      </div>
    </div>
  );
}