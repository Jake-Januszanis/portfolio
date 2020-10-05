
const headerBox = document.querySelector(".heading-primary");
//Links to open modals
const aboutLink = document.querySelector("#about-link");
const projectsLink = document.getElementById("projects-link");
const contactLink = document.getElementById("contact-link");
const resumeLink = document.querySelector("#resume-link");

//Modal Variables
const aboutModal = document.querySelector("#about-modal");
const contactModal = document.querySelector("#contact-modal");
const projectModal = document.getElementById("projects-modal");
const resumeModal = document.querySelector("#resume-modal");
const modalContent = document.querySelector(".modal-content");
const modalDisplay = document.querySelector(".modal-box-display");

//Close Button Variables
const projectCloseBtn = document.querySelector("#close-btn");
const aboutCloseBtn = document.querySelector("#about-close-btn");
const contactCloseBtn = document.querySelector("#contact-close-btn");
const resumeCloseBtn = document.querySelector("#resume-close-btn");


//JS to open each Modal
projectsLink.onclick = function() {
    projectModal.style.display= "block";
}
contactLink.onclick = function() {
    contactModal.style.display= "block";
    headerBox.style.display="none";
}

aboutLink.onclick = function() {
    aboutModal.style.display = "block";
    headerBox.style.display = "none";
}

resumeLink.onclick = function() {
    resumeModal.style.display ="block";
}

//JS to close modal windows with button
aboutCloseBtn.onclick = function() {
    aboutModal.style.display = "none";
    headerBox.style.display = "block";
}
projectCloseBtn.onclick = function() {
    projectModal.style.display= "none";
}
contactCloseBtn.onclick = function() {
    contactModal.style.display = "none";
    headerBox.style.display = "block";
}

resumeCloseBtn.onclick = function() {
    resumeModal.style.display = "none";
}


