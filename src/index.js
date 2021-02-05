const { getRandomEpisode, getAllEpisodes } = require('./episodes.js')

const episode = getRandomEpisode();

console.log("In index.js.  Printing one random episode: ")
console.log(episode);
