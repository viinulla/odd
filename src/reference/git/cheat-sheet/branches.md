---
title: 分支
category: git
copyrightText: ©git-scm
---

> 分支是使用 Git 工作的一个重要部分。你做的任何提交都会发生在当前“checked out”到的分支上。使用 git status 查看那是哪个分支。

```sh
$ git branch [branch-name]
```
创建一个新分支

```sh
$ git switch -c [branch-name]
```
切换到指定分支并更新工作目录(working directory)

```sh
$ git merge [branch]
```
将指定分支的历史合并到当前分支。这通常在拉取请求(PR)中完成，但也是一个重要的 Git 操作。

```sh
$ git branch -d [branch-name]
```
删除指定分支