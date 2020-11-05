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
$(document).ready(function () {
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
});
*/

const API_KEY = 'a2ccba0e981edfbbb30762594da0816b';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a2ccba0e981edfbbb30762594da0816b';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500/';


//button search
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-searchable');

buttonElement.onclick = function (event) {
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
    console.log('Value : ', value);
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