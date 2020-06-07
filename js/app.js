// Header toggle
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header-burger');
const content = document.querySelector('.content');

const toggleHeader = () => {
  header.classList.toggle('active');
  content.classList.toggle('active');
};

headerBurger.addEventListener('click', toggleHeader);

// Arrow
const arrow = document.querySelector('.down-arrow');
const arrowUp = document.querySelector('.down-arrow.up');

let last_known_scroll_position = 0;
let ticking = false;

function downscroll(scroll_pos) {
  arrow.classList.add('up');
}

function upscroll(scroll_pos) {
  arrow.classList.remove('up');
}

window.addEventListener('scroll', function (e) {
  let st = window.scrollY;

  if (st > last_known_scroll_position) {
    // Downscroll Code
    if (!ticking) {
      window.requestAnimationFrame(function () {
        downscroll(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  } else {
    // Upscroll Code
    if (!ticking) {
      window.requestAnimationFrame(function () {
        upscroll(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  }

  last_known_scroll_position = st;
});

// Sroll Up
const scrollUp = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

arrow.addEventListener('click', scrollUp);
