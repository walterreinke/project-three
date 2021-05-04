// this is the actual code that I was working on
// setup();

// function setup() {
//   getStats();
// }

// function getStats() {
//   fetch(
//     "https://www.balldontlie.io/api/v1/stats?seasons[]=2018&seasons[]=2015&player_ids[]=1&player_ids[]=2&postseason=true"
//   )
//     .then((response) => response.json())
//     .then((data) => updateStats(data.data));
// }

// function getFirstName(first_name) {
//   fetch(first_name)
//     .then((response) => response.json())
//     .then((data) => showFirstName(data));
// }

// function updateStats(innerText) {
//   let p = document.getElementById("luka");
//   p.innerText = innerText;
// }

// trying to figure out how to work the api with the players one
// function getStats() {
//     fetch("https://www.balldontlie.io/api/v1/players")
//       .then((response) => response.json())
//       .then((data) => updateStats(data.data));
//   }

//   function getFirstName(first_name) {
//     fetch(first_name)
//       .then((response) => response.json())
//       .then((data) => showFirstName(data))
//   }

//   function showFirstName(innerText) {
//     let p = document.getElementById("luka");
//     p.innerText = innerText;
//   }
