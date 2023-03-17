const header = document.querySelector("header");
const aNav   = document.querySelectorAll("header nav a");
const logo   = document.querySelector("header .logo");
const enlaces= document.querySelectorAll("header .left > a");
const hr     = document.querySelector("header .left hr");
const buttonMenu = document.querySelector("header > button");

window.addEventListener("scroll", ()=>{
    if(this.scrollY > 0) {
        header.style.backgroundColor = "white";
        aNav.forEach(en=>{
            en.style.color = "#0067a4"
        });
        logo.style.filter = "invert(100%)";
        enlaces.forEach(el=>{
            el.style.backgroundColor = "#0067a4";
        });
        hr.style.borderColor = "#0067a4";
        buttonMenu.style.filter = "invert(100%)";
    }
    else {
        logo.style.filter = "none";
        header.style.backgroundColor = "transparent";
        aNav.forEach(en=>{
            en.style.color = "white"
        });
        enlaces.forEach(el=>{
            el.style.backgroundColor = "transparent";
        });
        hr.style.borderColor = "white";
        buttonMenu.style.filter = "none";
    }
});