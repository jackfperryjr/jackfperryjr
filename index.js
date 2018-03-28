const aboutClose = $("#about-close");
const aboutOpen = $("#about-open");
const aboutMore = $("#about-more");
const aboutContent = $("#about-content");

$(document).ready(function() { 
    aboutOpen.click(function() {
        aboutOpen.fadeOut();
        aboutMore.animate({"height":"250px"});
        aboutMore.slideDown();
        aboutClose.delay(1000).fadeIn();
        aboutContent.slideDown();
    });   
    aboutClose.click(function() {
        aboutClose.fadeOut();
        aboutMore.animate({"height":"0"});
        aboutMore.slideUp();
        aboutContent.delay(1000).slideUp();
        aboutOpen.delay(1000).fadeIn();
    });   
});