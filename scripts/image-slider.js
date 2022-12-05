const atena = document.querySelector('.catalog__atena');
const eclettico = document.querySelector('.catalog__eclettico');
const archibald = document.querySelector('.catalog__archibald');
const sibox = document.querySelector('.catalog__sibox');
const infinity = document.querySelector('.catalog__infinity');

const sectionsAtena = atena.querySelectorAll('.catalog__section');
const sectionsEclettico = eclettico.querySelectorAll('.catalog__section');
const sectionsArchibald = archibald.querySelectorAll('.catalog__section');
const sectionsSibox = sibox.querySelectorAll('.catalog__section');
const sectionsInfinity = infinity.querySelectorAll('.catalog__section');

const slidesAtena = atena.querySelectorAll('.catalog__image');
const slidesEclettico = eclettico.querySelectorAll('.catalog__image');
const slidesArchibald = archibald.querySelectorAll('.catalog__image');
const slidesSibox = sibox.querySelectorAll('.catalog__image');
const slidesInfinity = infinity.querySelectorAll('.catalog__image');

const sharePopup = document.querySelector('.catalog__share-popup');
const orderPopup = document.querySelector('.catalog__order-popup');

const closeSharePopupBtn = document.getElementById('share-close');
const closeOrderPopupBtn = document.getElementById('order-close');

const printAtenaBtn = atena.querySelector('.catalog__action-button_print');
const shareAtenaBtn = atena.querySelector('.catalog__action-button_share');
const printEcletticoBtn = eclettico.querySelector('.catalog__action-button_print');
const shareEcletticoBtn = eclettico.querySelector('.catalog__action-button_share');
const printArchibaldBtn = archibald.querySelector('.catalog__action-button_print');
const shareArchibaldBtn = archibald.querySelector('.catalog__action-button_share');
const printSiboxBtn = sibox.querySelector('.catalog__action-button_print');
const shareSiboxBtn = sibox.querySelector('.catalog__action-button_share');
const printInfinityBtn = infinity.querySelector('.catalog__action-button_print');
const shareInfinityBtn = infinity.querySelector('.catalog__action-button_share');
// запоминается последний активный индикатор.
// нужно для того, что бы при убирании курсора 
// за слайдер, он не "гаснул".
let lastButtonAtena = sectionsAtena[0].firstElementChild;
let lastButtonEclettico = sectionsEclettico[0].firstElementChild;
let lastButtonArchibald = sectionsArchibald[0].firstElementChild;
let lastButtonSibox = sectionsSibox[0].firstElementChild;
let lastButtonInfinity = sectionsInfinity[0].firstElementChild;

const whatsappBtn = document.querySelector('.catalog__whatsapp-link');
const tgBtn = document.querySelector('.catalog__tg-link');
const vkBtn = document.querySelector('.catalog__vk-link');

const wtbAtenaBtn = document.getElementById('wtb-atena');
const wtbEcletticoBtn = document.getElementById('wtb-eclettico');
const wtbArchibaldBtn = document.getElementById('wtb-archibald');
const wtbSiboxBtn = document.getElementById('wtb-sibox');
const wtbInfinityBtn = document.getElementById('wtb-infinity');

sectionsAtena.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandlerAtena);
  section.addEventListener('mouseleave', mouseLeaveHandlerAtena);
})
sectionsEclettico.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandlerEclettico);
  section.addEventListener('mouseleave', mouseLeaveHandlerEclettico);
})
sectionsArchibald.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandlerArchibald);
  section.addEventListener('mouseleave', mouseLeaveHandlerArchibald);
})
sectionsSibox.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandlerSibox);
  section.addEventListener('mouseleave', mouseLeaveHandlerSibox);
})
sectionsInfinity.forEach(section => {
  section.addEventListener('mouseenter', mouseEnterHandlerInfinity);
  section.addEventListener('mouseleave', mouseLeaveHandlerInfinity);
})

function mouseEnterHandlerAtena(e) {
  lastButtonAtena.classList.remove('catalog__button_full');
  e.target.firstElementChild.classList.add('catalog__button_full');
  changeSlideAtena(e.target);
}

function mouseLeaveHandlerAtena(e) {
  lastButtonAtena = e.target.firstElementChild;
}

function mouseEnterHandlerEclettico(e) {
  lastButtonEclettico.classList.remove('catalog__button_full');
  e.target.firstElementChild.classList.add('catalog__button_full');
  changeSlideEclettico(e.target);
}

function mouseLeaveHandlerEclettico(e) {
  lastButtonEclettico = e.target.firstElementChild;
}

function mouseEnterHandlerArchibald(e) {
  lastButtonArchibald.classList.remove('catalog__button_full');
  e.target.firstElementChild.classList.add('catalog__button_full');
  changeSlideArchibald(e.target);
}

function mouseLeaveHandlerArchibald(e) {
  lastButtonArchibald = e.target.firstElementChild;
}

function mouseEnterHandlerSibox(e) {
  lastButtonSibox.classList.remove('catalog__button_full');
  e.target.firstElementChild.classList.add('catalog__button_full');
  changeSlideSibox(e.target);
}

function mouseLeaveHandlerSibox(e) {
  lastButtonSibox = e.target.firstElementChild;
}

function mouseEnterHandlerInfinity(e) {
  lastButtonInfinity.classList.remove('catalog__button_full');
  e.target.firstElementChild.classList.add('catalog__button_full');
  changeSlideInfinity(e.target);
}

function mouseLeaveHandlerInfinity(e) {
  lastButtonInfinity = e.target.firstElementChild;
}

function changeSlideAtena(section) {
  slidesAtena.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('catalog__image_hidden');
    else
      slide.classList.add('catalog__image_hidden');
  })
}

function changeSlideEclettico(section) {
  slidesEclettico.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('catalog__image_hidden');
    else
      slide.classList.add('catalog__image_hidden');
  })
}

function changeSlideArchibald(section) {
  slidesArchibald.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('catalog__image_hidden');
    else
      slide.classList.add('catalog__image_hidden');
  })
}

function changeSlideSibox(section) {
  slidesSibox.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('catalog__image_hidden');
    else
      slide.classList.add('catalog__image_hidden');
  })
}

function changeSlideInfinity(section) {
  slidesInfinity.forEach(slide => {
    if (section.dataset.for == slide.id)
      slide.classList.remove('catalog__image_hidden');
    else
      slide.classList.add('catalog__image_hidden');
  })
}

const closePopup = () => {
  sharePopup.classList.remove('catalog__share-popup_opened');
}

const closeOrder = () => {
  orderPopup.classList.remove('catalog__order-popup_opened');
}

const printClear = () => {
  atena.classList.remove('print');
  eclettico.classList.remove('print');
  archibald.classList.remove('print');
  sibox.classList.remove('print');
  infinity.classList.remove('print');
}

const printAtena = () => {
  printClear();
  atena.classList.add('print');
  window.print();
}

const printEclettico = () => {
  printClear();
  eclettico.classList.add('print');
  window.print();
}

const printArchibald = () => {
  printClear();
  archibald.classList.add('print');
  window.print();
}

const printSibox = () => {
  printClear();
  sibox.classList.add('print');
  window.print();
}

const printInfinity = () => {
  printClear();
  infinity.classList.add('print');
  window.print();
}

const shareAtena = () => {
  sharePopup.classList.add('catalog__share-popup_opened');
  whatsappBtn.href = 'https://api.whatsapp.com/send?text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9%20ATENA%20-%20https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23atena'
  vkBtn.href = 'https://vk.com/share.php?&url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23atena'
  tgBtn.href = 'https://t.me/share/url?url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23atena&text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9%20ATENA'
}

const shareEclettico = () => {
  sharePopup.classList.add('catalog__share-popup_opened');
  whatsappBtn.href = 'https://api.whatsapp.com/send?text=%D0%A3%D0%B3%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%80%D0%B0%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%20ECLETTICO%20-%20https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23eclettico'
  vkBtn.href = 'https://vk.com/share.php?&url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23eclettico'
  tgBtn.href = 'https://t.me/share/url?url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23eclettico&text=%D0%A3%D0%B3%D0%BB%D0%BE%D0%B2%D0%BE%D0%B9%20%D1%80%D0%B0%D1%81%D0%BA%D0%BB%D0%B0%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%B4%D0%B8%D0%B2%D0%B0%D0%BD%20ECLETTICO'
}

const shareArchibald = () => {
  sharePopup.classList.add('catalog__share-popup_opened');
  whatsappBtn.href = 'https://api.whatsapp.com/send?text=%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE%20Archibald%20%D1%81%20%D0%BF%D1%83%D1%84%D0%BE%D0%BC%20-%20https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23archibald'
  vkBtn.href = 'https://vk.com/share.php?&url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23archibald'
  tgBtn.href = 'https://t.me/share/url?url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23archibald&text=%D0%9A%D1%80%D0%B5%D1%81%D0%BB%D0%BE%20Archibald%20%D1%81%20%D0%BF%D1%83%D1%84%D0%BE%D0%BC'
}

const shareSibox = () => {
  sharePopup.classList.add('catalog__share-popup_opened');
  whatsappBtn.href = 'https://api.whatsapp.com/send?text=%D0%A2%D1%83%D0%BC%D0%B1%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%B0%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%D1%8F%20Sibox%20-%20https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23sibox'
  vkBtn.href = 'https://vk.com/share.php?&url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23sibox'
  tgBtn.href = 'https://t.me/share/url?url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23sibox&text=%D0%A2%D1%83%D0%BC%D0%B1%D0%B0%20%D0%B4%D0%BB%D1%8F%20%D1%82%D0%B5%D0%BB%D0%B5%D0%B2%D0%B8%D0%B7%D0%BE%D1%80%D0%B0%20%D0%BD%D0%B0%D0%B2%D0%B5%D1%81%D0%BD%D0%B0%D1%8F%20Sibox'
}

const shareInfinity = () => {
  sharePopup.classList.add('catalog__share-popup_opened');
  whatsappBtn.href = 'https://api.whatsapp.com/send?text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B6%D0%B5%D0%B9%20Infinity%20-%20https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23infinity'
  vkBtn.href = 'https://vk.com/share.php?&url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23infinity'
  tgBtn.href = 'https://t.me/share/url?url=https%3A%2F%2Ftyradire.github.io%2Fsale-lp%2F%23infinity&text=%D0%9C%D0%B5%D0%B1%D0%B5%D0%BB%D1%8C%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%B8%D1%85%D0%BE%D0%B6%D0%B5%D0%B9%20Infinity'
}

const openOrderPopup = () => {
  orderPopup.classList.add('catalog__order-popup_opened');
}

shareAtenaBtn.addEventListener('click', shareAtena);
shareEcletticoBtn.addEventListener('click', shareEclettico);
shareArchibaldBtn.addEventListener('click', shareArchibald);
shareSiboxBtn.addEventListener('click', shareSibox);
shareInfinityBtn.addEventListener('click', shareInfinity);

printAtenaBtn.addEventListener('click', printAtena);
printEcletticoBtn.addEventListener('click', printEclettico);
printArchibaldBtn.addEventListener('click', printArchibald);
printSiboxBtn.addEventListener('click', printSibox);
printInfinityBtn.addEventListener('click', printInfinity);

wtbAtenaBtn.addEventListener('click', openOrderPopup);
wtbEcletticoBtn.addEventListener('click', openOrderPopup);
wtbArchibaldBtn.addEventListener('click', openOrderPopup);
wtbSiboxBtn.addEventListener('click', openOrderPopup);
wtbInfinityBtn.addEventListener('click', openOrderPopup);

closeSharePopupBtn.addEventListener('click', closePopup)
closeOrderPopupBtn.addEventListener('click', closeOrder)