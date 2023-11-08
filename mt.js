let silverBtn = document.getElementById("silver");
let blackBtn = document.getElementById("black");
let blueBtn = document.getElementById("blue");
let cyanBtn = document.getElementById("cyan");
let bikes = document.getElementById("bikes");
let heading = document.getElementById("heading");

silverBtn.onclick = function () {
    bikes.style.backgroundImage = "url(./images/pic1.webp)"
    heading.style.color = "orange"
}
blackBtn.onclick = function () {
    bikes.style.backgroundImage = "url(./images/pic3.webp)"
    heading.style.color = "black"

}
blueBtn.onclick = function () {
    bikes.style.backgroundImage = "url(./images/pic2.webp)"
    heading.style.color = "blue"
}
cyanBtn.onclick = function () {
    bikes.style.backgroundImage = "url(./images/pic4.webp)"
    heading.style.color = "cyan"

}