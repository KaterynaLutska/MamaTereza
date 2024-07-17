import i18nextResources from "./i18nextResources.js";

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof i18nextResources;
  }
}
