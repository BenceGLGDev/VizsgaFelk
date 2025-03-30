document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const header = document.querySelector('header');
    const content = document.querySelector('.content');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        header.classList.toggle('active');
        content.classList.toggle('active');
    });
});
