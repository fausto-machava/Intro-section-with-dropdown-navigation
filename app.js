const togle = document.getElementsByClassName('dropdown-toggle');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const btnClose = document.getElementById('close');

for (let i = 0; i < togle.length; i++) {
    const element = togle[i];
    let isOpen = false;
    element.onmouseenter = function() {
        element.children[0].children[0].src = "./images/icon-arrow-up.svg";
        element.children[1].style.display = "flex";
        isOpen = true;
    }

    element.onmouseleave = function() {
        element.children[0].children[0].src = "./images/icon-arrow-down.svg";
        element.children[1].style.display = "none";
        isOpen = false;
    }

    element.onclick = function() {
        if (isOpen) {
            element.children[0].children[0].src = "./images/icon-arrow-down.svg";
            element.children[1].style.display = "none";
            isOpen = false;
        } else {
            element.children[0].children[0].src = "./images/icon-arrow-up.svg";
            element.children[1].style.display = "flex";
            isOpen = true;
        }
    }
}

burger.onclick = function() {
    nav.style.transform = "translateX(0px)";
    disableScroll();
}

btnClose.onclick = function() {
    nav.style.transform = "translateX(100%)";
    enableScroll();
}


function disableScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    }
}

function enableScroll() {
    window.onscroll = function() {};
}