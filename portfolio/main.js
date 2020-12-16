const loadingWrapper = document.querySelector('.loading-wrapper');
let time = 2;
let myInterval = window.setInterval(intro, 1000); 


function intro() {
    time -=1;

    if(time === 0) {
        loadingWrapper.parentElement.removeChild(loadingWrapper);
        clearInterval(myInterval);
    }
}





const boxes = document.querySelectorAll('.box');
const triggerBottom = window.innerHeight / 2;
window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        }else {
            box.classList.remove('show');
        }
    })
}





const hamburger = document.getElementById('header-open');
const close = document.getElementById('header-close');
const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.nav-links li')


hamburger.addEventListener('click', () => {
    nav.classList.add('open');
})

close.addEventListener('click', () => {
    nav.classList.remove('open');
    hideClose = '';
})

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    })
});





function scrollSocial() {
    const social = document.querySelector('.social');
    const socialPosition = social.getBoundingClientRect().top;

    if(socialPosition < triggerBottom) {
        social.classList.add('show-social');
    }
}

window.addEventListener('scroll', scrollSocial);