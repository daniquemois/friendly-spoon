console.log("werkt ie?");
// Hier haal ik de elementen op
var navButton = document.getElementById("navicoon");
var deHeader = document.querySelector("header"); 
var languagesVariabele = document.querySelector("header nav p");

var shopList = document.getElementById("listshop");
var shopKnop = document.querySelector("article");
// Ik heb maar 1 button nodig en op het makkelijker te maken verander ik de src van de img zodat hij daadwerkelijk veranderd
// hier geef ik die button een taak
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


function showShop() {
    if(shopList.style.display === "none"){
        shopList.style.display = "block";
    }
    else {
        shopList.style.display = "none";
    }
}
shopKnop.addEventListener("click", showShop)


