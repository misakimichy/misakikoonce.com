---
path: "/projects/brown-and-cony"
date: "2019-05-04"
title: "Brown and Cony"
projectUrl: "https://misakimichy.github.io/brown-and-cony/"
tags: ["HTML", "CSS"]
description: "Pure CSS animation project written in HTML and pure CSS. When you hover over Brown, the brown bear, and Cony, the cute rabbit, some animation will start."
thumbnail: "screenshot.png"
---
Please hover over the Brown face then hover over the right area of him! (Brown is the name of the brown bear.)


This is the very first project in my coding life! After I learnt HTML and CSS online, I decided to create a cute project to practice them.
Those characters are Brown and Cony from [LINE](https://line.me/en/), which is my favorite messaging app. They are a cute couple😻

## How to create Brown
Did you see that Brown inclines his head and also a speech bubble? Isn't this cute?

I used `<div>`s for all of the parts besides eyes then styled with CSS. His eyes are created with an unordered list with two empty list items. Use `border-radius` to make content round, apply color with `background-color`. For the code sustainability, save the colors you use more than once in CSS in `:root`. `:root` is very helpful in CSS. `:root` helps you to create your template of color and sizes.

### How to save value in :root
`:root` comes the the very beginning of the `.css`.
```
:root {
    --maincolor: #6f4343;
    --conycolor: #fffff8;
    --conyoutline: #645e5e;
}
```
In this project, I have three colors saved in `:root`, `--maincolor`, the main brown color, `--conycolor`, the main Cony's white color, and `--conyoutline`, the outline color for Cony. To set color in `:root`, when you want to change the color, all you need to do is update the hex in here instead of changing all colors in the code 🙌

I didn't used it in this project but you can also set sizes in `:root`, for example, set the your `<h1>` - `<h5>` font-size or `margin` size.

### How to apply :root value in CSS
You can apply the value using the keyword `var`:
```
.face {
    background-color: var(--maincolor);
}
```
Now the `.face` background-color is `--maincolor`, which is #6f4343! You can just swap the color name (`background-color: brown`) with `var(value-name)`🥳


## How to create a speech bubble
I used a `<div>` and pseudo selectors, `:before` and `:after` to create this speech bubble. 


## How to create Cony
The techniques are similar as Brown. I just created different shapes.

## How to create a heart?
I combined one square, and two circles to create a heart🟥🔴🔴 Create a square then tilt it 45 degrees. Then use `:before` and `:after` pseudo selector and create two circles. Since those elements' have width of the square, I set width and height 100%. Place one circle to the top left of the square perimeter which becomes the circle's diameter, and the other to the top right. Tad-dah!!!! It's a heart now!
