const atena = document.querySelector('.catalog__atena');
const eclettico = document.querySelector('.catalog__eclettico');
const archibald = document.querySelector('.catalog__archibald');
const sibox = document.querySelector('.catalog__sibox');

const sectionsAtena = atena.querySelectorAll('.catalog__section');
const sectionsEclettico = eclettico.querySelectorAll('.catalog__section');
const sectionsArchibald = archibald.querySelectorAll('.catalog__section');
const sectionsSibox = sibox.querySelectorAll('.catalog__section');

const slidesAtena = atena.querySelectorAll('.catalog__image');
const slidesEclettico = eclettico.querySelectorAll('.catalog__image');
const slidesArchibald = archibald.querySelectorAll('.catalog__image');
const slidesSibox = sibox.querySelectorAll('.catalog__image');

const sharePopup = document.querySelector('.catalog__share-popup');

const closePopupBtn = document.querySelector('.catalog__close-btn');

const printAtenaBtn = atena.querySelector('.catalog__action-button_print');
const shareAtenaBtn = atena.querySelector('.catalog__action-button_share');
const printEcletticoBtn = eclettico.querySelector('.catalog__action-button_print');
const shareEcletticoBtn = eclettico.querySelector('.catalog__action-button_share');
const printArchibaldBtn = archibald.querySelector('.catalog__action-button_print');
const shareArchibaldBtn = archibald.querySelector('.catalog__action-button_share');
const printSiboxBtn = sibox.querySelector('.catalog__action-button_print');
const shareSiboxBtn = sibox.querySelector('.catalog__action-button_share');
// запоминается последний активный индикатор.
// нужно для того, что бы при убирании курсора 
// за слайдер, он не "гаснул".
let lastButtonAtena = sectionsAtena[0].firstElementChild;
let lastButtonEclettico = sectionsEclettico[0].firstElementChild;
let lastButtonArchibald = sectionsArchibald[0].firstElementChild;
let lastButtonSibox = sectionsSibox[0].firstElementChild;

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

const testick = (e) => {
  sharePopup.classList.add('catalog__share-popup_opened');
}

const closePopup = () => {
  sharePopup.classList.remove('catalog__share-popup_opened');
}

const printTest = () => {
  window.print();
}

shareAtenaBtn.addEventListener('click', testick);
shareEcletticoBtn.addEventListener('click', testick);
shareArchibaldBtn.addEventListener('click', testick);
shareSiboxBtn.addEventListener('click', testick);

printAtenaBtn.addEventListener('click', printTest);
printEcletticoBtn.addEventListener('click', printTest);
printArchibaldBtn.addEventListener('click', printTest);
printSiboxBtn.addEventListener('click', printTest);

closePopupBtn.addEventListener('click', closePopup)