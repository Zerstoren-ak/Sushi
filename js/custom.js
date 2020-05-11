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