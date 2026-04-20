/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
const teamRankings = [
  { "rank": 1,  "name": "Barcelona",       "form": "WLWWW", "wins": 28, "draws": 4,  "losses": 6,  "logo": "https://media.api-sports.io/football/teams/529.png" },
  { "rank": 2,  "name": "Real Madrid",     "form": "WWWLW", "wins": 26, "draws": 6,  "losses": 6,  "logo": "https://media.api-sports.io/football/teams/541.png" },
  { "rank": 3,  "name": "Atletico Madrid", "form": "WWLWD", "wins": 22, "draws": 10, "losses": 6,  "logo": "https://media.api-sports.io/football/teams/530.png" },
  { "rank": 4,  "name": "Athletic Club",   "form": "LWWWD", "wins": 19, "draws": 13, "losses": 6,  "logo": "https://media.api-sports.io/football/teams/531.png" },
  { "rank": 5,  "name": "Villarreal",      "form": "WWWWW", "wins": 20, "draws": 10, "losses": 8,  "logo": "https://media.api-sports.io/football/teams/533.png" },
  { "rank": 6,  "name": "Real Betis",      "form": "DLDDW", "wins": 16, "draws": 12, "losses": 10, "logo": "https://media.api-sports.io/football/teams/543.png" },
  { "rank": 7,  "name": "Celta Vigo",      "form": "WLWWL", "wins": 16, "draws": 7,  "losses": 15, "logo": "https://media.api-sports.io/football/teams/538.png" },
  { "rank": 8,  "name": "Rayo Vallecano",  "form": "DWDWW", "wins": 13, "draws": 13, "losses": 12, "logo": "https://media.api-sports.io/football/teams/728.png" },
  { "rank": 9,  "name": "Osasuna",         "form": "DWWDL", "wins": 12, "draws": 16, "losses": 10, "logo": "https://media.api-sports.io/football/teams/727.png" },
  { "rank": 10, "name": "Mallorca",        "form": "DLLWL", "wins": 13, "draws": 9,  "losses": 16, "logo": "https://media.api-sports.io/football/teams/798.png" },
  { "rank": 11, "name": "Real Sociedad",   "form": "LWLLD", "wins": 13, "draws": 7,  "losses": 18, "logo": "https://media.api-sports.io/football/teams/548.png" },
  { "rank": 12, "name": "Valencia",        "form": "DLLWW", "wins": 11, "draws": 13, "losses": 14, "logo": "https://media.api-sports.io/football/teams/532.png" },
  { "rank": 13, "name": "Getafe",          "form": "LWLLL", "wins": 11, "draws": 9,  "losses": 18, "logo": "https://media.api-sports.io/football/teams/546.png" },
  { "rank": 14, "name": "Espanyol",        "form": "WLLLL", "wins": 11, "draws": 9,  "losses": 18, "logo": "https://media.api-sports.io/football/teams/540.png" },
  { "rank": 15, "name": "Alaves",          "form": "DWWLD", "wins": 10, "draws": 12, "losses": 16, "logo": "https://media.api-sports.io/football/teams/542.png" },
  { "rank": 16, "name": "Girona",          "form": "LLWLW", "wins": 11, "draws": 8,  "losses": 19, "logo": "https://media.api-sports.io/football/teams/547.png" },
  { "rank": 17, "name": "Sevilla",         "form": "LLWLD", "wins": 10, "draws": 11, "losses": 17, "logo": "https://media.api-sports.io/football/teams/536.png" },
  { "rank": 18, "name": "Leganes",         "form": "WWLWD", "wins": 9,  "draws": 13, "losses": 16, "logo": "https://media.api-sports.io/football/teams/537.png" },
  { "rank": 19, "name": "Las Palmas",      "form": "LLLLL", "wins": 8,  "draws": 8,  "losses": 22, "logo": "https://media.api-sports.io/football/teams/534.png" },
  { "rank": 20, "name": "Valladolid",      "form": "LLLLL", "wins": 4,  "draws": 4,  "losses": 30, "logo": "https://media.api-sports.io/football/teams/720.png" },
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < teamRankings.length; i++) {
    let team = teamRankings[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    
    /*if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }*/

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
