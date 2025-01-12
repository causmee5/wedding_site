document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navbarMenu = document.querySelector(".navbar-menu");

    hamburger.addEventListener("click", () => {
        navbarMenu.classList.toggle("active");
        hamburger.classList.toggle("open");
    });

    // Close menu on resize if transitioning back to desktop view
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            navbarMenu.classList.remove("active");
            hamburger.classList.remove("open");
        }
    });
});