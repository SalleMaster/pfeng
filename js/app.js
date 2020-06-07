// Header toggle
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header-burger');
const content = document.querySelector('.content');

const toggleHeader = () => {
  header.classList.toggle('active');
  content.classList.toggle('active');
};

headerBurger.addEventListener('click', toggleHeader);
