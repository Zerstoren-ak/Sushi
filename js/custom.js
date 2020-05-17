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

const statistics = document.getElementById(`statistics`);
const branchesContainer = document.getElementById(`branchesContainer`);
const experienceContainer = document.getElementById(`experienceContainer`);
const customersContainer = document.getElementById(`customersContainer`);
const dishesContainer = document.getElementById(`dishesContainer`);

const progressBarSet = {
    strokeWidth: 5,
    easing: 'easeInOut',
    duration: 1000,
    color: 'var(--mainDesClr)',
    trailColor: '#535353',
    trailWidth: 5,
    svgStyle: null,
    autoStyleContainer: false,
    text: {
        style: null,
    },
};

progressBarSet.step = function(state, circle) {
    let value = Math.round(circle.value() * 52);
    if (value === 0) {
        circle.setText('');
    } else {
        circle.setText(value);
    }
};
const experienceBar = new ProgressBar.Circle(experienceContainer, progressBarSet);

progressBarSet.step = function(state, circle) {
    let value = Math.round(circle.value() * 19231);
    if (value === 0) {
        circle.setText('');
    } else {
        circle.setText(value);
    }
};
const customersBar = new ProgressBar.Circle(customersContainer, progressBarSet);

progressBarSet.step = function(state, circle) {
    let value = Math.round(circle.value() * 74118);
    if (value === 0) {
        circle.setText('');
    } else {
        circle.setText(`+` + value);
    }
};
const dishesBar = new ProgressBar.Circle(dishesContainer, progressBarSet);

progressBarSet.step = function(state, circle) {
    let value = Math.round(circle.value() * 10);
    if (value === 0) {
        circle.setText('');
    } else {
        circle.setText(value);
    }
};
const branchesBar = new ProgressBar.Circle(branchesContainer, progressBarSet);

window.addEventListener(`scroll`, function(){
    if (window.pageYOffset > statistics.offsetTop - (window.innerHeight / 2)) {
        experienceBar.animate(0.25);
        customersBar.animate(0.65);
        dishesBar.animate(0.85);
        branchesBar.animate(0.2);
    }
});

