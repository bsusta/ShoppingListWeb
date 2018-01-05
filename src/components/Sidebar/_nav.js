export default {
  items: [
    {
      name: "Filters",
      url: "/filters",
      icon: "fa fa-filter",
      children: [
        {
          name: "Do It",
          url: "/doit",
          icon: "fa fa-play",
          badge: {
            variant: "info",
            text: "4"
          }
        }
      ]
    },

    {
      name: "Shops",
      url: "/projects",
      icon: "fa fa-shopping-basket",
      children: [
        {
          name: "Lidl",
          url: "/project",
          icon: "icon-folder",
          badge: {
            variant: "info",
            text: "4"
          }
        },
        {
          name: "Shop",
          url: "/project/add",
          icon: "fa fa-plus"
        }
      ]
    }
  ]
};
