---
title: Synchronize changes
category: git
copyrightText: ©git-scm
---

> Synchronize your local repository with the remote repository on GitHub.com

```sh
$ git fetch
```
Downloads all history from the remote tracking branches

```sh
$ git merge
```
Combines remote tracking branches into current local branch

```sh
$ git push
```
Uploads all local branch commits to GitHub

```sh
$ git pull
```
Updates your current local working branch with all new commits from the corresponding remote branch on GitHub. **git pull is a combination of git fetch and git merge**