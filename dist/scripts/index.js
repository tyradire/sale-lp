const moreBtn = document.querySelector('.review__more-btn');
const reviewContainer = document.querySelectorAll('.review');
const textContainer = document.querySelectorAll('.review__text');
const buttonContant = document.querySelector('.review__more-btn');

const readMore = () => {
  reviewContainer[2].classList.toggle('review_open');
  textContainer[2].classList.toggle('review__text_open');
  if (buttonContant.textContent === 'Читать ещё...') {
    buttonContant.textContent = 'Скрыть'
  } else buttonContant.textContent = 'Читать ещё...'
}
moreBtn.addEventListener('click', readMore);
