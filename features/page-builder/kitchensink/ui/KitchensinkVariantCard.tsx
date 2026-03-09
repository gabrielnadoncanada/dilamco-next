import type { KitchensinkVariantItem } from "../lib/get-kitchensink-data";
import { ExampleJsonDialog } from "./ExampleJsonDialog";

type KitchensinkVariantCardProps = {
  item: KitchensinkVariantItem;
};

export function KitchensinkVariantCard(props: KitchensinkVariantCardProps) {
  const { item } = props;
  const Component = item.component;

  return (
    <article className="border border-border/70 ">
      <div className="border-b bg-muted/30 px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
          <div className="min-w-0 space-y-3">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {item.title}
              </h3>
              <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </div>

          <div className="mt-1 flex flex-col gap-3 lg:items-end">
            <ExampleJsonDialog
              title={item.title}
              examplePath={item.paths.example ?? null}
              exampleSource={item.exampleSource}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#f5f2ee] p-3 sm:p-5">
        {item.validation.success && Component && item.props ? (
          <div className="min-h-[400px] flex items-center  bg-[#f6f3ef]">
            <div className="pb-preview-root w-full z-1 relative">
              <Component {...item.props} />
            </div>
          </div>
        ) : (
          <div className="rounded-[24px] border border-red-200 bg-red-50 p-5 text-sm text-red-700">
            <p className="font-medium">Preview unavailable</p>
            <p className="mt-2 whitespace-pre-wrap break-words">
              {item.validation.error ?? "Unknown validation error."}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}
