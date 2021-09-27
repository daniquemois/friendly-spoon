console.log("werkt ie?");

var menuBarElement = document.getElementById("menuicoon");

var kruisBarElement = document.getElementById("kruisicoon");

var hiddenMenuElement = document.getElementById("hiddenmenu");

var menuBarButton = document.getElementById("menuicoon");

function functieMenu() {
    menuBarElement.style.visibility = "hidden";
    kruisBarElement.style.visibility = "visible";
    hiddenMenuElement.style.visibility = "visible";
}

menuBarElement.addEventListener("click", functieMenu);

function functieKruis() {
    menuBarElement.style.visibility = "visible";
    kruisBarElement.style.visibility = "hidden";
    hiddenMenuElement.style.visibility = "hidden";
}

kruisBarElement.addEventListener("click", functieKruis);