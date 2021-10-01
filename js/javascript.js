console.log("werkt ie?");

var menuButton = document.getElementById("menuicoon");
var kruisButton = document.getElementById("kruisicoon");
var deHeader = document.querySelector("header");

menuButton.addEventListener("click", toggleMenu);
kruisButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deHeader.classList.toggle("toonMenu");
}


// $(document).ready(function(){       
//     var scroll_pos = 0;
//     $(document).scroll(function() {
//         scroll_pos = $(this).scrollTop();
//         if(scroll_pos > 300) {
//             $("body").css('background-color', "var(--overlooppaars)");
//         } else {
//             $("body").css('background-color', 'var(--overloopgroen)');
//         }
//     });
// });