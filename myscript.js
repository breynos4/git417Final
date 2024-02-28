'use strict';

// function for dark mode toggle
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var btn = document.getElementById("mybtn");
    // change innerHTML button text
    if(btn.innerHTML === "☽") {
        btn.innerHTML = "☼";
    } else if (btn.innerhtml = "☼") {
        btn.innerHTML = "☽";
    }
}
//grabbing values for inline text
let total = document.querySelector("#total");
let subtotal = document.querySelector("#subtotal");
//starting values for cart
let cart = 0;
subtotal.innerHTML += cart;
var totalVal = 0;
total.innerHTML += totalVal;
let tax = 1.02;
let shipping = 5;
// values for products
let potatoNendo = 51.99;
let angelAbbey = 8.99;
let shiromoPlush = 11.99;
//POTATO NENDO
function addPotato() {
    cart = cart + potatoNendo;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}
function removePotato(){
    cart = cart - potatoNendo;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}
//ABBEY FIGURE
function addAbbey() {
    cart = cart + angelAbbey;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}
function removeAbbey(){
    cart = cart - angelAbbey;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}
//SHIROMO PLUSH
function addShiromo() {
    cart = cart + shiromoPlush;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}
function removeShiromo(){
    cart = cart - shiromoPlush;
    totalVal = (cart * tax) + shipping;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}

//purchase confirm
function purchaseConf() {
    alert("Thank you for your purchase! Your total is: $" + totalVal);
    cart = 0;
    totalVal = 0;
    subtotal.innerHTML = "$" + cart;
    total.innerHTML = "$" + totalVal;
}

// ADD BUTTONS
document.getElementById("potatoAdd").addEventListener("click", addPotato);
document.getElementById("abbeyAdd").addEventListener("click", addAbbey);
document.getElementById("shiromoAdd").addEventListener("click", addShiromo);
// REMOVE BUTTONS
document.getElementById("potatoRemove").addEventListener("click", removePotato);
document.getElementById("abbeyRemove").addEventListener("click", removeAbbey);
document.getElementById("shiromoRemove").addEventListener("click", removeShiromo);

//purchase button
document.getElementById("merchConf").addEventListener("click", purchaseConf);