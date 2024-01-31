let heroImageSize = document.getElementsByClassName("earth-img")[0].height;
document.getElementById("hero-earth").style.setProperty("min-height", heroImageSize + "px");
window.addEventListener("resize", (event) => {
    document.getElementById("hero-earth").style.setProperty("min-height", document.getElementsByClassName("earth-img")[0].height + "px");
});

let embVideoW = document.getElementsByClassName("vid-cover")[0].clientHeight;
let embVideoH = document.getElementsByClassName("vid-cover")[0].clientWidth;
document.getElementsByClassName("vid")[0].style.setProperty("padding-top", (embVideoW / embVideoH) * 100 + "%");
window.onchange = () => {
    document.getElementsByClassName("vid")[0].style.setProperty("padding-top", (embVideoW / embVideoH) * 100 + "%");
}


(() => {
    var pos = [0, 100, -100];
    var opa = [0, 1];
    var heroSlogan1 = document.getElementById("hero-slogan-wrapper-text1");
    var heroSlogan2 = document.getElementById("hero-slogan-wrapper-text2");
    var heroSlogan3 = document.getElementById("hero-slogan-wrapper-text3");
    heroSlogan1.style.transform = "translate3D(0," + pos[0] + "%,0)";
    heroSlogan1.style.opacity = opa[1];
    heroSlogan2.style.transform = "translate3D(0," + pos[1] + "%,0)";
    heroSlogan2.style.opacity = opa[0];
    heroSlogan3.style.transform = "translate3D(0," + pos[2] + "%,0)";
    heroSlogan3.style.opacity = opa[0];

    function heroSloganMove(sum, duration, callback) {
        let startTime = performance.now();
        function trans(currentTime) {
            let delta = currentTime - startTime;
            if (delta > duration) {
                callback(sum)
            } else {
                let step = sum * (delta / duration);
                callback(step);
                requestAnimationFrame(trans);
            }
        }
        requestAnimationFrame(trans);
    }

    setInterval(function () {
        let slo = document.querySelectorAll(".hero-slogan-wrapper-text");
        slo.forEach((element) => {
            if (element.style.transform == "translate3d(0px, 0%, 0px)") {
                heroSloganMove(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + step + "%,0)";
                    element.style.opacity = 1 - step / 100;
                });
            }
            if (element.style.transform == "translate3d(0px, 100%, 0px)") {
                heroSloganMove(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + -step + "%,0)";
                });
            }
            if (element.style.transform == "translate3d(0px, -100%, 0px)") {
                heroSloganMove(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + (step - 100) + "%,0)";
                    element.style.opacity = step / 100;
                });
            }
        })
    }, 5000);
})();