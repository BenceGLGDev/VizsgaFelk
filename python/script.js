document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });
});
hamburger.addEventListener('click', () => {
    console.log('Hamburger menu clicked');
    sidebar.classList.toggle('hidden');
});
