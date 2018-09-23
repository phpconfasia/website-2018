$(document).ready(function() {
    $('.sidenav').sidenav();
    $('.slider').slider({ full_width: true, height: 700, interval: 5000 });
    $('.parallax').parallax();
    navbarQuickFix();
    $(window).resize(function() {
        navbarQuickFix();
    });
});

function navbarQuickFix() {
    $('.navbar-fixed nav').css('width', $('.navbar-fixed').css('width'));
}
