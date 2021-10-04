console.log("werkt ie?");

var navButton = document.getElementById("navicoon");
var deHeader = document.querySelector("header");

navButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    deHeader.classList.toggle("toonMenu");
    if(navicoon.getAttribute("src") == "images/menuicon.png"){
        navicoon.src = "images/crossicon.png";
    }
    else if (navicoon.getAttribute("src") == "images/crossicon.png"){
        navicoon.src = "images/menuicon.png";
    }
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