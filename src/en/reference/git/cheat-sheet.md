---
title: Cheat Sheet
category: git
copyrightText: ©git-scm
---

## Install
GitHub Desktop：[desktop.github.com](https://desktop.github.com/)

Git for All Platforms：[git-scm.com](https://git-scm.com/)

## Configure tooling
> Configure user information for all local repositories

```sh
$ git config --global user.name "[name]"
```
Sets the name you want attached to your commit transactions

```sh
$ git config --global user.email "[email address]"
```
Sets the email you want attached to your commit transactions

```sh
$ git config --global color.ui auto
```
Enables helpful colorization of command line output

## Branches
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

## Make changes
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

## Redo commits
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

## Create repositories
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

## The .gitignore file
> Sometimes it may be a good idea to exclude files from being tracked with Git. This is typically done in a special file named .gitignore. You can find helpful templates for .gitignore files at https://github.com/github/gitignore .

## Synchronize changes
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

## Glossary
- **git:** an open source, distributed version-control system
- **GitHub:** a platform for hosting and collaborating on Git repositories
- **commit:** a Git object, a snapshot of your entire repository compressed into a SHA
- **branch:** a lightweight movable pointer to a commit
- **clone:** a local version of a repository, including all commits and branches
- **remote:** a common repository on GitHub that all team members use to exchange their changes
- **fork:** a copy of a repository on GitHub owned by a different user
- **pull request:** a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
- **HEAD:** representing your current working directory, the HEAD pointer can be moved to different branches, tags, or commits when using git switch