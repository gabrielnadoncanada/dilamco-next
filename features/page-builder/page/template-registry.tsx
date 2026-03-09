import type { Registry } from "../model/block-types";
import { blockRegistry } from "../model/block-registry";
import type { BuilderTemplatePage, TemplatePageDefinition } from "./definitions";
import { BuilderPageTemplate } from "../templates/BuilderPageTemplate";
import { ServiceBuilderPageTemplate } from "../templates/ServiceBuilderPageTemplate";
import { validateTemplatePage } from "./validate-template-page";

export type BuilderTemplateDefinition = {
  render: (page: BuilderTemplatePage) => React.ReactNode;
  blockRegistry: Registry;
};

export type PageTemplateRegistry = Record<string, BuilderTemplateDefinition>;

export const pageTemplateRegistry: PageTemplateRegistry = {
  default: {
    blockRegistry,
    render: (page) => (
      <BuilderPageTemplate data={page} blockRegistry={blockRegistry} />
    ),
  },
  spaces: {
    blockRegistry,
    render: (page) => (
      <ServiceBuilderPageTemplate
        data={page}
        blockRegistry={blockRegistry}
      />
    ),
  },
  services: {
    blockRegistry,
    render: (page) => (
      <ServiceBuilderPageTemplate
        data={page}
        blockRegistry={blockRegistry}
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

  validateTemplatePage(page, template.blockRegistry);

  return template.render(page);
}
