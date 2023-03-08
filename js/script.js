
const slide = document.querySelectorAll('.slide');
const slideImg = document.getElementById('slide-img');
const home = document.querySelector('.home-container');

slide.forEach(s => {
    s.addEventListener('click', () => {
        removeActive();
        s.classList.add('active');
    })
})

function removeActive(){
    slide.forEach(s => {
        s.classList.remove('active');
    })
}

function changeBack(imgeSrc) {
    home.style.backgroundImage = `url('${imgeSrc}')`;
}

const adventures = {
    adventure1: "Hiking",
    adventure2: "Mountain Biking",
    adventure3: "Skiing",
    adventure4: "Paragliding",
    adventure5: "White Water Rafting",
};
const title = document.getElementById('title');

const changeTitle = (id) => {
    title.innerHTML = Object.values(adventures)[id];
}



// Scrolling Navbar
var header = document.querySelector('.header');

window.onscroll = function () { 
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        header.classList.add("nav-colored");
        header.classList.remove("nav-transparent");
    } 
    else {
        header.classList.add("nav-transparent");
        header.classList.remove("nav-colored");
    }
};