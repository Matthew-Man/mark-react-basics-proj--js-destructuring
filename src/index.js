"use strict";
const { getRandomEpisode, getAllEpisodes } = require('./episodes.js')
const { getRandomTeam, getAllTeams } = require('./players.js');

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

// function printEpisode({name, season, number, summary} = episodes) {
//     console.log(`"${name}" (Season ${season}, Episode ${number})`);
//     console.log(`Summary: ${summary}`);
// };


// printEpisode(getRandomEpisode())
function printPlayers({ players, country} = players) {
    // console.log(players, country)
    // const ["goalkeeper", "defender1", "defender2", "forward1", "forward2", "forward3"] = getAllTeams.players
    const [a,,,...rest] = players
    console.log(a, rest)
    // console.log(rest)
}

printPlayers(getRandomTeam())

// console.log(getRandomTeam({ players, country }))