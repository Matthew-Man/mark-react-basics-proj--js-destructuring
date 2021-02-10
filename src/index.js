"use strict";
const { getRandomEpisode, getAllEpisodes } = require('./episodes.js')
const { getRandomTeam } = require('./players.js');

// const {name, season, number} = getRandomEpisode();
// console.log(name);
// console.log(season);
// console.log(number);

// function printEpisode(episode) {
//     let season = episode.season;
//     let number = episode.number;
//     let name = episode.name;
//     let summary = episode.summary;
    

//     console.log(`"${name}" (Season ${season}, Episode ${number})`);
//     console.log(`Summary: ${summary}`);
// }

function printEpisode({name, season, number, summary} = episodes) {
    console.log(`"${name}" (Season ${season}, Episode ${number})`);
    console.log(`Summary: ${summary}`);
};


printEpisode(getRandomEpisode())