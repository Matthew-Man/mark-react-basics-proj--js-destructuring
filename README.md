---
module: fundamentals

level: 2

methods:
  - team
  - pair
  - solo

tags:
  - wip
---

# Destructuring Objects and Arrays

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

## Watch/Read

- [Why Is Array/Object Destructuring So Useful And How To Use It](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) - Sections: Almost all of it. 0-8mins, then 10m46s to 12m0s (destructuring function parameters)
- [Object and Array Destructuring in JavaScript](https://ui.dev/object-array-destructuring/) (by Tyler McGinnis) - Sections: The first 3 minutes 20 seconds of the video.
- Read this content from Techtonica on [Destructuring in JavaScript](https://github.com/Techtonica/curriculum/blob/main/javascript/destructuring.md)
- A rather intense 100 seconds: [Destructuring in 100 seconds](https://www.youtube.com/watch?v=UgEaJBz3bjY) - Sections: The first 1minute 10seconds only

## Setup: clone this repo, install the required packages

- Clone this repo (or fork then clone)
- In the repo directory, run `yarn` to install any required packages.
- Check that you can run `yarn start`

## Exercise 0: (Warm up) Familiarisation with the data

> 🎯 **Success criterion:**

- Install the [JSONView extension for Google Chrome](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)

- Take a look at the contents of https://api.tvmaze.com/shows/82/episodes. If it looks like a big mess, enable the newly installed JSONView plugin to more prettily format the data.

- With your pair, form a clear description of the _structure_ of the contents.

  - Consider the top level structure - is it an array, an object?
  - Are there any repeating patterns in the data?
  - Don't worry about what every property _represents_.
  - Ensure you can describe the type of the value of every property in any object you see.
  - For example, about the structure of [this data](https://dog.ceo/api/breed/pug/images), which is structurally simpler, we might say: -

    - over all, it is one single object.
    - The object has two properties: `message` and `status`
    - The value of the `message` property is a long array of strings (incidentally the strings look like they might be image URLs)
    - The value of the `status` property is simply a string (e.g. "success")

## Exercise N:

Call getRandomEpisode() and destructure the value it returns in order to store only the name, season, and number properties.
Print these properties out to make sure that's working.

In the next exercise you'll use a function to do this more tidily. Delete or comment-out the work from _this_ exercise so that you don't get confused, going forward, about where output is coming from!

## Exercise N: destructure object properties from a function parameter

In this exercise you'll _twice_ write a function, `printEpisode` which takes a single object representing an episode of a tv show, and prints some selected detail out from the object.

The _first_ time, you'll use normal object dot notation to access the values of relevant properties on the object.

The second time, you'll re-write your function to use object property destructuring instead.

Start by reading `index.js` and running `yarn start`.

You'll see that a function has been provided for you, `getRandomEpisode()` - it returns an object representing a single episode. It is imported from another module. Don't worry about _how_ it does what it does, but play around with it and make sure you understand _what_ it does, using [this framework](https://www.notion.so/weareacademy/Scholar-framework-for-early-thinking-about-functions-086572ba018045ebbe432560421a03a0).

Your function should print a summary of the episode, composed of the following fields:

season, number, name, summary

For example, if it were passed the first episode of Game of Thrones TV Show, it might print something like this:

"Winter is Coming" (Season 1, Episode 1)

Summary: Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.

Note: the summary text may have some strange characters in it - do not worry about this.

### Once more, this time with destructuring

Now instead of using object dot notation to access the properties of the given episode, use object property destructuring instead to store the episode properties directly into local variables.

## Exercise N: You've seen destructuring already!

The first line of index.js might look something like this:

```javascript
const { getRandomEpisode, getAllEpisodes } = require("./episodes.js");
```

This syntax should now look a little more familiar. You should notice some form of destructuring here!

- Describe this destructuring to your pair as clearly as you can.
- Find other examples from previous exercises where this also occurs.

### Extension 4:

### Credits:

Some exercises use data generated with the excellent [json-generator](https://www.json-generator.com/) using the following recipe:

```
[
  '{{repeat(5)}}',
  {
    country: '{{country()}}',
    players: ['{{repeat(5)}}', '{{firstName()}}'],
    substitutes: ['{{repeat(2)}}', '{{firstName()}}'],
  }
]
```
