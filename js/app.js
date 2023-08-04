//? ---------------- Open&Close Navbar Menu ----------------
const nav_close = document.querySelector(".nav_close");
const nav_item = document.querySelectorAll(".nav_item");
const overlay = document.querySelectorAll(".overlay");

nav_close.addEventListener('click', () => {
    document.body.classList.toggle("open");
})

nav_item.forEach((item) => item.addEventListener('click', () => {
    document.body.classList.remove('open');
}))

overlay.forEach(overlay => overlay.addEventListener('click', () => {
    document.body.classList.remove("open");
}));

//? ---------------- Sticky Navbar ----------------
const header = document.querySelector('header');

function stickyNavbar(){
    header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);

//? ---------------- Change Active Link ----------------
const links = document.querySelectorAll(".nav_item");

function activeLink() {
    let sections = document.querySelectorAll("section");
    let passedSections = Array.from(sections).map((sct, i) => {
        return {
            y: sct.getBoundingClientRect().top - header.offsetHeight,
            id: i,
        };
    })
    .filter((sct) => sct.y <=0);

    let currSectionID = passedSections.at(-1).id;

    links.forEach(l => l.classList.remove("active"));
    if (currSectionID>=0) links[currSectionID].classList.add("active");
}

window.addEventListener('scroll', activeLink);
activeLink();