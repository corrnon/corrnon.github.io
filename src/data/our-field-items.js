import mobile from "../assets/image/img_mobile.png";
import web from "../assets/image/img_web.png";
import system from "../assets/image/img_system_architecture.png";
import design from "../assets/image/img_uiux_design.png";
import more from "../assets/image/img_more.png";

function getNavbarItems() {
  return [
    {
      title: "Mobile Applications",
      image: mobile,
    },
    {
      title: "Web Applications",
      image: web,
    },
    {
      title: "System Architecture",
      image: system,
    },
    {
      title: "UI / UX Design",
      image: design,
    },
    {
      title: "More +",
      image: more,
    },
  ];
}

export default getNavbarItems;
