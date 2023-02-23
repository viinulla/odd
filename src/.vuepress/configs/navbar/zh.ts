import { navbar } from "vuepress-theme-hope";

export const navbar_zh = navbar([
  { text: "主页", link: "/README.md", icon: "home" },
  {
    text: "博客",
    icon: "blog",
    link: "/blog/"
  },
  {
    text: "参考手册",
    icon: "creative",
    prefix: "/reference/",
    children: [{
      text: "小抄",
      children: [{
        text: "Git-小抄",
        icon: "git",
        link: "git/README.md"
      }]
    }]
  },
]);