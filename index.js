// <-- Created by Jack F. Perry, Jr. -->
// <--        jackfperryjr.com       -->
// =====================================

let bgPictures = [
    "images/cavern.jpg",
    "images/icecream.jpg",
    "images/lanterns.jpg",
    "images/sakura.jpg",
    "images/mantis.jpg",
    "images/tunnel.jpg",
    "images/paper-cranes.jpg"
]

let randomBgPicture = bgPictures[Math.floor(Math.random()*bgPictures.length)];

$("#bg-about").css("background-image", 'url(' + randomBgPicture +')');

// <-- Hey, DOM, you ready? -->
// ============================
$(document).ready(function() {
    $(".moogle-button").click(function() {
        $('html,body').animate({
            scrollTop: $(".carousel-container").offset().top},
            'slow');
    });

    $(".about-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#about").offset().top},
            'slow');
    });

    $(".contact-button").click(function() {
        $('html,body').animate({
            scrollTop: $("#contact").offset().top},
            'slow');
    });

    $(".test-container").click(function() {
        $('html,body').animate({
            scrollTop: $(".navbar-wrapper").offset().top},
            'slow');
    });

    $("#footer-name").click(function() {
        $('html,body').animate({
            scrollTop: $('.test-container').offset().top},
            'slow');
    });
});

// <-- Adding current year copyright --->
// ======================================
let year = new Date().getFullYear();
document.getElementById('footer-name').innerHTML = "&copy; " + year + " <a>jack f. perry, jr.</a>";
// ====================
// <-- That's that. -->