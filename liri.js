require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");

let search = process.argv[2];
let term   = process.argv.splice(3).join(" ");

//function for all the searches

//concert search
function concertThis(){
    axios.get("https://rest.bandsintown.com/artists/" + term + "/events?app_id=codingbootcamp").then(
        function(response) {
            for(let i in response.data){
                console.log("\nVenue name: " + response.data[i].venue.name+
                            "\nVenue location: " + response.data[i].venue.city + ", " + response.data[i].venue.region, response.data[i].venue.country+
                            "\nEvent Date: " + moment(response.data[i].datetime, "YYYY-MM-DD" ).format("MM/DD/YYYY"));
            }
        }
      );
}
//song search
function spotifyThis(){
    spotify.search({ type: 'track', query: term}, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[1].artists);
        let track = data.tracks.items
        for(let i in track){
            let artists ="";
            for(let j in track[i].artists){
                artists= artists +" "+track[i].artists[j].name
            }
            console.log("\nArtist(s):"+ artists,
                    "\nSong:", track[i].name,
                    "\nPreview link:", track[i].preview_url,
                    "\nAlbum:", track[i].album.name);
            }              
      });
}
//movie search
function movieThis(){
    if (!term) {
        term = "Mr. Nobody";
    }
    axios.get("http://www.omdbapi.com/?t=" + term +"&y=&plot=short&apikey=trilogy").then(
        function(response) {

            console.log("\nMovie title:", response.data.Title,
                        "\nYear of release:", response.data.Year,
                        "\nIMDB Rating:", response.data.imdbRating,
                        "\nRotten Tomatoes score:", response.data.Ratings[1].Value,
                        "\nCountry of production:", response.data.Country,
                        "\nLanguage:", response.data.Language,
                        "\nPlot:", response.data.Plot,
                        "\nActors:", response.data.Actors);
        }
      );
};

// if and else if statements to determine which search to do based off user input
if(search === "concert-this"){
    concertThis();
}
else if(search === "spotify-this-song"){
    spotifyThis();
}
else if(search === "movie-this"){
    movieThis();
}
else if(search === "do-what-it-says"){
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        // split text file into a search and a term
        var dataArr = data.split(",");
        console.log(dataArr);
        //update term to reflect what is in the text file
        term = dataArr[1];
        if (dataArr[0] === "concert-this"){
            concertThis();
        }
        else if(dataArr[0] === "spotify-this-song"){
            spotifyThis();
        }
        else if(dataArr[0] === "movie-this"){
            movieThis();
        }
      
      });         
}
