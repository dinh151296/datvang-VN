// menu sp

const burgerElement = document.querySelector('.burger-sp');
const burgerElementSidebar = document.querySelector('.burger__sidebar');
const sidebarBlock = document.querySelector('.sidebar-admin');
const menuBlock = document.querySelector('.header__r');
const subInfoBlock = document.querySelector('.sub-menu__info');
const subDocumentBlock = document.querySelector('.sub-menu__document');
burgerElement.addEventListener('click', function() {
    if (!burgerElement.classList.contains('open')) {
        burgerElement.classList.add('open');
        menuBlock.classList.add('open');
        burgerElementSidebar.classList.remove('open');
        sidebarBlock.classList.remove('open');
    } else {
        burgerElement.classList.remove('open');
        menuBlock.classList.remove('open');
        subInfoBlock.classList.remove('open');
        subDocumentBlock.classList.remove('open');
    }
});

burgerElementSidebar.addEventListener('click', function() {
    if (!burgerElementSidebar.classList.contains('open')) {
        burgerElementSidebar.classList.add('open');
        sidebarBlock.classList.add('open');
    } else {
        burgerElementSidebar.classList.remove('open');
        sidebarBlock.classList.remove('open');
    }
});

document.querySelector('.link__info').addEventListener('click', function(e) {
    e.preventDefault();

    if (!subInfoBlock.classList.contains('open')) {
        subInfoBlock.classList.add('open');
    } else {
        subInfoBlock.classList.remove('open');
    }
});

document.querySelector('.link__document').addEventListener('click', function(e) {
    e.preventDefault();

    if (!subDocumentBlock.classList.contains('open')) {
        subDocumentBlock.classList.add('open');
    } else {
        subDocumentBlock.classList.remove('open');
    }
});