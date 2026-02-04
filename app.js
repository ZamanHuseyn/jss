const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('click', () => {
        images.forEach(i => i.classList.remove('active'));
        img.classList.add('active');
    });
});