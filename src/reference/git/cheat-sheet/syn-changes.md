---
title: 同步更改
category: git
copyrightText: ©git-scm
---

> 将你本地仓库与 GitHub.com 上的远端仓库同步

```sh
$ git fetch
```
下载远端跟踪分支的所有历史

```sh
$ git merge
```
将远端跟踪分支合并到当前本地分支

```sh
$ git push
```
将所有本地分支提交上传到 GitHub

```sh
$ git pull
```
使用来自 GitHub 的对应远端分支的所有新提交更新你当前的本地工作分支。**git pull 是 git fetch 和 git merge 的结合**