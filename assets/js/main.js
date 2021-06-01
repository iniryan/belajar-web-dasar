var nav = document.getElementById("menuList");

function menu(){
    if (nav.style.top === "-100%") {
        nav.style.top = "0";
    } else {
        nav.style.top = "-100%";
    }
}

function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollTop)