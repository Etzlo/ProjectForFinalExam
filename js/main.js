const mobileNavBtn = document.querySelector('.mobile-nav-btn');
const mobileMenu = document.querySelector('.mobile-nav--inner');
const mobileBtn = document.querySelector('.mobile-btn');
const overlay = document.getElementById('overlay')

mobileBtn.addEventListener('click', () => {
    mobileNavBtn.classList.toggle('mobile-nav--open');
    mobileMenu.classList.toggle('mobile-nav--inner_open');

    if (overlay.style.display != 'block') {
        overlay.style.display = 'block';
        overlay.style.opacity = '1';
    } else {
        overlay.style.display = 'none';
        overlay.style.opacity = '0';
    }
});



const mobileLinks = document.querySelectorAll('.mobile-nav-item-link');

mobileLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        mobileNavBtn.classList.remove('mobile-nav--open');
        mobileMenu.classList.remove('mobile-nav--inner_open');

        if (index >= 2) {
            overlay.style.display = 'none';
            overlay.style.opacity = '0';
        }
    });
});


// Проблема в вашем исходном коде заключается в том, что document.querySelectorAll возвращает коллекцию, а не отдельный элемент. У коллекции нет метода addEventListener. Поэтому, чтобы добавить обработчик событий ко всем элементам коллекции, вы должны использовать цикл forEach, как я показал в предыдущем ответе.

// const mobileLink = document.querySelectorAll('.mobile-nav-item-link')

// mobileLink.addEventListener('click', () => {
//     mobileNavBtn.classList.remove('mobile-nav--open');
//     mobileMenu.classList.remove('mobile-nav--inner_open');
// })