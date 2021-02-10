---
module: fundamentals

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - destructuring, syntax
---

# Destructuring Objects and Arrays

(Estimated time: 1 hour)

<a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></a>

> This is part of Academy's [technical curriculum for **The Mark**](https://github.com/WeAreAcademy/curriculum-mark). All parts of that curriculum, including this project, are licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.

## Overview

This small set of exercises prepares you to recognise and work with "object and property destructuring" - recent JavaScript/TypeScript language features which are very commonly used when working with the React library (and elsewhere).

## Learning Outcomes

- Use object destructuring assignment
- Use object destructuring of a function parameter
- Use array destructuring assignment
- Use array destructuring of a function parameter
- Increased familiarity in describing nested data structures

## Setup: clone this repo, install the required packages

- Clone this repo (or fork then clone)
- In the repo directory, run `yarn` to install any required packages.
- Check that you can run `yarn start`

## Exercise 1: Watch/Read

- [Why Is Array/Object Destructuring So Useful And How To Use It](https://www.youtube.com/watch?v=NIq3qLaHCIs) - Sections: Almost all of it. 0-8mins, then 10m46s to 12m0s (destructuring function parameters)
- [Object and Array Destructuring in JavaScript](https://ui.dev/object-array-destructuring/) (by Tyler McGinnis) - Sections: The first 3 minutes 20 seconds of the video.
- Read this content from Techtonica on [Destructuring in JavaScript](https://github.com/Techtonica/curriculum/blob/main/javascript/destructuring.md)
- A rather intense 100 seconds: [Destructuring in 100 seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY) - Sections: The first 1minute 10seconds only

In TypeScript

- From the TypeScript handbook: [Destructuring syntax in TypeScript](https://www.typescriptlang.org/docs/handbook/variable-declarations.html#destructuring)

## Exercise 2: (Warm up) Familiarisation with the data

- Install the [JSONView extension for Google Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)

- Take a look at the contents of https://api.tvmaze.com/shows/82/episodes. If it looks like one long unbroken string, enable the newly installed JSONView chrome extension to format the data to be more readable.

- With your pair, form a clear description of the _structure_ of the contents.

  - Consider the top level structure - is it an array, an object?
  - Are there any repeating patterns in the data?
  - Don't worry about what every property _represents_.
  - Ensure you can describe the type of the value of every property in any object you see.

- Example:

For example, about the structure of [this data](https://dog.ceo/api/breed/pug/images), which is structurally simpler, we might say: -

- Over all, it is one single object
- This object has two properties: `message` and `status`
- The value of the `message` property is a long array of strings (incidentally the strings look like they might be image URLs)
- The value of the `status` property is simply a string (e.g. "success")

## Exercise 3: Object property destructuring assignment

Start by reading `index.js` and running `yarn start`.

You'll see that a function has been provided for you, `getRandomEpisode()`. This returns an object representing a single episode. It is imported from another module. Don't worry about _how_ it does what it does, but play around with it and make sure you understand _what_ it does, using [this framework](https://www.notion.so/weareacademy/Scholar-framework-for-early-thinking-about-functions-086572ba018045ebbe432560421a03a0).

Call getRandomEpisode() and destructure the value it returns in order to store only the name, season, and number properties in variables of the same name. Print these variables out to make sure that's working.

In the next exercise you'll use a function to do this more tidily. Delete or comment-out the work from _this_ exercise so that you don't get confused, going forward, about where output is coming from!

## Exercise 4: destructuring object properties from a function parameter

In this exercise you'll _twice_ write a function, `printEpisode` which takes a single argument - an object representing an episode of a tv show - and prints some selected detail out from the object.

The _first_ time, you'll use normal object dot notation to access the values of relevant properties on the object.

The second time, you'll re-write your function to use object property destructuring instead.

### First time - with dot-notation

Make a call to your as yet unwritten `printEpisode` function. Pass one argument - the return value from getRandomEpisode().

Now write the `printEpisode` function. It should print a summary of the received episode, composed of the following fields:

    season, number, name, summary

For example, if it were passed the first episode of Game of Thrones TV Show, it might print something like this:

> "Winter is Coming" (Season 1, Episode 1)

> Summary: Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. ...

(Note: the summary text may have some strange characters in it - do not worry about this.)

In this first version, your function should access the value of these properties using standard object dot notation.

### Second time - with destructuring

Now, modify your function and instead of using object dot notation to access the properties of the given episode, use object property destructuring of the function parameter.

## Exercise 5: Doesn't this look familiar?

The first line of index.js might look something like this:

```javascript
const { getRandomEpisode, getAllEpisodes } = require("./episodes.js");
```

This syntax should now look a little more familiar. You should notice some form of destructuring here!

- Describe this destructuring to your pair as clearly as you can.
- Find other examples from previous weeks where this also occurs.

### Data for next exercises

We're done working with episodes now.

The provided function, `getRandomTeam()` returns an object describing a fictional national sportsball team.

Here is an example team object:

```
{
  "country": "Canada",
  "players": ["Bates", "Carlene", "Evans", "Castro", "Florence", "Kennedy"],
  "substitutes": ["Mckenzie", "Hull"]
},
```

You have been told that the players for every team are always listed in the `players` array in the following order:

**Order of players in player array**

goalkeeper, defender1, defender2, forward1, forward2, forward3

It would be better to have the data in a more structured form than reliance on positions in an array, but sometimes you have to work with what you get.

### Exercise 6 - Array destructuring practice:

Call `getRandomTeam()` and destructure the result to extract only the players and the country name.

Then, destructure this players list to extract the names only of the goalkeeper and three forwards.

Print the country name and the names of only goalkeeper and forwards.

### Exercise 7: Optional: Beyond the basics (Combined object and array destructuring assignment)

Rework the last exercise to use only a single destructuring statement:

That is, your code should be just two lines, in this form:

```
const ????? = getRandomTeam()
console.log(`Players for {country} are: Goalie: ${goalie}, Forwards: ${forward1}, ${forward2}, ${forward3}`);
```

where `?????` is your destructuring pattern.

## Exercise 8: Array destructuring of a function parameter

Make a `printPlayers()` function which should receive, as its sole parameter, a list of players, and which should print only the names of the goalie and three forwards.

It should extract these names from the given array using array destructuring of the parameter.

Check it works by calling it a few times with the players array from random teams.

## Exercise 9: Optional: Beyond the basics (Combined object and array destructuring of a function parameter)

Modify your `printPlayers()` function to receive, as its sole parameter, a **team** object, and have it print the country name and the names of the goalie and three forwards.

It should extract these pieces of information using **only** parameter destructuring.

Check it works by calling it a few times with random teams.

## Exercise 10: Refactor one of your React components to use object destructuring of its props object

A very common use of object property destructuring in React is to extract desired values from a component's "props" object.

Review your earlier React projects, find one which uses dot notation to access props, and refactor it to instead destructure the props object in the parameter list.

## Exercise 11: A quick look ahead at React's state hook: `useState`

Take a look at the first code excerpt in the documentation for this popular feature of the React library, called the state hook.

https://reactjs.org/docs/hooks-state.html

You don't have to understand any of that, yet! However, try to find something in the exerpt that looks like an example of array destructuring.

Discuss with your pair.

## The end - what have you learned?

What have you learned? Do you agree with the learning objectives stated at the start of this document?

## Credits:

Some exercises use data generated with the excellent [json-generator](https://www.json-generator.com/) using the following recipe:

```
[
  '{{repeat(5)}}',
  {
    country: '{{country()}}',
    players: ['{{repeat(6)}}', '{{firstName()}}'],
    substitutes: ['{{repeat(2)}}', '{{firstName()}}'],
  }
]

```
