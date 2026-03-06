import type { Registry } from "../model/block-types";
import { blockRegistry } from "../model/block-registry";
import { createRegistry } from "../model/createRegistry";
import { heroDefs } from "../sections/hero";
import { splitDefs } from "../sections/split";
import { ctaDefs } from "../sections/cta";
import { processDefs } from "../sections/process";
import { gridDefs } from "../sections/grid";
import type { BuilderTemplatePage, TemplatePageDefinition } from "./definitions";
import { BuilderPageTemplate } from "../templates/BuilderPageTemplate";
import { ServiceBuilderPageTemplate } from "../templates/ServiceBuilderPageTemplate";

export type BuilderTemplateDefinition = {
  render: (page: BuilderTemplatePage) => React.ReactNode;
  blockRegistry: Registry;
};

export type PageTemplateRegistry = Record<string, BuilderTemplateDefinition>;

const serviceBlockRegistry = createRegistry([
  ...heroDefs,
  ...splitDefs,
  ...ctaDefs,
  ...processDefs,
  ...gridDefs,
] as const);

export const pageTemplateRegistry: PageTemplateRegistry = {
  default: {
    blockRegistry,
    render: (page) => (
      <BuilderPageTemplate data={page} blockRegistry={blockRegistry} />
    ),
  },
  spaces: {
    blockRegistry: serviceBlockRegistry,
    render: (page) => (
      <ServiceBuilderPageTemplate
        data={page}
        blockRegistry={serviceBlockRegistry}
      />
    ),
  },
  services: {
    blockRegistry: serviceBlockRegistry,
    render: (page) => (
      <ServiceBuilderPageTemplate
        data={page}
        blockRegistry={serviceBlockRegistry}
      />
    ),
  },
};

export function getPageTemplate(
  templateKey: string,
  registry: PageTemplateRegistry = pageTemplateRegistry,
) {
  return registry[templateKey] ?? null;
}

export function renderTemplatePage(
  page: TemplatePageDefinition,
  registry: PageTemplateRegistry = pageTemplateRegistry,
) {
  const template = getPageTemplate(page.template, registry);
  if (!template) {
    throw new Error(`Unknown page template "${page.template}".`);
  }

  return template.render(page);
}
