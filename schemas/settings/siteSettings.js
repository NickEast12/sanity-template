export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Site ID",
    },
    {
      title: "Open graph",
      name: "openGraph",
      description:
        "These will be the default meta tags on all pages that have not set their own",
      type: "openGraph",
    },
  ],
};
