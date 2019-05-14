$(document).ready(function () {
    $('.header').height($(window).height());
})

var windowh = window.innerHeight;
document.getElementsByClassName('header').style.height = windowh;

let myTypeItInstance = new TypeIt('#simpleUsage', {
    speed: 60,
    startDelay: 900
})
    .type('Welcome to my portfolio.')
    .go();
