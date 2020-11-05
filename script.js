let identifiant;
let email;


function register() {//form register
    identifiant = document.getElementById('registerIdentifiant').value;
    email = document.getElementById('registerEmail').value;
    alert("Your account has been created. \nYour identifiant : " + identifiant + "\nYour email : " + email);
}
function login() {//form login
    identifiant = document.getElementById('loginIdentifiant').value;
    alert('Hello ' + identifiant + ". You are connected.");
}

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

const API_KEY = 'a2ccba0e981edfbbb30762594da0816b';
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a2ccba0e981edfbbb30762594da0816b';

//button search
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');

buttonElement.onclick = function (event) {
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&query=' + value;

    fetch(newUrl)
        .then((res) => res.json())
        .then((data) => {
            console.log('Data : ', data);
        })
        .catch((error) => {
            console.log('Error : ', error);
        });
    console.log('Value : ', value);
}