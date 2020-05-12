"use strict";
//SLider
$('.carousel').carousel({
    interval: false,
})


//Popups
const btnFormLogin = document.getElementById('btnLoginForm');
const btnFormClose = document.getElementById('btnFormClose');
const formLogin = document.getElementById('loginForm');


btnFormLogin.addEventListener(`click`, function () {
    document.body.classList.add('no-scroll');
    formLogin.classList.add('show');
});

btnFormClose.addEventListener(`click`, function () {
    document.body.classList.remove('no-scroll');
    formLogin.classList.remove('show');
});

//ProgressBar

// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

let experienceBar = new ProgressBar.Circle(experienceContainer, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1500,
    color: 'var(--mainDesClr)',
    trailColor: '#535353',
    trailWidth: 5,
    svgStyle: null,
});

let customersBar = new ProgressBar.Circle(customersContainer, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1500,
    color: 'var(--mainDesClr)',
    trailColor: '#535353',
    trailWidth: 5,
    svgStyle: null
});

let dishesBar = new ProgressBar.Circle(dishesContainer, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1500,
    color: 'var(--mainDesClr)',
    trailColor: '#535353',
    trailWidth: 5,
    svgStyle: null
});

let branchesBar = new ProgressBar.Circle(branchesContainer, {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1500,
    color: 'var(--mainDesClr)',
    trailColor: '#535353',
    trailWidth: 5,
    svgStyle: null
});

experienceBar.animate(0.25);
customersBar.animate(0.65);
dishesBar.animate(0.85);
branchesBar.animate(0.25);