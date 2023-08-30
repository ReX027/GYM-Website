let prevScrollPos = window.scrollY;

window.addEventListener("scroll", function() {
    let currentScrollPos = window.scrollY;
    const header = document.querySelector(".left");
    
    if (prevScrollPos > currentScrollPos) {
        // Scrolling up
        header.style.backgroundColor = "transparent";
    } else {
        // Scrolling down
        header.style.backgroundColor = "#3c3b3b4f";
        header.style.borderRadius = "20px";
    }
    prevScrollPos = currentScrollPos;
});
