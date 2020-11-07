$(document).ready(function() {
    $("#projectsLink").click(function() {
        $("#intro").fadeOut(function() {
            $("#projects").fadeIn();
        });
    });
    $("#homeLink").click(function() {
        $("#projects").fadeOut(function() {
            $("#intro").fadeIn();
        });
    });
});
