const humb = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
humb.addEventListener("click", () => {
    humb.classList.toggle("active");
    navmenu.classList.toggle("active");
});

// Remove menu when a link is clicked
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        humb.classList.remove("active");
        navmenu.classList.remove("active");
    });
});
