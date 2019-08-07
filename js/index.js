// Your code goes here

const logo = document.querySelector('.logo-heading');
logo.addEventListener('click', e => {
    e.target.classList.toggle('logo');
});

const nav = document.querySelector('.nav');
nav.addEventListener('click', e => {
    e.target.classList.toggle('blueBackground');
})

const navItems = document.querySelectorAll('.nav a');
navItems.forEach(item => item.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.toggle('goldenrodText');
}));

const funBus = document.querySelector('.intro img');
funBus.addEventListener('mouseover', e => {
    e.target.style.filter = 'grayscale(80%)';
});
funBus.addEventListener('mouseout', e => {
    e.target.style.filter = 'none';
});
funBus.addEventListener('mousedown', e => {
    e.target.classList.toggle('opacity');
});

const header = document.querySelector('header');
header.addEventListener('mouseover', e => {
    e.target.classList.toggle('goldBackground');
});
header.addEventListener('mouseout', e => {
    e.target.classList.toggle('goldBackground');
});
header.addEventListener('mousedown', e => {
    e.target.classList.toggle('goldBackground');
});
header.addEventListener('mouseup', e => {
    e.target.classList.toggle('goldBackground');
});

