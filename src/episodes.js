const { pick } = require('./random');
const fetch = require('sync-fetch')

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