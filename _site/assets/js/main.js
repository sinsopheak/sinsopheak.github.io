$(document).ready(function () {
    $('.header').height($(window).height());
})

let myTypeItInstance = new TypeIt('#simpleUsage', {
    speed: 60,
    startDelay: 900
})
    .type('Welcome to my portfolio.')
    .go();


var windowh = window.innerHeight;
document.getElementsByClassName('header').style.height = windowh;

document.getElementById("open-popup").onclick = function () { 
    // showMailingPopUp() 
    console.log("hi");
};