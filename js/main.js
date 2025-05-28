const nav = document.getElementById("nav");
const navBtn = document.getElementById('nav-btn');
const navImg = document.getElementById("nav-btn-img");

navBtn.onclick = () => {
    if(nav.classList.toggle("open")) {
        navImg.src = "./img/icons/NAV CLOSE.svg";
    } else {
        navImg.src = "./img/icons/NAV.svg";
    }
}

  AOS.init();