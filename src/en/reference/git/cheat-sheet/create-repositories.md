---
title: Create repositories
category: git
copyrightText: ©git-scm
---

> A new repository can either be created locally, or an existing repository can be cloned. When a repository was initialized locally, you have to push it to GitHub afterwards.

```sh
$ git init
```
The git init command turns an existing directory into a new Git repository inside the folder you are running this command. After using the git init command, link the local repository to an empty GitHub repository using the following command:

```sh
$ git remote add origin [url]
```
Specifies the remote repository for your local repository. The url points to a repository on GitHub.

```sh
$ git clone [url]
```
Clone (download) a repository that already exists on GitHub, including all of the files, branches, and commits