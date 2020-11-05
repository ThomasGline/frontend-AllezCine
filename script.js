///variable
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

const API_KEY = 'a2ccba0e981edfbbb30762594da0816b';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a2ccba0e981edfbbb30762594da0816b';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';


//button search
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');


/*function createMovieContainer(movies) {
    const movieTemplate = `
    <div class="col-2">
        <div class="card">
            ${movies.map((movie) => {
        return `
                <img class="card-img-top" src=${movie.poster_path} data-movie-id=${movie.id}>
                `;
    })}
            <img class="card-img-top" src="img/god.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">God's Compass</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>
    `;
    movieEleme
}*/



buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
<<<<<<< HEAD
            movies = data.result;
            const movieBlock = createMovieContainer(movies);
            movieSearchable.appendChild(movieBlock);
=======
            // data.results []
>>>>>>> thomas
            console.log('Data : ', data);
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
    inputElement.value = '';
    console.log('Value : ', value);
<<<<<<< HEAD
};

function movieSection(movies){
    return movies.map((movie) =>{
        return `
            <img src=${IMAGE_URL + movie.poster_path} data-movie-id=${movie.id}/>
        `;
    })
}

function createMovieContainer(movies){
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
}
=======
}

let image;
let title;
let year;
let style;
//const card = document.querySelector('.container .row .')

let specurl = 'https://api.themoviedb.org/3/movie/popular?api_key=a2ccba0e981edfbbb30762594da0816b';

document.getElementById('btnAction').addEventListener('click', function () {
    //event.preventDefault();
    const value = 'action';

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data : ', data);
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
    inputElement.value = '';
    console.log('Value : ', value);

    document.getElementById('test').innerHTML += `
    <div class="col-2">
        <div class="card">
            <img class="card-img-top" src="img/god.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">God's Compass</h5>
                <p class="card-text">2016</p>
                <p class="card-text">genre</p>
            </div>
        </div>
    </div>`;
    console.log('coucou');
})


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
>>>>>>> thomas
