---
title: 重做提交
category: git
copyrightText: ©git-scm
---

> 清除错误和构建用于替换的历史

```sh
$ git reset [commit]
```
撤销所有 [commit] 后的的提交，在本地保存更改

```sh
$ git reset --hard [commit]
```
放弃所有历史，改回指定提交。

::: danger
小心！更改历史可能带来不良后果。如果你需要更改 GitHub（远端）已有的提交，请谨慎操作。如果你需要帮助，可访问 [github.community](https://github.community/) 或联系支持(support)。
:::