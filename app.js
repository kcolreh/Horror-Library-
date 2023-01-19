const myMovieLibrary = [];

function Movie(title, year, imdbRating, director, status) {
    this.title = title;
    this.director = director;
    this.status = status;
    this.year = year;
    this.imdbRating = imdbRating;
    this.returnMovieInfo = function returnMovieInfo() {
        return `${title} is made in ${year} and has a rating on IMDB of ${imdbRating}, directed by ${director} and i have ${status} this movie`;
    };
}
const theShining = new Movie('The Shining', '1980', '8.4', 'Stanley Kubrick ', 'watched');
// const itFollows = new Movie('It Follows', '2014', '6.8', 'David Robert Mitchell', 'watched');

function addMovieToLibrary() {
    const newShit = theShining.returnMovieInfo() + myMovieLibrary;
    return myMovieLibrary.push(newShit);
}

addMovieToLibrary();
console.log(myMovieLibrary);
