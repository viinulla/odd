---
title: 进行更改
category: git
copyrightText: ©git-scm
---

> 浏览并检查项目文件的发展

```sh
$ git log
```
列出当前分支的版本历史

```sh
$ git log --follow [file]
```
列出文件的版本历史，包括重命名

```sh
$ git diff [first-branch]...[second-branch]
```
展示两个分支之间的内容差异

```sh
$ git show [commit]
```
输出指定commit的元数据和内容变化

```sh
$ git add [file]
```
将文件进行快照处理用于版本控制

```sh
$ git commit -m "[descriptive message]"
```
将文件快照永久地记录在版本历史中