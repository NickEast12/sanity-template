export default {
    widgets: [
      {
        name: "document-list",
        options: {
          title: "Recent blog posts",
          order: "_createdAt desc",
          types: ["post"],
        },
        layout: { width: "small" },
      },
      {
        name: "document-list",
        options: {
          title: "Recent Cast",
          order: "_createdAt desc",
          types: ["cast"],
        },
        layout: { width: "small" },
      },
      {
        name: "document-list",
        options: {
          title: "Recent Creative",
          order: "_createdAt desc",
          types: ["creative"],
        },
        layout: { width: "small" },
      },
      {
        name: "document-list",
        options: {
          title: "Recent Creative",
          order: "_createdAt desc",
          types: ["gallery"],
        },
        layout: { width: "small" },
      },
      {name: 'document-list',
      options: {
        title: 'Recently created'
      }
    },
      {
        name: 'project-info',
        layout: {
          width: 'medium',
          height: 'auto'
        }
      },
      {
        name: 'project-users',
        layout: {
          width: 'medium',
          height: 'auto'
        }
      }
    ]
  }