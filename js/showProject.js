// const projectBlock = document.querySelectorAll('.projects-list__block');

// projectBlock.forEach((item) => {
//     item.addEventListener('mouseout', function () {
//         const projectImg = item.querySelector('.projects-list__img');
//         const projectTitle = item.querySelector('.projects-list__title');

//         projectImg.classList.remove('projects-list__img--active');
//         projectTitle.classList.add('none');
//     })
// })

// projectBlock.forEach((item) => {
//     item.addEventListener('mouseover', function () {
//         const projectImg = item.querySelector('.projects-list__img');
//         const projectTitle = item.querySelector('.projects-list__title');

//         projectImg.classList.add('projects-list__img--active');
//         projectTitle.classList.remove('none');
//     })
// })

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