const { pick } = require('./random');

/**
 * return a randomly chosen team
 */
function getRandomTeam() {
  return pick(getAllTeams());
}

function getAllTeams() {
  return [
    {
      "country": "United Kingdom",
      "players": ["Davis", "Bell", "Curtis", "Patty", "Cheri", "Wilder"],
      "substitutes": ["Leanne", "Evangelina"]
    },
    {
      "country": "Costa Rica",
      "players": ["Vasquez", "Norris", "Nadia", "Lauri", "Carrillo", "Knight"],
      "substitutes": ["Benjamin", "Rebecca"]
    },
    {
      "country": "Canada",
      "players": ["Bates", "Carlene", "Evans", "Castro", "Florence", "Kennedy"],
      "substitutes": ["Mckenzie", "Hull"]
    },
    {
      "country": "France",
      "players": ["Artis", "Auclair", "Simon", "Richard", "Fournier", "Dupont"],
      "substitutes": ["Margret", "Letitia"]
    },
    {
      "country": "Angola",
      "players": [
        "Pedro",
        "Manuel",
        "Domingos",
        "Francisco",
        "da Silva",
        "Neto"
      ],
      "substitutes": ["Houston", "Marisa"]
    }
  ];
}


module.exports = { getAllTeams, getRandomTeam }