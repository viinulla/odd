---
title: 创建仓库
category: git
copyrightText: ©git-scm
---

> 当着手于一个新的仓库时，你只需创建一次。要么在本地创建，然后推送到 GitHub；要么通过 clone 一个现有仓库。

```sh
$ git init
```
在使用过 `git init` 命令后，使用以下命令将本地仓库与一个 GitHub 上的空仓库连接起来：

```sh
$ git remote add origin [url]
```
将现有目录转换为一个 Git 仓库

```sh
$ git clone [url]
```
Clone（下载）一个已存在于 GitHub 上的仓库，包括所有的文件、分支和提交(commits)