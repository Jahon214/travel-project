'use strick';

window.onscroll = () => {
    const header = document.querySelector('.header_three');
    const start = window.scrollY;

    if (start > 200) {
        header.classList.add('fixed_header');
    } else if (start < 100) {
        header.classList.remove('fixed_header');
    }
}