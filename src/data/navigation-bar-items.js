function getNavbarItems() {
  return [
    {
      title: "Home",
      exact: true,
      to: "/",
    },
    {
      title: "About us",
      to: "/about-us",
    },
    // {
    //   title: "Projects",
    //   to: "/projects",
    // },
    {
      title: "Contact",
      to: "/contact",
    },
  ];
}

export default getNavbarItems;
