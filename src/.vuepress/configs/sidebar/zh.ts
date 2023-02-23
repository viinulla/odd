import { sidebar } from "vuepress-theme-hope";

export const sidebar_zh = sidebar({
  "/": [
    // "",
    {
      text: "参考手册",
      icon: "creative",
      prefix: "reference/",
      children: [{
        text: "Git",
        icon: "git",
        prefix: "git/",
        collapsible: true,
        children: [
          "README.md",
          "cheat-sheet.md",
          {
            text: "小抄",
            icon: "alias",
            collapsible: true,
            prefix: "cheat-sheet",
            children: [
              "install.md",
              "configure-tooling.md",
              "branches.md",
              "make-changes.md",
              "redo-commits.md",
              "create-repositories.md",
              "gitignore.md",
              "syn-changes.md",
              "glossary.md"
            ]
          }
        ]
      }]
    }
  ],
});
