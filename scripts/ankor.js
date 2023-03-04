// Находим все ссылки на якори
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Добавляем обработчик события на клик по каждой ссылке
anchorLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Отменяем стандартное поведение ссылки

        // Находим элемент, к которому нужно прокрутиться
        const targetElement = document.querySelector(link.getAttribute('href'));

        // Вычисляем смещение из атрибута data-offset или по умолчанию 100px
        const offset = parseInt(link.dataset.offset || 180);

        // Вычисляем положение элемента на странице
        const targetOffsetTop = targetElement.offsetTop;

        // Прокручиваем страницу к элементу с учетом смещения
        window.scrollBy({
            top: targetOffsetTop - offset,
            behavior: 'smooth'
        });
    });
});