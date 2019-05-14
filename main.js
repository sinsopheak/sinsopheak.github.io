$(document).ready(function () {
    $('.header').height($(window).height() / 2);
})

let myTypeItInstance = new TypeIt('#simpleUsage', {
    speed: 60,
    startDelay: 900
})
    .type('Welcome to my portfolio.')
    .go();
