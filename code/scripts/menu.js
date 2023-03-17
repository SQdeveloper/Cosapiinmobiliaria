const button  = document.querySelector("header > button");
const menu    = document.querySelector(".menu");
const buttonX = document.querySelector(".menu > img");

button.addEventListener("click", ()=>{
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
});

buttonX.addEventListener("click", ()=>{
    menu.classList.remove("active");
    document.body.style.overflow = "visible";
});