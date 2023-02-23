---
title: Branches
category: git
copyrightText: ©git-scm
---

> Branches are an important part of working with Git. Any commits you make will be made on the branch you’re currently “checked out” to. Use `git status` to see which branch that is.

```sh
$ git branch [branch-name]
```
Creates a new branch

```sh
$ git switch -c [branch-name]
```
Switches to the specified branch and updates the working directory

```sh
$ git merge [branch]
```
Combines the specified branch’s history into the current branch. This is usually done in pull requests, but is an important Git operation.

```sh
$ git branch -d [branch-name]
```
Deletes the specified branch