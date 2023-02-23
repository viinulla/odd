import { navbar } from "vuepress-theme-hope";

export const navbar_en = navbar([
  {
    text: "HOME",
    link: "/en/README.md",
    icon: "home"
  },
  {
    text: "Blog",
    icon: "blog",
    link: "/en/blog/"
  },
  {
    text: "Reference Manual",
    icon: "creative",
    prefix: "/en/reference/",
    children: [{
      text: "Cheat Sheet",
      children: [{
        text: "Git Cheat Sheet",
        icon: "git",
        link: "git/README.md"
      }]
    }]
  },
]);