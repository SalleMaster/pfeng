// Header toggle
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header-burger');

const toggleHeader = () => {
  header.classList.toggle('active');
};

headerBurger.addEventListener('click', toggleHeader);
