import { hopeTheme } from "vuepress-theme-hope";
import { navbar_zh, navbar_en, sidebar_zh, sidebar_en } from './configs/index.js';

export default hopeTheme({
  hostname: "https://soyrros.github.io",
  author: {
    name: "0x0",
    url: "https://soyrros.github.io"
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "https://github.com/soyrros/odd",
  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  fullscreen: true,
  locales: {
    "/": {
      navbar: navbar_zh,
      sidebar: sidebar_zh
    },
    "/en/": {
      navbar: navbar_en,
      sidebar: sidebar_en
    }
  },
  plugins: {
    // comment: {
    //   provider: "Giscus",
    //   repo: "vuepress-theme-hope/giscus-discussions",
    //   repoId: "R_kgDOG_Pt2A",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOG_Pt2M4COD69",
    // },
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    }
  },

});