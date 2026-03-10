Absolutely! I can create a comprehensive `.md` guide for Git, expanding on your starter commands and making it beginner-friendly yet thorough. Here's a structured Markdown file:

---

# Git Cheat Sheet & Guide

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Basic Workflow](#basic-workflow)
4. [Branching](#branching)
5. [Remote Repositories](#remote-repositories)
6. [Undoing Changes](#undoing-changes)
7. [Useful Tips & Commands](#useful-tips--commands)

---

## Introduction

Git is a distributed version control system that helps track changes in your code and collaborate with others.
It allows you to:

* Track modifications to files
* Revert to previous versions
* Work on multiple features simultaneously using branches
* Collaborate with teams via remote repositories

---

## Getting Started

### Install Git

```bash
# On macOS
brew install git

# On Ubuntu/Debian
sudo apt update
sudo apt install git

# On Windows
# Download from https://git-scm.com/downloads
```

### Configure Git

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Initialize a Repository

```bash
git init
```

This creates a `.git` folder in your project, making it a Git repository.

---

## Basic Workflow

### Check Status

```bash
git status
```

Shows which files are changed, staged, or untracked.

### Stage Changes

```bash
git add <file>      # stage a specific file
git add .           # stage all changes
```

### Commit Changes

```bash
git commit -m "Your descriptive message"
```

Commits staged changes with a message describing what changed.

### View Commit History

```bash
git log
git log --oneline   # shorter, one-line view
```

---

## Branching

### Create a Branch

```bash
git branch feature-branch
```

### Switch Branches

```bash
git checkout feature-branch
# or using newer syntax
git switch feature-branch
```

### Merge Branches

```bash
git checkout main
git merge feature-branch
```

### Delete a Branch

```bash
git branch -d feature-branch
```

---

## Remote Repositories

### Add a Remote

```bash
git remote add origin https://github.com/username/repo.git
```

### Push Changes

```bash
git push origin main           # push main branch to remote
git push -u origin main        # push and track remote branch
```

### Pull Changes

```bash
git pull origin main           # fetch and merge changes from remote
```

### Clone a Repository

```bash
git clone https://github.com/username/repo.git
```

---

## Undoing Changes

### Unstage a File

```bash
git reset HEAD <file>
```

### Discard Local Changes

```bash
git checkout -- <file>
```

### Revert a Commit

```bash
git revert <commit-hash>
```

---

## Useful Tips & Commands

```bash
git diff               # see changes not staged
git diff --staged      # see staged changes
git stash              # temporarily save changes
git stash pop          # apply stashed changes
git log --graph --all --decorate --oneline   # visual history of branches
```

### Git Aliases (Optional)

```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```