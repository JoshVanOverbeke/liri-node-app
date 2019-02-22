# liri-node-app

## Uses

This liri app can search upcoming concerts by artist, songs information by song name, and movie information by movie name.

## Set up

1. First you must first have node installed. 
2. Once that is done you can use terminal to npm install the packages after you have cloned or downloaded the repository. 
3. After that, you must create a .env file in you working directory and put this text into into it, removing the placeholders and putting your spotify keys in:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
If this is all done correctly, you can now use the liri app!

## How to use

When you run 'node liri.js' in terminal, the first argument after liri.js will tell it what type of search to run: concert, song, movie, or one of those three which has been specified in the random.txt file.

The 4 arguments are:
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says

The first three argument (concert, spotify, movie) will take a second argument that the user inputs and search it.

do-what-it-says does not take a second argument, but takes a string (in the form of ex: *concert-this,"Metallica"*) from random.txt and runs one of the other three searches.

If movie-this is not given a second argument, it will default search Mr. Nobody.
If spotify-this-song is not given a second argument, it will default search The Sign.

## Results

concert-this will return upcoming events in this format:

* Name of the venue

* Venue location

* Date of the Event

spotify-this-song will return 20 songs in this format:

* Artist(s)

* The song's name

* A preview link of the song from Spotify

* The album that the song is from

movie-this will return movie information is this format:
* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.

## Help
Included in the repository is a video titled:
### liri-node-app-explanation.webm
It explains how to do searches using the liri bot and other things about the app if you need help.