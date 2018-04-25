// <-- Created by Jack F. Perry, Jr. -->
// <--        jackfperryjr.com       -->
// =====================================

// <-- Setting some variables -->
// ==============================
const aboutClose = $("#about-close");
const aboutOpen = $("#about-open");
const aboutMore = $("#about-more");
const aboutContent = $("#about-content");

// <-- Hey, DOM, you ready? -->
// ============================
$(document).ready(function() {

    // <-- Click function to OPEN more about me -->
    // ============================================
    aboutOpen.click(function() {
        aboutOpen.fadeOut();
        aboutMore.animate({"height":"250px"});
        aboutMore.slideDown();
        aboutClose.delay(1000).fadeIn();
        aboutContent.slideDown();
    });  
    
    // <-- Click function to CLOSE more about me -->
    // =============================================
    aboutClose.click(function() {
        aboutClose.fadeOut();
        aboutMore.animate({"height":"0"});
        aboutMore.slideUp();
        aboutContent.delay(1000).slideUp();
        aboutOpen.delay(1000).fadeIn();
    });   
});

// <-- Adding current year copyright --->
// ======================================
let today = new Date()
let year = today.getFullYear()
document.getElementById('footer-name').innerHTML = "&copy; " + year + " jack f. perry, jr.";
// ====================
// <-- That's that. -->