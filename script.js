const slides = document.querySelectorAll(".slide>div");
var counter =0;
slides.forEach((slide,index)=>{
    slide.style.left = `${index*100}%`
})
const slideDiv = ()=>{
    slides.forEach((slide)=>{
       slide.style.transform
    })
}
let prev = document.getElementById("btn1")
let next = document.getElementById("btn2")
prev.addEventListener("click",()=>{
    counter--;
    slideDiv()
    
})
prev.addEventListener("click", () => {
    counter++;
    slideDiv()
})

