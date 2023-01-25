const addMovieBtn = document.getElementById('addMoviebtn');
const wholreGrid = document.getElementById('card-grid');
const movieForm = document.getElementById('inputForm');
const myMovieLibrary = [];
let idCounter = -1;

function newCardId() {
    idCounter += 1;
}

function Movie(title, year, rating, director, status) {
    this.title = title;
    this.director = director;
    this.status = status;
    this.year = year;
    this.rating = rating;
    this.returnMovieInfo = function returnMovieInfo() {
        return `${title}, ${year}, ${rating}, ${director}, ${status}`;
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
    const newMovie = userInput.returnMovieInfo();
    return myMovieLibrary.push(newMovie);
}

function displayMovieLibrary() {
    const title = document.getElementById(`paragraph-${0}-${idCounter}`);
    const director = document.getElementById(`paragraph-${1}-${idCounter}`);
    const year = document.getElementById(`paragraph-${2}-${idCounter}`);
    const rating = document.getElementById(`paragraph-${3}-${idCounter}`);
    const status = document.getElementById(`paragraph-${4}-${idCounter}`);
    myMovieLibrary.forEach((string) => {
        const splitString = string.split(', ');
        const [movieTitle, movieDirector, movieYear, movieRating, movieStatus] = splitString;
        title.innerHTML = movieTitle;
        director.innerHTML = movieDirector;
        year.innerHTML = movieYear;
        rating.innerHTML = movieRating;
        status.innerHTML = movieStatus;
    });
}

function clearFormData() {
    const movieTitle = document.getElementById('title');
    const movieDirector = document.getElementById('director');
    const movieYear = document.getElementById('year');
    const movieRating = document.getElementById('rating');
    const movieStatus = document.getElementById('status');
    movieTitle.value = '';
    movieDirector.value = '';
    movieYear.value = '';
    movieRating.value = '';
    movieStatus.value = '';
}

function showForm() {
    const movieFormContainer = document.getElementById('form-container');
    const fullContentPage = document.getElementById('full-content-container');
    movieFormContainer.classList.add('form-container-visibility');
    fullContentPage.classList.add('full-content-container');
    movieForm.classList.add('form-positioning');
    addMovieBtn.disabled = true;
}

function hideForm() {
    const movieFormContainer = document.getElementById('form-container');
    const fullContentPage = document.getElementById('full-content-container');
    movieFormContainer.classList.remove('form-container-visibility');
    fullContentPage.classList.remove('full-content-container');
    movieForm.classList.remove('form-positioning');
    addMovieBtn.disabled = false;
}

function addRemoveButtonToCard() {
    const removeButton = document.createElement('button');
    const divContainer = document.getElementById(`card-${idCounter}`);
    removeButton.id = `button-${idCounter}`;
    removeButton.classList.add('card-remove-button');
    removeButton.innerText = 'Remove';
    divContainer.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        divContainer.remove();
    });
}

function createCardInGrid() {
    const divContainer = document.createElement('div');
    divContainer.id = `card-${idCounter}`;
    divContainer.classList.add('cards');
    document.getElementById('card-grid').appendChild(divContainer);
    for (let i = 0; i < 5; i += 1) {
        const paragraph = document.createElement('p');
        paragraph.innerText = '';
        paragraph.id = `paragraph-${i}-${idCounter}`;
        document.getElementById(`card-${idCounter}`).appendChild(paragraph);
    } addRemoveButtonToCard();
}

addMovieBtn.addEventListener('click', () => {
    clearFormData();
    showForm();
    newCardId();
    createCardInGrid();
});

movieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addMovieToLibrary();
    displayMovieLibrary();
    hideForm();
});

wholreGrid.addEventListener('click', (event) => {
    console.log(event.target.id);
    const eventToString = JSON.stringify(event.target.id);
    const stringIndexNumber = eventToString.slice(-2, -1);
    myMovieLibrary.splice(stringIndexNumber, 1);
});
