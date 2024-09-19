

const projectBlocks = document.querySelectorAll('.projects-list__block');
const projectImages = document.querySelectorAll('.projects-list__img');

projectBlocks.forEach((block, index) => {
    block.addEventListener('mouseenter', () => {
        // Деактивируем все элементы
        projectImages.forEach(img => {
            img.classList.remove('projects-list__img--active');
        });


        // Активируем текущий элемент
        projectImages[index].classList.add('projects-list__img--active');
    });
});