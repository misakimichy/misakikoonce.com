---
path: '/writings/how-to-work-on-commit-log-in-git'
date: '2020-11-30'
title: 'How to work on commit log in git'
stackTags: ['git']
description: 'test'
---

### Go back to your commit history

Check your commit log with `git log` command.

```
git log --oneline
```

That'll show commit log id with commit message.

<!-- ![Commit log](../commit-log.png) -->

I personally prefer using `--oneline` to check commit history since it shows the minimum commit id and commit message.
This is how it looks without `--online` option.

<!-- ![Commit log](../commit-log-git.png) -->

To go back previous commit, for example, the commit id of `e77ec21` (Update writing and project tags.), you can use the checkout command.

```
git checkout e77ec21
```
