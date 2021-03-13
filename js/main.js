// Navigation bar ***
// Function to display the side navigation area.
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
// Function to close the side navigation area.
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// Images ***
// Images to change once mouse moves over and back to the original once the mouse moves off it. //

function mouseOverImage() {
    document.getElementById("skillscompetencies").src = "images/SkillsCompetencies2.png";
    document.getElementById("education").src = "images/Education2.png";
    document.getElementById("experience").src = "images/Experience2.png";
    document.getElementById("projects").src = "images/Projects2.png";
    document.getElementById("contact").src = "images/Contact2.png";
    document.getElementById("onlinestore").src = "images/Screenshot-OnlineStore2.png";
    document.getElementById("cdarchitecture").src = "images/Screenshot-CDArchitecture2.png";
}

function mouseOutImage() {
    document.getElementById("skillscompetencies").src = "images/SkillsCompetencies1.png";
    document.getElementById("education").src = "images/Education1.png";
    document.getElementById("experience").src = "images/Experience1.png";
    document.getElementById("projects").src = "images/Projects1.png";
    document.getElementById("contact").src = "images/Contact1.png";
    document.getElementById("onlinestore").src = "images/Screenshot-OnlineStore1.png";
    document.getElementById("cdarchitecture").src = "images/Screenshot-CDArchitecture1.png";
}

// Modals ***
// Get button that opens the modal
let btn = document.querySelectorAll("button.modal-button");
// All modals
let modals = document.querySelectorAll('.modal');
// Get element that closes the modal
let spans = document.getElementsByClassName("close");

// Looped to enable user to open the modal once button is clicked on.
for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
        e.preventDefault();
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}

// Looped to enable user to close the modal once x is clicked on.
for (let i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}

// Function that allows for the modal to close When a user clicks anywhere outside.
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        for (let index in modals) {
            if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";
        }
    }
}