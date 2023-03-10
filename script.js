const slides = document.querySelectorAll(".slide");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let counter = 0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})
function slideImg(){
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
btn1.addEventListener("click", () => {
    if (counter == 0) {
        counter = 3;
    }
    counter--;
    slideImg();

})
btn2.addEventListener("click", () => {
    if (counter == 2) {
        counter = -1;
    }
    counter++;
    slideImg();

})
const container = [...document.querySelectorAll("#likecard")];
const b1 = [...document.querySelectorAll("#b1")];
const b2 = [...document.querySelectorAll("#b2")];
container.forEach((item,i)=>{
    let cdim = item.getBoundingClientRect();
    let cwidth = cdim.width;
    b2[i].addEventListener("click",()=>{
        item.scrollLeft += cwidth;
    })
    b1[i].addEventListener("click",()=>{
        item.scrollLeft -= cwidth;
    })
})

