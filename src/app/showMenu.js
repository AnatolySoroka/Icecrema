const refs = {
    openMenu: document.querySelector('.burger-btn'),
    closeMenu: document.querySelector('.close-menu'),
    mobileMenu: document.querySelector('.menu-mobile__wrapper'),
    body: document.querySelector('body'),
}

refs.openMenu.addEventListener('click', openMenu);
refs.closeMenu.addEventListener('click', closeMenu);

function openMenu() {
    refs.mobileMenu.classList.add('show');
    refs.body.classList.add('block-scroll');
};

function closeMenu() {
    refs.mobileMenu.classList.remove('show');
    refs.body.classList.remove('block-scroll');
}