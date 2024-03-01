"use strict";
const redBtn = document.querySelector(".red_btn");
const greenBtn = document.querySelector(".green_btn");
let circle = document.querySelector(".circle");

redBtn.addEventListener('click', function () {
    circle.classList.remove('translate');
});
greenBtn.addEventListener('click', function () {
    circle.classList.add('translate');
});