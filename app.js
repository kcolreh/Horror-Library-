const addMovieBtn = document.getElementById('addMoviebtn');
const movieForm = document.getElementById('inputForm');
// const movieCard = document.getElementById('original-card');
const myMovieLibrary = [];
let idCounter = 0;

function Movie(title, year, rating, director, status) {
    this.title = title;
    this.director = director;
    this.status = status;
    this.year = year;
    this.rating = rating;
    this.returnMovieInfo = function returnMovieInfo() {
        return `${title} is made in ${year} and has a rating on IMDB of ${rating}, directed by ${director} and i have ${status} this movie`;
    };
}

function movieData() {
    const movieTitle = document.getElementById('title');
    const movieDirector = document.getElementById('director');
    const movieYear = document.getElementById('year');
    const movieRating = document.getElementById('rating');
    const movieStatus = document.getElementById('status');
    const title = movieTitle.value;
    const director = movieDirector.value;
    const year = movieYear.value;
    const rating = movieRating.value;
    const status = movieStatus.value;
    return new Movie(title, year, rating, director, status);
}

function addMovieToLibrary() {
    const userInput = movieData();
    const newMovie = userInput.returnMovieInfo() + myMovieLibrary;
    return myMovieLibrary.push(newMovie);
}

console.log(myMovieLibrary);
// Below are functions to add a new card clone to the grid

function addtogrid() {
    const cardGrid = document.getElementById('card-grid');
    const oldcard = document.getElementById('original-card');
    const copyCard = oldcard.cloneNode(true);
    copyCard.id = `card-${idCounter}`;
    cardGrid.appendChild(copyCard);
}

function newCardId() {
    idCounter += 1;
}

addMovieBtn.addEventListener('click', () => {
    newCardId();
    addtogrid();
});

movieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addMovieToLibrary();
});
