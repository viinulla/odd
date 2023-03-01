import { hopeTheme } from "vuepress-theme-hope";
import { navbar_zh, navbar_en, sidebar_zh, sidebar_en } from './configs/index.js';

export default hopeTheme({
  hostname: "https://soyrros.github.io/odd",
  author: {
    name: "0x0",
    url: "https://soyrros.github.io"
  },
  iconAssets: "iconfont",
  logo: "/logo.svg",
  repo: "https://github.com/soyrros/odd",
  docsDir: "src",
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
    comment: {
      provider: "Giscus",
      repo: "soyrros/odd",
      repoId: "R_kgDOJAoN3g",
      category: "Announcements",
      categoryId: "DIC_kwDOJAoN3s4CUbpK",
    },
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
    },
    // npm -g install vue-pwa-asset-generator
    // vue-pwa-generator -a logo.png -o assets/icon
    pwa: {
      favicon: "/favicon.ico",
      themeColor: "#fb9b5f",
      cacheHTML: false,
      maxSize: 3072,
      apple: {
        icon: "/assets/icon/apple-touch-icon-152x152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144x144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-maskable-512x512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-maskable-192x192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }
  },
});