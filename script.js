let AboutMeBtn = document.querySelector('#About-me');
let ProjectsBtn = document.querySelector('#Projects');
let ExperiencesBtn = document. querySelector('#Experiences');
let ContactInfoBtn = document.querySelector('#Contact-Info');
let AboutMeBtn2 = document.querySelector('#About-me2');
let ProjectsBtn2 = document.querySelector('#Projects2');
let HomeBtn = document.querySelector('#Home');




document.querySelector('#About-me').addEventListener('click', function(){
    window.location.href = "AboutMe.html";
    console.log("About me button clicked");
})

document.querySelector('#Projects').addEventListener('click', function(){
    window.location.href = "Projects.html";
    console.log("Projects button clicked");
})

document.querySelector('#Experiences').addEventListener('click', function(){
    window.location.href = "Experiences.html";
    console.log("Experience button clicked");
})

document.querySelector('#Contact-Info').addEventListener('click', function(){
    window.location.href = "ContactInfo.html";
    console.log("Contact info button clicked");
})
document.querySelector('#About-me2').addEventListener('click', function(){
    window.location.href = "AboutMe.html";
    console.log("About me button clicked");
})
document.querySelector('#Projects2').addEventListener('click', function(){
    window.location.href = "Projects.html";
    console.log("Projects button clicked");
})
document.querySelector('#Home').addEventListener('click', function(){
    window.location.href = "index.html";
    console.log("Home button clicked");
})