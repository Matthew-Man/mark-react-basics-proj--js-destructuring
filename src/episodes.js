"use strict";
const fetch = require('sync-fetch')

//Pick and return a random element from given array
function pick(arr) {
    const ix = Math.floor(Math.random() * arr.length);
    return arr[ix];
}
// Return a random episode (object) fetched from the TVMaze Web API!
function getRandomEpisode() {
    const allEpisodes = fetch('https://api.tvmaze.com/shows/82/episodes').json()
    const chosenEpisode = pick(allEpisodes)
    return chosenEpisode;
}
// Return a random episode (object) fetched from the TVMaze Web API!
function getAllEpisodes() {
    const allEpisodes = fetch('https://api.tvmaze.com/shows/82/episodes').json()
    return allEpisodes;
}

module.exports = { getRandomEpisode, getAllEpisodes }