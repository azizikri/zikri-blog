export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "611ea7454a407b433aa38165",
                  title: "Sanity Studio",
                  name: "zikri-blog-studio",
                  apiId: "41fdd95a-a80e-4fc9-b6f5-dcbfe7a2321d",
                },
                {
                  buildHookId: "611ea74546ba0c475e878b93",
                  title: "Blog Website",
                  name: "zikri-blog",
                  apiId: "89e7bbc8-715b-4e43-a114-6403243379b9",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/azizikri/zikri-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://zikri-blog.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
