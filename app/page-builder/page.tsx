import { getKitchensinkData } from "@/features/page-builder/kitchensink/lib/get-kitchensink-data";
import { KitchensinkVariantCard } from "@/features/page-builder/kitchensink/ui/KitchensinkVariantCard";

export default async function PageBuilderKitchensinkPage() {
  const groups = await getKitchensinkData();
  const variantCount = groups.reduce((count, group) => count + group.items.length, 0);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(214,206,194,0.36),_transparent_35%),linear-gradient(180deg,_#faf8f4_0%,_#f3efe7_100%)]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <header className="overflow-hidden rounded-[32px] border border-border/70 bg-background/90 px-6 py-8 backdrop-blur sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_320px] lg:items-end">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">
                Internal / Page Builder Kitchensink
              </p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Preview every block variant with its real <span className="italic text-muted-foreground">example.json</span>
              </h1>
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                Visual QA surface for the registry-driven page builder. Each card renders the runtime component, validates props against the live Zod schema, and exposes the exact example payload used for the preview.
              </p>
            </div>

            <div className="grid gap-4 rounded-[28px] border border-border/70 bg-[#f5f2ee] p-5">
              <MetricCard label="Types" value={String(groups.length)} />
              <MetricCard label="Variants" value={String(variantCount)} />
            </div>
          </div>
        </header>

        <div className="space-y-14">
          {groups.map((group) => (
            <section key={group.type} className="space-y-6">
              <div className="flex flex-col gap-3 border-b border-border/70 pb-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground">
                    Block type
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    {group.type}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground">
                  {group.items.length} variant{group.items.length > 1 ? "s" : ""}
                </p>
              </div>

              <div className="space-y-8">
                {group.items.map((item) => (
                  <KitchensinkVariantCard key={`${item.type}-${item.variant}`} item={item} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

type MetricCardProps = {
  label: string;
  value: string;
};

function MetricCard(props: MetricCardProps) {
  const { label, value } = props;

  return (
    <div className="rounded-[20px] border border-black/10 bg-background px-4 py-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
    </div>
  );
}
