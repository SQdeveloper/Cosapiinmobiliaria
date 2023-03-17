const buttonArrow = document.querySelectorAll(".first .arrow");
const sliderMove  = document.querySelector(".first .sliderMove");
let number = 0, limitSup = 3;

buttonArrow[0].addEventListener("click", ()=>{
    number--;
    move();
    if(number == 0) {
        buttonArrow[0].style.visibility = "hidden";
    }
    buttonArrow[1].style.visibility = "visible";
});

buttonArrow[1].addEventListener("click", ()=>{
    number++;
    move();
    if(number == limitSup) {
        buttonArrow[1].style.visibility = "hidden";
    }
    buttonArrow[0].style.visibility = "visible";
});

function move() {
    sliderMove.style.transform = `translateX(calc((-100%/6 + 20px) * ${number}))`;
}

if(window.innerWidth <= 670) {
    limitSup = 5;
}
else if(window.innerWidth <= 1000) {
    limitSup = 4;
}