---
title: Redo commits
category: git
copyrightText: ©git-scm
---

> Erase mistakes and craft replacement history

```sh
$ git reset [commit]
```
Undoes all commits after [commit], preserving changes locally

```sh
$ git reset --hard [commit]
```
Discards all history and changes back to the specified commit

::: danger
CAUTION! Changing history can have nasty side effects. If you need to change commits that exist on GitHub (the remote), proceed with caution. If you need help, reach out at [github.community](https://github.community/) or contact support.
:::