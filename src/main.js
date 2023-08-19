import './style.scss';

// Dropdown menu
const li = document.querySelector('.main-menu').querySelectorAll('li');

li.forEach((item, index) => {
    const hasDropdown = item.classList.contains("has-dropdown");

    if (hasDropdown) {
        const anchor = item.querySelector("a");

        anchor.addEventListener("click", (e) => {
            e.preventDefault();
            e.target.parentElement.classList.toggle('show')
        })
    }
});

//  Header Sticky
window.addEventListener("scroll", (e) => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector("header");
    if (scrollPosition > 100) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
});

// Search Box
const btnSearch = document.querySelector(".btn-search");
const btnClose = document.querySelector(".btn-close");

btnSearch.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("show");
});

btnClose.addEventListener("click", (e) => {
    const navbar = document.querySelector(".navbar");
    navbar.classList.remove("show");
});