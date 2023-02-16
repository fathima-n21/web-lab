const image = document.getElementById("img");
const txt = document.getElementById("text");
const txt2 = document.getElementById("text").textContent;
const heading = document.getElementById("h1").textContent;
const daffodils = document.getElementById("daffodils").textContent;

image.addEventListener("mouseover", function () {
    h1.innerHTML = "DAFFODILS";
    image.src = "daffodils.jfif";
    txt.textContent = daffodils;
})

image.addEventListener("mouseout", function () {
    h1.textContent = heading;
    image.src = "tulips.jfif"
    txt.textContent = txt2;
})