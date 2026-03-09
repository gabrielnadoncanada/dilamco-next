export function InvalidBlock(props: {
  blockKey: string;
  issues: Array<{ path: string; message: string }>;
  isPreview?: boolean;
}) {
  if (!props.isPreview) return null;

  return (
    <div className="rounded-xl border border-destructive/40 bg-destructive/5 p-4 text-left">
      <div className="text-sm font-semibold">Invalid block props</div>
      <div className="mt-1 text-sm opacity-80">
        <code>{props.blockKey}</code>
      </div>

      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
        {props.issues.map((i, idx) => (
          <li key={idx}>
            <span className="font-medium">{i.path}</span>: {i.message}
          </li>
        ))}
      </ul>
    </div>
  );
}