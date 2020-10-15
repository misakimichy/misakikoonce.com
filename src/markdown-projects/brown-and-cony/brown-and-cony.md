---
path: "/projects/brown-and-cony"
date: "2019-05-04"
title: "Brown and Cony"
projectUrl: "https://misakimichy.github.io/brown-and-cony/"
stackTags: ["HTML", "CSS"]
techTags: ["HTML", "CSS", "CSS Variables", "Media Queries"]
description: "Pure CSS animation project written in HTML and pure CSS. When you hover over Brown, the brown bear, and Cony, the cute rabbit, some animation will start."
thumbnail: "screenshot.png"
---
Please hover over the Brown's face then hover over the right area of him! (Brown is the name of the brown bear.)


This is the very first project in my coding life! After I learned HTML and CSS online, I decided to create a cute project to practice the knowledge.
Those characters are Brown and Cony from [LINE](https://line.me/en/), and they are a cute couple😻

### How to create the bear and the bunny?
Did you see that Brown inclines his head and also a speech bubble? Isn't this cute?

I used `<div>`s for all of the parts besides eyes then styled with CSS. His eyes are created with an unordered list with two empty list items. Use `border-radius` to make content round, apply color with `background-color`. For the code sustainability, save the colors in `:root`. `:root` comes the very beginning of the `.css`:

```
:root {
    --maincolor: #6f4343;
    --conycolor: #fffff8;
    --conyoutline: #645e5e;
}
```

In this project, I have three colors saved in `:root`. When you want to change the color, all you need to do is just updating the color in `:root` instead of checking and changing all colors in the code 🙌

You can also set sizes in `:root`, for example, set your `<h1>` - `<h5>` font-size or `margin` size and use it repeatedly in the project.


### How to apply `:root` value in CSS?
You can apply the value to the element using the keyword `var`:
```
.face {
    background-color: var(--maincolor);
}
```
Now the `.face` background-color is `--maincolor`, which is `#6f4343!` You can just swap the color name (`background-color: #6f4343`) with `background-color: var(value-name)`🥳


### How to create a speech bubble
[leaverou.github.io](https://leaverou.github.io/bubbly) is my speech bubble reference. This tutorial is really simple, and it's helpful to understand how to create a speech bubble in CSS; I highly recommend playing around in this tutorial page.

I used a `<div>` and pseudo-selectors, `:before` and `:after` to create this speech bubble. `:before` and `:after` (it's also written with two colons like `::before`/ `::after`) creates pseudo-elements that allows you to insert contents without HTML element. 

According to [Mozilla.org](https://developer.mozilla.org), 
> It is often used to add cosmetic content to an element with the `content` property. It is inline by default.

### How to create a heart
To create a heart, I combined one square and two circles.

1. Create a square then tilt it 45 degrees.

2. Then use `:before` and `:after` pseudo selector and create two circles. Since those elements have a width of the square, I set width and height 100%.

3. Place one circle to the top left of the square perimeter which becomes the circle's diameter, and another circle to the top right.

Tad-dah - It's a heart now🧡