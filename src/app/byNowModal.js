const refs = {
    bynowBtn: document.querySelector('.byNow__btn'),
    closeModal: document.querySelector('.close-modal'),
    backDrop: document.querySelector('.backdrop__byNow'),
}

refs.bynowBtn.addEventListener('click', openModal);
refs.closeModal.addEventListener('click', closeModal);

function openModal() {
    refs.backDrop.classList.add('show');
    document.body.classList.add('block-scroll');
};

function closeModal() {
    refs.backDrop.classList.remove('show');
    document.body.classList.remove('block-scroll');
};