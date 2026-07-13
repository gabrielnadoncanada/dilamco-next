import Image from "next/image";

import { Heading } from "@/components/elements/heading";

export function PantryLifestyle() {
  return (
    <section className="pb-16 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[560px] overflow-hidden rounded-2xl md:min-h-[700px]">
          <Image
            src="/images/landing/alto/lifestyle.webp"
            alt="ALTO intégré dans une cuisine contemporaine"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1216px"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent max-sm:bg-gradient-to-t max-sm:from-black/75 max-sm:via-black/20"
            aria-hidden
          />
          <div className="absolute bottom-0 left-0 z-10 max-w-xl p-7 text-white sm:p-12 lg:p-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Une petite empreinte, une grande présence
            </p>
            <Heading
              as="h2"
              variant="h2"
              className="text-balance text-white [&_em]:text-white"
            >
              Du rangement qui ressemble à du <em>mobilier</em>.
            </Heading>
            <p className="mt-5 max-w-md text-base leading-7 text-white/80">
              Condo, appartement ou extension de votre cuisine : 16 po de
              profondeur suffisent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
