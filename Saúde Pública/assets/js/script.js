//Rolagem de Seções
function Section(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        window.scrollTo({
            top: section.offsetTop - 125,
            behavior: "smooth"
        });
    }
}

//Observer para Adicionar slideRight
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.hidden');

    const sectionObserver = new IntersectionObserver((retornoObserver) => {
        let delay = 0;
        retornoObserver.forEach((section) => {
            if (section.isIntersecting) {
                setTimeout(() => {
                    section.target.classList.add('slideRight');
                }, delay);
                delay += 200;
            }
        })
    });

    sections.forEach((section) => sectionObserver.observe(section))
});

//Animação NavigationBar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    function checkScroll() {
        if (window.scrollY > 0) {
            navbar.classList.add("navbarAfter");
        } else {
            navbar.classList.remove("navbarAfter");
        }
    }
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});