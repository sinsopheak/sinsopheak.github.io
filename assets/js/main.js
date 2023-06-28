$(document).ready(function () {
    $('.header').height($(window).height());
})

var windowh = window.innerHeight;
if (document.getElementsByClassName('header').style) {
    document.getElementsByClassName('header').style.height = windowh;
}
