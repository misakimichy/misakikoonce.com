---
path: "/writings/how-to-add-self-hosted-fonts-in-gatsby"
date: "2020-09-16"
title: "How to add self-hosted fonts in Gatsby"
stackTags: ["Gatsby", "React"]
description: "I struggled to add self-hosted fonts to my Gatsby project. This is a note to show how I solved it.."
---

### Introduction
I struggled to add self-hosted fonts to my Gatsby project. This is a note to show how I solved it.
If you're adding web fonts, you can directly add `@import url("")` into your style sheet.

### What didn't work?
I created a fonts directory inside of static and added downloaded fonts files. After that, I tried a few things.

- I placed `@font-face` in `Global.js`, inside of my main styling file.
- I created `fonts.js` under `src/styles` with other styling sheets and import it inside of `createGlobalStyle`.
- I imported the `fonts.js` file in `Layout.js` file.

Those approaches did work for me.


### How to solve this
1. After place downloaded font files in `static/fonts`, create a `font.css` at the same level.
2. Add your fonts data in side of `fonts.css` file using `@font-face`. My `fonts.css` looks like this:
```
  @font-face {
      font-family: 'Benne Regular';
      src: url('Benne-Regular.woff') format('woff');
      font-weight: normal;
      font-style: normal;
  }
  /* You can add more fonts in the same file. */
```

3. Import `fonts.css` in the same file that has `createGlobalStyles`.

This is it👏

### Conclusion
The key to solve this problem was to create `fonts.css` inside of `/static/fonts/`!