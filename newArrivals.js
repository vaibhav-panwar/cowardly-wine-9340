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
let cardContain = document.getElementById("productCard");

let api = "https://63cd1af5fba6420d4d689370.mockapi.io/products";
let desc = "https://63cd1af5fba6420d4d689370.mockapi.io/products?sortBy=price&order=desc"
let asc = "https://63cd1af5fba6420d4d689370.mockapi.io/products?sortBy=price&order=asc"
let barr = JSON.parse(localStorage.getItem("basket"));
let nop = document.getElementById("nop");
let sort = document.getElementById("sort");
if(barr===null){
    barr=[];
}
sort.addEventListener("change",()=>{
    if(sort.value === ""){
        thenFetch(api);
    }
    else if(sort.value === "l"){
        thenFetch(asc);

    }
    else{
        thenFetch(desc);
    }
})
thenFetch(api);
function thenFetch(x) {
    fetch(x)
    .then((request)=>{
        return request.json();
    })
    .then((data)=>{
        console.log(data);
        display(data);
        nop.innerText = data.length;
    })
    .catch((err)=>{
        console.log(err);
    })
}
function display(data) {
    cardContain.innerHTML="";
    data.forEach((el)=>{
        let card = document.createElement("div");
        card.setAttribute("class","card");
        let cardImg = document.createElement("img");
        cardImg.setAttribute("src",el.Img1);
        cardImg.addEventListener("mouseenter",()=>{
            cardImg.setAttribute("src", el.Img2);
        })
        cardImg.addEventListener("mouseleave", () => {
            cardImg.setAttribute("src", el.Img1);
        })
        let name = document.createElement("h3")
        name.innerText = el.Title
        let price  = document.createElement("p");
        price.innerHTML = "$"+el.price
        let cardBtn = document.createElement("button");
        cardBtn.innerText = "Add to Cart";
        cardBtn.addEventListener("click",()=>{
            let bobj = {
                name : el.Title,
                img : el.Img1,
                price : el.price
            }
            barr.push(bobj);
            localStorage.setItem("basket",JSON.stringify(barr));
        }) 
        
        card.append(cardImg,name,price,cardBtn);
        cardContain.append(card);
    })
    
}