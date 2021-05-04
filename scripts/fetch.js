// this runs the function and shows the data when the page loads
getAllStats();

function getAllStats() {
  const playerGameSelector = [
    {
      playerId: 132,
      gameId: 117709,
      selector: "#doncic",
    },
    {
      playerId: 237,
      gameId: 33921,
      selector: "#james1",
    },
    {
      playerId: 237,
      gameId: 30601,
      selector: "#james2",
    },
    {
      playerId: 237,
      gameId: 21969,
      selector: "#james3",
    },
    {
      playerId: 1037,
      gameId: 14670,
      selector: "#iverson",
    },
    {
      playerId: 2931,
      gameId: 10511,
      selector: "#jordan1",
    },
    {
      playerId: 2931,
      gameId: 2646,
      selector: "#jordan2",
    },
    {
      playerId: 2931,
      gameId: 41391,
      selector: "#jordan3",
    },
    {
      playerId: 2994,
      gameId: 36288,
      selector: "#johnson",
    },
  ];

  playerGameSelector.forEach((i) => {
    getStats(i.playerId, i.gameId, i.selector);
  });
}

function getStats(playerId, gameId, selector) {
  fetch(
    `https://www.balldontlie.io/api/v1/stats?player_ids[]=${playerId}&game_ids[]=${gameId}`
  )
    .then((response) => response.json())
    .then((json) => makeStats(json.data[0], selector));
}

function makeStats(stats, selector) {
  let ul = document.createElement("ul");

  let points = document.createElement("li");
  points.innerText = `Points: ${stats.pts}`;
  ul.appendChild(points);

  let assists = document.createElement("li");
  assists.innerText = `Assists: ${stats.ast}`;
  ul.appendChild(assists);

  let rebounds = document.createElement("li");
  rebounds.innerText = `Rebounds: ${stats.reb}`;
  ul.appendChild(rebounds);

  let blocks = document.createElement("li");
  blocks.innerText = `Blocks: ${stats.blk}`;
  ul.appendChild(blocks);

  let steals = document.createElement("li");
  steals.innerText = `Steals: ${stats.stl}`;
  ul.appendChild(steals);

  let fg = document.createElement("li");
  fg.innerText = `FG%: ${stats.fgm}/${stats.fga}`;
  ul.appendChild(fg);

  document.querySelector(selector).appendChild(ul);
}
