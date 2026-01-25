import { ArrowRight } from "lucide-react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { productCategories } from "../data";

export const ProductsMenu = () => (
  <div className="grid gap-y-12 lg:flex lg:space-x-8">
    <div className="w-full shrink-0 lg:max-w-[18rem]">
      <a
        href="#"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg px-0 text-primary-foreground lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col text-left">
          <div className="relative flex aspect-2/1 max-h-[11rem] w-full flex-1 justify-center">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative z-20 flex flex-col rounded-b-xl bg-primary p-6">
            <div className="flex items-center space-x-1 text-xs">
              Enterprise Solutions
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              Scale your business with enterprise-grade features and support.
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="w-full shrink-0 lg:max-w-[18rem]">
      <a
        href="#"
        className="group relative flex h-full flex-row overflow-hidden rounded-lg px-0 text-primary-foreground lg:rounded-xl"
      >
        <div className="relative z-10 flex w-full flex-col text-left">
          <div className="relative flex aspect-2/1 max-h-[11rem] w-full flex-1 justify-center">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
              alt="placeholder"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative z-20 flex flex-col rounded-b-xl bg-primary p-6">
            <div className="flex items-center space-x-1 text-xs">
              Enterprise Solutions
              <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
            </div>
            <p className="mt-2 text-xs text-primary-foreground/70">
              Scale your business with enterprise-grade features and support.
            </p>
          </div>
        </div>
      </a>
    </div>
    <div className="grid w-full gap-y-12 lg:gap-y-6">
      {productCategories.map((category) => (
        <div key={category.title} className="grid gap-y-2 lg:gap-y-6">
          <div className="border-border text-left lg:border-b lg:pb-3">
            <strong className="text-left text-xs font-medium tracking-wider text-muted-foreground uppercase">
              {category.title}
            </strong>
          </div>
          <menu className="grid md:grid-cols-3 md:gap-x-5 lg:gap-y-7">
            {category.products.map((product) => (
              <NavigationMenuLink
                key={product.id}
                href="#"
                className="group flex flex-row items-center space-x-6 border-b border-border py-5 text-left sm:py-7 lg:space-x-4 lg:border-0 lg:py-2"
              >
                <div className="relative flex aspect-square w-6 shrink-0 items-center justify-center overflow-clip rounded md:size-9 md:p-2">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="dark:invert"
                  />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-foreground/85 group-hover:text-foreground">
                    {product.title}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground group-hover:text-foreground">
                    {product.description}
                  </p>
                </div>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 lg:hidden" />
              </NavigationMenuLink>
            ))}
          </menu>
        </div>
      ))}
    </div>
  </div>
);
