$(document).ready(function () {
    $('.header').height($(window).height());
})

var windowh = window.innerHeight;
document.getElementsByClassName('header').style.height = windowh;