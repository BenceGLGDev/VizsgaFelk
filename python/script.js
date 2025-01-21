document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');

        const navLinks = sidebar.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.classList.contains('active')) {
                link.style.backgroundColor = '#d9a58b';
            }
        });
    });
});