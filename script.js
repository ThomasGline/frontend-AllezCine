let identifiant;
let email;


function register() {
    identifiant = document.getElementById('registerIdentifiant').value;
    email = document.getElementById('registerEmail').value;
    alert("Your account has been created. \nYour identifiant : " + identifiant + "\nYour email : " + email);
}
function login() {
    identifiant = document.getElementById('loginIdentifiant').value;
    alert('Hello ' + identifiant + ". You are connected.");
}

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