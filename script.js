///variable test
let identifiant;
let email;
let movies;


//alerte box cookie
confirm('Attention ! Nous utilisons des cookies pour stocker et accéder à des informations personnelles comme votre visite sur ce site.');


function register() {//form register
    identifiant = document.getElementById('registerIdentifiant').value;
    email = document.getElementById('registerEmail').value;
    alert("Your account has been created. \nYour identifiant : " + identifiant + "\nYour email : " + email);
}
function login() {//form login
    identifiant = document.getElementById('loginIdentifiant').value;
    alert('Hello ' + identifiant + ". You are connected.");
}
/*
//button scroll page-up
/*$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});*/

//button search
/*const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');*/


/*buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            movies = data.result;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);
            console.log('Data : ', data);
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
    inputElement.value = '';
    console.log('Value : ', value);
};

function movieSection(movies) {
    return movies.map((movie) => {
        return `
            <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');

    const movieTemplate = `
        <section class="section">
            ${movieSection(movies)}
        </section>
        <div class="content">
            <p id="content-close">X</p>
        </div>
    `;

    movieElement.innerHTML = movieTemplate;
    return movieElement;
}*/
function generateFirstCard() {//Fonction qui génère les 5 premières card
    let counter = 5;
    while (counter >= 1) {
        document.getElementById('firstMovie').innerHTML += `
        <div class="col-2">
        <div class="card">
            <img class="card-img-top" src="img/citizen.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Citizen Soldier</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>`;
        counter--;
    }
}
generateFirstCard();

function generateFeatureCard() {//Fonction qui génère les card de feature
    let counter = 12;
    while (counter >= 1) {
        document.getElementById('featureMovies').innerHTML += `
        <div class="col-2">
        <div class="card">
            <img class="card-img-top" src="img/citizen.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Citizen Soldier</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>`;
        counter--;
    }
}
generateFeatureCard();

function generateShopCard() {//Fonction qui génère les card de shop
    let counter = 8;
    while (counter >= 1) {
        document.getElementById('ShopMovies').innerHTML += `
        <div class="col-3">
        <div class="card">
            <img class="card-img-top" src="img/citizen.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Citizen Soldier</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>`;
        counter--;
    }
}
generateShopCard();


const MOVIE_DB_API = 'a2ccba0e981edfbbb30762594da0816b';
const MOVIE_DB_ENDPOINT = 'https://api.themoviedb.org';
const MOVIE_DB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w500';
const DEFAULT_POST_IMAGE = 'https://via.placeholder.com/150';

// API information.
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
// Selecting our Elements.
const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
/* call the showMovies function that requests the movie data from the Api using fetch.
 Then it puts those data in the main HTML tag by creating elments for those data. */

showMovies(apiUrl);


function showMovies(url) {
    fetch(url).then(res => res.json())
        .then(function (data) {
            data.results.forEach(element => {
                // Creating elemnts for our data inside the main tag. 
                const el = document.createElement('div');
                const image = document.createElement('img');
                const text = document.createElement('h2');
                console.log('test el', el);
                console.log('test img', image);
                console.log('test h2', text);

                text.innerHTML = `${element.title}`;
                image.src = IMGPATH + element.poster_path;
                document.getElementById('featureMovies').innerHTML += `
        <div class="col-2">
        <div class="card">
            <img class="card-img-top" src="${image.src}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>`;
            });
        });
}



