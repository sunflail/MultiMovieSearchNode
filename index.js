require("dotenv").config();

const axios = require("axios");

const AXIOS_KEY = process.env.AXIOS_KEY;
const OMDB_URL = "https://www.omdbapi.com/";

getOMDBResults("kelson");

// OMDB pull
function getOMDBResults(terms) {
  axios
    .get(`${OMDB_URL}?apikey=${AXIOS_KEY}&s=${terms}&type=movie`)
    .then(function (response) {
      if (response.data.Response === "False") {
        poster =
          "https://pucksandpuzzlepieces.files.wordpress.com/2012/12/filenotfound404.jpg";
        movieTitle = response.data.Error;
        console.log(movieTitle);
        console.log(poster);
      } else {
        const titles = response.data.Search;
        if (titles.length > 12) {
          titles = titles.slice(0, 11);
        }
        titles.map((title) => {
          const movieTitle = title.Title; // url to title - CAPITAL Title
          console.log(movieTitle);
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
