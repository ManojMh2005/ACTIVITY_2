$(document).ready(function () {
    // Highlight active page in the navigation bar
    const currentPath = window.location.pathname.split("/").pop();
    $("nav ul li a").each(function () {
        if ($(this).attr("href") === currentPath) {
            $(this).css("font-weight", "bold");
        }
    });
});
