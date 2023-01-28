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
    this.year = year;
    this.rating = rating;
    this.returnMovieInfo = function returnMovieInfo() {
        return `${title}, ${year}, ${rating}, ${director}`;
    };
}

function movieData() {
    const movieTitle = document.getElementById('title');
    const movieDirector = document.getElementById('director');
    const movieYear = document.getElementById('year');
    const movieRating = document.getElementById('rating');
    const title = movieTitle.value;
    const director = movieDirector.value;
    const year = movieYear.value;
    const rating = movieRating.value;
    return new Movie(title, year, rating, director);
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
    myMovieLibrary.forEach((string) => {
        const splitString = string.split(', ');
        const [movieTitle, movieDirector, movieYear, movieRating] = splitString;
        title.innerHTML = movieTitle;
        director.innerHTML = movieDirector;
        year.innerHTML = movieYear;
        rating.innerHTML = movieRating;
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
    movieStatus.checked = false;
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
    const movieTitle = document.getElementById('title');
    removeButton.id = `button-${idCounter}`;
    removeButton.classList.add('card-remove-button');
    removeButton.innerText = 'Remove';
    removeButton.dataset.buttonId = movieTitle.value;
    divContainer.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        divContainer.remove();
    });
}

function addBookReadButtonToCard() {
    const bookReadButton = document.createElement('button');
    const divContainer = document.getElementById(`card-${idCounter}`);
    const bookReadCheckBox = document.getElementById('status');
    bookReadButton.id = `button-status-${idCounter}`;
    bookReadButton.classList.add('card-remove-button');
    if (bookReadCheckBox.checked === true) {
        bookReadButton.innerHTML = 'Watched';
    } else (bookReadButton.innerHTML = 'Unwatched');
    divContainer.appendChild(bookReadButton);
    bookReadButton.addEventListener('click', () => {
        if (bookReadButton.innerHTML === 'Watched') {
            bookReadButton.innerHTML = 'Unwatched';
        } else bookReadButton.innerHTML = 'Watched';
    });
}

function createCardInGrid() {
    const divContainer = document.createElement('div');
    divContainer.id = `card-${idCounter}`;
    divContainer.classList.add('cards');
    document.getElementById('card-grid').appendChild(divContainer);
    for (let i = 0; i < 4; i += 1) {
        const paragraph = document.createElement('p');
        paragraph.innerText = '';
        paragraph.id = `paragraph-${i}-${idCounter}`;
        document.getElementById(`card-${(idCounter)}`).appendChild(paragraph);
    }
}

addMovieBtn.addEventListener('click', () => {
    clearFormData();
    showForm();
    newCardId();
});

movieForm.addEventListener('submit', (event) => {
    createCardInGrid();
    addBookReadButtonToCard();
    addRemoveButtonToCard();
    event.preventDefault();
    addMovieToLibrary();
    displayMovieLibrary();
    hideForm();
});

wholreGrid.addEventListener('click', (event) => {
    const eventValue = event.target.dataset.buttonId;
    myMovieLibrary.forEach((string) => {
        if (string.includes(eventValue) === true) {
            myMovieLibrary.splice(myMovieLibrary.indexOf(string), 1);
        }
    });
});
