---
path: "/writings/2D-array-diagonal-difference"
date: "2020-10-21"
title: "2D array diagonal difference - HackerRank"
stackTags: ["Data Structure", "JavaScript"]
description: "You are given 2D array that both inner and outer arrays have same length. Return the absolute difference between sums of matrix's two diagonals. I solved this with JavaScript."
---
This [diagonal difference](https://www.hackerrank.com/challenges/diagonal-difference/problem) quiz is from HackerRank Basic level of Problem Solving.


#### Input
You are given 2D array that inner and outer arrays are the same length. Inner array has integer and the integer constraints is from -100 to 100.

#### Output
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

### Solution
My solution that passed all test of HackerRank:

```
const absDiagonalDifference = arr => {
    let diago1 = 0;
    let diago2 = 0;
  for (let row = 0; row < arr.length; row++) {
    diago1 += arr[row][row];
    diago2 += arr[row][arr.length - row - 1];
  }
    return Math.abs(diago1 - diago2);
};
```
### How I solved this

#### 2 dimensional array
This is a problem of 2 dimensional arrays, which means outer array length will be the numbers of rows, and the inner array length will be the numbers of columns.

For example, the matrix of 2D array `[[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 1, 2]]` is going to be:
```
1, 2, 3
4, 5, 6
9, 8, 7
0, 1, 2
```

#### Accessing element of 2D array
To set the outer array of index as `i` and inner array of index as `j`, you can access the inner element  with `array[i][j]`.
\
\
**I don't recommend using nested for loop when you need to work with nested array because nested for loop is really expensive.** Time complexity of a for loop is O(n) which is constant on the other hand, the time complexity of nested for loop (c: depth) becomes O(n^c).