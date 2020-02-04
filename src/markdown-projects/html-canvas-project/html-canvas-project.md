---
path: "/projects/html-canvas-project"
date: "2020-01-28"
title: "HTML Canvas Project"
projectUrl: "https://misakimichy.github.io/JS30-08-html-canvas/"
tags: ["HTML", "JavaScript"]
description: "When you click and drag the canvas, you can draw a line. The line color will change automatically depends where you are on the canvas."
thumbnail: "screenshot.png"
---
Draw whatever you want in the canvas using the mouse!

This is one of the projects of [Vanilla JavaScript 30 challenge by Wes Bos]("http://").

# Canvas
`<canvas>` tag lets you create a canvas in HTML. You need to specify the canvas width and height, so as Context type. The context for canvas is `2D` or `3D`.

In this project, I set the canvas width equals to `window.innerWidth` and height equals to `window.innerHeight`. To grab the value of `window.innerWidth` and `window.innerHeight`, The entire screen size of the web browser itself becomes a canvas.

# How to draw on Canvas
I set four event listeners to the canvas. 

The first event listener tracks the cursor coordinates in the canvas. Depends where your cursor is, the color will change too:
```
const updateCords = (e, mouse, lastMouse, ctx) => {
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;
    mouse.x = e.pageX - e.currentTarget.offsetLeft;
    mouse.y = e.pageY - e.currentTarget.offsetTop;

    updateColor(lastMouse.x, lastMouse.y, ctx);
};

const updateColor = (x, y, ctx) => {
    let color = (x + y) / 2;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
};

canvas.addEventListener('mousemove', (e) => updateCords(e, mouse, lastMouse, ctx));

```
The value of `mouse` and `lastMouse` coordinates are set (0, 0) for both at the beginning of IIFE.
As you can see, every mouse move in the window invokes the `updateCords()` function, which takes `e`, `mouse`, `lastMouse` and `ctx`. Those are the elements that `window` has. You can see the value of `e` to replace `updateCords(e, mouse, lastMouse, ctx)` with  `console.log(e)` in the developer tool.
`updateColor()` function is also invoked inside of `updateCords()` function. To change color by coordinates, I applied the of `x` and `y` coordinates to hsl of `crx.strokeStyle` value.


The second event listener listens to `mousedown` event and add invoke `draw()` function.

```
    const draw = () => {
        ctx.beginPath();
        ctx.moveTo(lastMouse.x, lastMouse.y);
        ctx.lineTo(mouse.x, mouse.y);
		ctx.closePath();
		ctx.stroke();
    };

```
This function will tell `ctx` a starting point then the coordinates to move to, then draw a line between the starting point and the point the mouse moves to. Since every mouse move updates `mouse(x, y)` and `lastMouse(x, y)`, as far as you drug on the canvas, a line will be drawn.