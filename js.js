(() => {

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

    function elementsMoveByTime(sum, duration, callback) {
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

    function elementsMoveByAction(distance, step, duration, callback) {
        let rate = step / distance;
        let startTime = performance.now();
        function trans(currentTime) {
            let delta = currentTime - startTime;
            if (delta <= duration && rate <= 1) {
                callback(rate)
            }
        }
        requestAnimationFrame(trans);
    }

    setInterval(function () {
        let slo = document.querySelectorAll(".hero-slogan-wrapper-text");
        slo.forEach((element) => {
            if (element.style.transform == "translate3d(0px, 0%, 0px)") {
                elementsMoveByTime(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + step + "%,0)";
                    element.style.opacity = 1 - step / 100;
                });
            }
            if (element.style.transform == "translate3d(0px, 100%, 0px)") {
                elementsMoveByTime(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + -step + "%,0)";
                });
            }
            if (element.style.transform == "translate3d(0px, -100%, 0px)") {
                elementsMoveByTime(100, 1000, function (step) {
                    element.style.transform = "translate3d(0," + (step - 100) + "%,0)";
                    element.style.opacity = step / 100;
                });
            }
        })
    }, 5000);

    const t = -90;
    const t2 = -45 / 2;
    const view = document.getElementsByTagName("body")[0].offsetHeight;
    const vh = screen.height;
    let earth = document.getElementById("hero-earth");
    let earthContent = document.getElementById("hero-slogan");
    let introText = document.getElementById("intro-text");
    let cloudbg1 = document.getElementById("bg02");
    let cloudbg2 = document.getElementById("bg03");
    let en = document.getElementById("network-img");
    en.style.transform = "rotateZ(" + t + "deg)";
    let ne = document.getElementById("earth-net-img");
    ne.style.transform = "rotateZ(" + t2 + "deg)";
    let cm = document.querySelector(".lottie-animate > svg");
    let camp = document.getElementsByClassName("png");
    let lheader = document.getElementsByClassName("header-lottie");
    let mt = document.getElementsByClassName("lottie-img");
    const earthHeight = earth.clientHeight;
    const earthPosition = earth.offsetTop;
    document.onscroll = function (e) {
        let pos = document.documentElement.scrollTop;
        if (pos <= (earthPosition + earthHeight)) {
            elementsMoveByAction((earthHeight + earthPosition), pos, 500, function (rate) {
                setTimeout(() => {
                    earth.style.transform = "translate3d(0," + rate * 100 + "%,0)";
                    earthContent.style.opacity = (1 - rate);
                    introText.style.transform = "scale(" + 1.5 * rate + ")";
                }, 100);
            });
        }
        if (pos <= view) {
            elementsMoveByAction(view - document.documentElement.clientHeight, pos, 5000, function (rate) {
                setTimeout(() => {
                    cloudbg1.style.transform = "translate3d(0," + -(rate / 2 * 100) + "%,0)";
                    cloudbg2.style.transform = "translate3d(0," + -(rate / 2 * 100) + "%,0)";
                    en.style.transform = "rotateZ(" + (t + rate * 180) + "deg)";
                    ne.style.transform = "rotateZ(" + (t2 + rate * 45) + "deg)";
                }, 100);
            });
        }
        var bounding = cm.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= document.documentElement.clientHeight) {
            let dv = (document.documentElement.clientHeight - bounding.height) / camp.length;
            let p = bounding.top;
            for (var i = 0; i < camp.length; i++) {
                if (p <= (i * dv)) {
                    for (var j = 0; j < camp.length; j++) {
                        camp[j].style.setProperty("display", "none");
                    }
                    camp[camp.length - (i + 1)].style.setProperty("display", "block");
                    break;
                }
            }
        }

        var lb = document.getElementById("lottie").getBoundingClientRect();
        if (lb.top <= document.documentElement.clientHeight && lb.left >= 0 && 0 <= lb.bottom) {
            let ap = lb.height + document.documentElement.clientHeight;
            let p = lb.bottom;
            for (var j = 0; j < 30; j++) {
                let rate = j * (ap / 30);
                if (p >= rate) {
                    lheader[0].style.transform = "translate3d(" + (75 - (rate * 75) / ap) + "%,0,0)";
                    lheader[1].style.transform = "translate3d(" + (10 - (rate * 10) / ap) + "%,0,0)";
                    lheader[2].style.transform = "translate3d(" + (- 75 + (rate * 75) / ap) + "%,0,0)";
                    mt[0].style.transform = "translate3d(0," + (- 20 +(30*rate)/ap) + "%,0)";
                    mt[1].style.transform = "translate3d(0," + (- 20 + (30*rate)/ap) + "%,0)";
                    mt[2].style.transform = "translate3d(0," + (- 20 + (30*rate)/ap) + "%,0)";
                }
            }


        }
    }
})();


