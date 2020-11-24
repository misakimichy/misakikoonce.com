---
path: '/writings/2D-array-diagonal-difference'
date: '2020-10-21'
title: '2D array diagonal difference - HackerRank'
stackTags: ['Data Structure', 'JavaScript']
description: "You are given a 2D array that both inner and outer arrays have the same length. Return the absolute difference between sums of matrix's two diagonals. I solved this with JavaScript."
---

This [diagonal difference](https://www.hackerrank.com/challenges/diagonal-difference/problem) quiz is from HackerRank, Basic level of Problem Solving.

#### Input

You are given a 2D array that inner and outer arrays are the same length. The inner array has integers, and the integers constraints are from -100 to 100.

#### Output

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

### How I solved this

Let me explain what a 2D array is before showing my solution.

#### 2 dimensional array

When you face 2D array ,which is an array of arrays, it represents a table with rows and columns; outer array length is the number of rows of a matrix, and the inner array length is the numbers of columns of a matrix.
For example, the matrix of 2D array `[[1, 2, 3], [4, 5, 6], [7, 8, 9], [0, 1, 2]]` is going to be:

```
*  *  *
1, 2, 3 #
4, 5, 6 #
9, 8, 7 #
0, 1, 2 #

// * is column
// # is row
```

### Solution

In this problem, the outer and inner arrays always have the same length, you can calculate the diagonals of length x length matrix.
My solution that passed all test of HackerRank:

```
const absDiagonalDifference = arr => {
    let diago1 = 0;
    let diago2 = 0;
  for (let i = 0; i < arr.length; i++) {
    diago1 += arr[i][i];
    diago2 += arr[i][arr.length - i - 1];
  }
    return Math.abs(diago1 - diago2);
};
```

Let's test this:

```
const test = [[1,2,3], [4,5,6], [9,8,7]];
absDiagonalDifference(test)l;
```

\
This is going to be 3 x 3 matrix:

```
1, 2, 3
4, 5, 6
9, 8, 7
```

\
What you need is the sum of diagonals, `1 + 5 + 7` and `3 + 5 + 9`.
To explain this problem easier, I name top left to bottom right diagonal `diago1` and top right to bottom left diagonal `diago2`.
\
\
To calculate the sum of `diago1`, you need to get the first element in the first array, the second element in the second array, and the last element in the last array. This sounds easy because I can use the same index to access the inner array element as the outer array index.
\
\
When it's `i = 0`, `diago1` points `arr[0][0]`, which means first row and first column, which is `1`. Diago1 is currently equal to 1.
Then index increases by one and now `i = 1`. This is accessing `arr[1][1]`, which is second row and second column, `5`. Now `diago2 = 1 + 5`;
\
Like this, from top left to bottom right diagonal get calculated in a simple way.
\
\
\
I confused a little to think of how to orderly iterate from the last element to the first element by rows, for example, in this 3x3 example, I want to access the last element of an inner array, then second last from the second array, then the first element of the last array.
\
I know that `[array.length - 1]` is the way to access the last element of an array, and `[array.length - 2]` is to access the second to last element of the array. We can use this!
\
All I need to do is dynamically calculate this using `array.length` and `i`, which going to be `[array.length - i - 1]`.
When it's on the first `arr[0]`, it accesses the last column, `arr[0][2]`, which is a result of 3 - 0 - 1.
\
Then the index increases by one and now `i = 1`. This is accessing `arr[1][1]`, which is a result of 3 - 1 - 1.
\
Then index increases again, `i = 2`, then now it's `arr[2][0]`, which is a result of 3 - 2 - 1.
\
\
\
Voila🥳
\
\
As you can expect, this solution will work with 4x4, 5x5, 6x6... matrix!
