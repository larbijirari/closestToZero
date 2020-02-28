# Close to Zero

## Introduction

A function that returns the closest value to 0

here are some cases to conisder:

- given an array of positive and negative integers, it returns the closest number to zero

- if the closest number in input could be either negative or positive, the function returns the positive one

- if the input array is undefined or empty, the function returns 0

Examples:

- when input is [8, 5, 10] it must returns 5

- when input is [5, 4, -9, 6, -10, -1, 8] it must return -1

- when input is [8, 2, 3, -2] it must return 2

- when input is [2, 0], it must returns 0, as 0 is ... the closest number to 0

## How i sloved the problem

- I decided to use a **Reducer(prev,curr)** on the input and keep each time in the **curr** the closest value to **0**

## Technical Discussion

i used **ES6** and **jest** to run tests ( i know that using Typescript can be easier to handle types)

## What wloud i have done if i was working in a real case:

- add a linter
- add pipelines that checks that the test passes on every commit
- use Typescript
- add a sonarcube to monitor code quality
- ask for code review
- use a commit message that has the following syntax:if you apply this commit it wil '<commit message>'

## files structure

`/src/closestToZero.js` => containts the function

`/tests/closestToZero.spec.js` => containts the tests

### Installation / passing tests

```sh
> git pull https://gitlab.com/closestToZero
> cd closestToZero
> npm install
> npm run test
```
