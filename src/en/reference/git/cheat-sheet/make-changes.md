---
title: Make changes
category: git
copyrightText: ©git-scm
---

> Browse and inspect the evolution of project files

```sh
$ git log
```
Lists version history for the current branch

```sh
$ git log --follow [file]
```
Lists version history for a file, beyond renames (works only for a single file)

```sh
$ git diff [first-branch]...[second-branch]
```
Shows content differences between two branches

```sh
$ git show [commit]
```
Outputs metadata and content changes of the specified commit

```sh
$ git add [file]
```
Snapshots the file in preparation for versioning

```sh
$ git commit -m "[descriptive message]"
```
Records file snapshots permanently in version history