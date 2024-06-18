export default defineAppConfig({
  myLayer: {
    name: "Base layer",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
