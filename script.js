document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");

    function checkVisibility() {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
