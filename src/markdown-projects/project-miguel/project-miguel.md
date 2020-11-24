---
path: '/projects/project-miguel'
date: '2018-10-17'
title: 'Project Miguel'
projectUrl: 'https://misakimichy.github.io/project-miguel/'
stackTags: ['HTML', 'CSS']
techTags: ['HTML', 'CSS', 'CSS animation']
description: 'Miguel, the hedgehog, project is written by HTML and pure CSS. Those little feet move once you open the page.'
thumbnail: 'screenshot.png'
---

This is my second pure CSS project, hedgehog Miguel. I created this project to have better understanding for animation, SVG and to test how much I can create and design with pure CSS.

### How to create spines

I used **font-awesome** for spines. I applied two certificate icons for head and body using `<i>` tag.

### How to create face

Those ears, eyes and nose are empty DOM element and set the size and color in CSS. I created paired items, ears and eyes, using unordered list so that it's going to easy to style them together. </br>
I used SVG to create a cute little smile.

### How to create the moving feet

Those tootsies are all `<div>`s. The reason I didn't use list is that I could add different animation for each of them and I could enjoy the different moves.

The original positions are set used `transform: rotate(Xdeg);`. Then I added animation for 5000 millisecond. Within the 5 second, those little feet moves back and forth because I change the `transform: rotate(Xdeg)` in every 20% of the time.
