---
path: '/writings/how-to-work-on-a-commit-log-in-git'
date: '2020-11-30'
title: 'How to work on a commit log in git.'
stackTags: ['git']
description: 'This is a note how to work on a commit log.'
---

Once I changed direction to go and went back to a commit log and worked from the past log. Then I made a commit. I wanted to merge it into master but I didn't know how to do it, so I basically lost the progress, and worked again in a new branch 😱

I don't want to repeat the same thing again, so I leave a note here.

### Go back to your commit history

Before move on the solution, this is how to check your commit log with `git log` command.

I personally prefer using `--oneline` to check commit history since it shows the right length of commit id and commit message unless you want to check full commit log id or commit time.

```
$ git log --oneline

15af9c0 HEAD -> add/contents, origin/add/contents) Add Card to Main.
0f760d3 Add Footer component to App.
0650a76 Add Main and Nav components.
```

This is ho it looks without `--oneline` command:

```
$ git log
commit 15af9c0b74f2df170c38148175d4ecc636a38a58 (origin/add/contents, add/contents)
Author: Misaki Koonce
Date:   Wed Dec 2 17:30:44 2020 -0800

    Add Card to Main.

commit 0f760d3fe832737d6bf4f6a466907aea11129fb5
Author: Misaki Koonce
Date:   Wed Dec 2 17:12:32 2020 -0800

    Add Footer component to App.

commit 0650a76612e77299aa09deef5f42e2d73cc6cc0d
Author: Misaki Koonce
Date:   Wed Dec 2 17:04:30 2020 -0800

    Add Main and Nav components.
```

### Make a new commit from the past commit

Let's make a new commit from `0f760d Add Dooter component to App.`

First, you need to go back to the past commit using commit id.

```
$ git checkout 0f760d3
```

\
Second, delete unpublished commits or stash them.
I personally prefer to stash the changes from the original place in case, so I stash everything.

```
$ git stash --include-untracked
```

If you are sure that you won't use any of the changes from the original commit, it's `15af9c0` in this case, you can run reset command.:

```
  $git reset --hard 0f760d3
```

\
Third, make updates in `0f760d3` and make commits!
Once you commit, of course, create a new commit log out of `0f760d3`:

```
1eed1a6 (HEAD) Add Card component with hard-coded contents.
0f760d3 Add Footer component to App.
0650a76 Add Main and Nav components.
```

Since the HEAD is detached from `add/content 15af9c0` commit, even if you checkout `15af9c0` and see commit log, you won't see `1eed1a6 (HEAD)` commit. This means `1eed1a6` commit won't affect any branches of my project.

\
Finally, merge this commit into master!
This is the point that I didn't know how, and I thought I lost my new commits from `0f760d3`.

```
$ git checkout master
$ git merge master 1eed1a6
```

This is it! So simple 🥳
I needed to use a specific commit id to merge into other branch.

This is how the commit log looks like from master branch after merge:

```
1eed1a6 (HEAD -> master, origin/master) Add Card component with hard-coded contents.
0f760d3 Add Footer component to App.
0650a76 Add Main and Nav components.
```

\
FYI, You can also make branch when you're in `1eed1a6`:

```
$ git checkout -b new-branch-name
```

This might be better if you keep working from the commit, `1eed1a6`.
