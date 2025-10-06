"use strict";

const menuBtn = document.querySelector(".menu-btn");
const navUL = document.querySelector(".header ul");

menuBtn.addEventListener("click", function () {
    navUL.classList.toggle("active");
});
