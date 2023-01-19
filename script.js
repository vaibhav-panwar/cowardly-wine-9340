discArr = [["It's A Love Story ", "baby, just say dress", "shop the new collection"], ["more *personal* than candy hearts... ", "SWEET next-to NOTHINGS ", "shop intimates"], ["For all of our friends...more benefits. ", "AnthroPerks ", "sign up -- it's free"]];
console.log(discArr);
let disc = document.getElementById("disc");
let disc1 = document.getElementById("disc1");
let disc2 = document.getElementById("disc2");
let discin = document.getElementById("discin");
let discCount = 0;
let p1 = document.createElement("p");
p1.innerText = discArr[discCount][0];
let p2 = discArr[discCount][0];
p2 = document.createElement("p");
p2.innerText = discArr[discCount][1];
p3 = document.createElement("p");
p3.innerText = discArr[discCount][2];
discin.append(p1, p2, p3);
disc2.addEventListener("click", () => {
    if (discCount == 2) {
        discCount = 0;
    }
    else {
        discCount++;
    }
    p1.innerText = discArr[discCount][0];
    p2.innerText = discArr[discCount][1];
    p3.innerText = discArr[discCount][2];
})
disc1.addEventListener("click", () => {
    if (discCount == 0) {
        discCount = 2;
    }
    else {
        discCount--;
    }
    p1.innerText = discArr[discCount][0];
    p2.innerText = discArr[discCount][1];
    p3.innerText = discArr[discCount][2];
})