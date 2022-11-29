import {data} from '../scripts/catalog.js';

export default class ImageCard {
  constructor({text, dimensions, images, ids, description, price}) {
    this._text = text;
    this._dimensions = dimensions;
    this._images = images;
    this._ids = ids;
    this._description = description;
    this._price = price;
  }

  _getTemplate() {
    const cardElement = document
    .getElementById('catalog-item')
    .content
    .querySelector('.catalog__item')
    .cloneNode(true);

    return cardElement;
  }

  generateImageCard() {
    this._element = this._getTemplate();

    this._element.querySelector('.catalog__content').textContent = this._text;
    this._element.querySelector('.catalog__dimensions').textContent = this._dimensions;
    this._element.querySelector('.catalog__description').textContent = this._description;
    this._element.querySelector('.catalog__price').textContent = this._price;
    this._element.querySelector('.catalog__image')

    return this._element;
  }
}

data.forEach((item) => {
  const image = new ImageCard(item)
  console.log(image)
  const imageElement = image.generateImageCard();
  document.querySelector('.catalog__items').append(imageElement);
})