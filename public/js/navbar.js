$("#burger").click(function() {
    $(this).toggleClass("active");
    $("nav").toggleClass("show");
  });

var side_nav = document.getElementById("side-nav");

// window.addEventListener("click", function(event) {
//     if (event.target == side_nav) {
//         side_nav.style.display = "none";
//     }
// });