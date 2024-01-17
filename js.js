let heroImageSize = document.getElementsByClassName("earth-img")[0].height;
document.getElementById("hero-earth").style.setProperty("min-height", heroImageSize + "px");
window.addEventListener("resize", (event) => {
    document.getElementById("hero-earth").style.setProperty("min-height", document.getElementsByClassName("earth-img")[0].height + "px");
});

let embVideoW = document.getElementsByClassName("vid-cover")[0].clientHeight;
let embVideoH = document.getElementsByClassName("vid-cover")[0].clientWidth;
document.getElementsByClassName("vid")[0].style.setProperty("padding-top", (embVideoW/embVideoH)*100 + "%");
window.onchange = () => {
    document.getElementsByClassName("vid")[0].style.setProperty("padding-top", (embVideoW/embVideoH)*100 +"%");
}