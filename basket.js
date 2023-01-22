const slides = document.querySelectorAll(".slide");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`
})
function slideImg() {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`
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
let bdata = JSON.parse(localStorage.getItem("basket"));
if(bdata ===null){
    bdata= [];
}
console.log(bdata);
let eltbody = document.getElementById("at");
let tot = document.getElementById("tot");
let t = [];
display(bdata);
function display(data){
    eltbody.innerHTML = "";
    data.forEach((el)=>{
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let img = document.createElement("img");
        img.setAttribute("src",el.img);
        td1.append(img);
        let td2 = document.createElement("td");
        td2.innerText = el.name;
        let td3 = document.createElement("td");
        td3.innerText ="$"+el.price;
        let td4 = document.createElement("td")
        let inp  =document.createElement("input");
        inp.setAttribute("type","number");
        inp.setAttribute("placeholder", "enter quantity");
        inp.setAttribute("value", "1");
        td4.append(inp);
        let a  = Number(inp.value);
        console.log(a);
        let td5 = document.createElement("td");
        td5.innerText = a*Number(el.price)
        inp.addEventListener("change",(e)=>{
            e.preventDefault()
            let b = Number(inp.value)
            let total  = b*Number(el.price);
            td5.innerText = total;
        })
        t.push(a * Number(el.price));
        tr.append(td1,td2,td3,td4,td5);
        eltbody.append(tr);
        
    })
}