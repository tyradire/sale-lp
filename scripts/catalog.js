export const data = [
  {
    text: `Строгий и лаконичный дизайн ТВ-тумбы Atena немецкой фабрики Gwinner очень актуален для интерьеров, выполненных в современном стиле.
    В комплект тумбы для телевизора входит небольшой стеллаж со встроенной витриной для посуды.
    Нарядную и в то же время уютную атмосферу, особенно в вечернее время, создаёт интегрированная LED-подсветка. Можно не включать основной свет в комнате, а воспользоваться приятным мягким светом, идущим от мебели.
    Корпус и фасады мебели имеют двустороннюю покраску матовым УФ-лаком приятного теплого серого цвета. Акцентная вставка на фасаде тумбы - кольцевой срез дуба. Столешница и стеллаж выполнены из шпонированного дубом МДФ. 
    Дуб, вобравший в себя энергию солнечных лучей, наполняет комнату теплом и уютом. Такая мебель приносит радость от использования долгие годы.`,
    dimensions: 'Габариты: д/г/в 277,8/49,2/218,4 см',
    images: ['../images/cat-image-1.png', '../images/cat-image-2.png'],
    ids: ['atn1', 'atn2'],
    description: 'Мебель для гостиной ATENA (Gwinner, Германия)',
    price: 'ЦЕНА: 389 000 Р',
  },
  {
    text: `Настоящий итальянский угловой диван ECLETTICO фабрики Calia Italia! Не реплика!
    Комплектация с раскладным механизмом, матрас высотой 16 см. Можно использовать на каждый день.
    Очень удобная высота спинки, плюс регулируемые подголовники. Глубина сиденья комфортная для людей среднего роста (до 180 см).
    Ткань смесовая с добавление 30% вискозы, благородного светло-серого цвета с красивым плетением, приятная тактильно.`,
    dimensions: 'Габариты: h83*103/163*266 см / размеры матраса 140*195*h16 см',
    images: ['../images/cat-image-2.png', '../images/cat-image-1.png'],
    ids: ['ecl1', 'ecl2'],
    description: 'Угловой раскладной диван ECLETTICO (Calia Italia, Италия)',
    price: 'ЦЕНА: 359 900 Р',
  },
  {
    text: `Стильное кожаное кресло для отдыха ARCHIBALD в комплекте с пуфом для ног - достойное украшение интерьера.
    Эргономика кресла на высоте! Комфортный отдых обеспечен.
    Каркас выполнен из массива дуба и мебельной фанеры. Молдинг и опоры - массив дуба.
    Кресло ARCHIBALD уместно не только в гостиной, но и в кабинете или спальне.`,
    dimensions: 'Габариты (мм): h740*770*830',
    images: ['../images/cat-image-3.jpg', '../images/cat-image-1.png'],
    ids: ['arc1', 'arc2'],
    description: 'Кресло Archibald с пуфом (ОСА, Россия)',
    price: 'ЦЕНА: 105 000 Р',
  },
  {
    text: `ТВ-тумба SIBOX выглядит лаконично и очень современно. Она прекрасно организует и зону ТВ в гостиной, и хранение вещей, не загромождая пространство. 
    Фасады имеют двустороннюю покраску: с внутренней стороны — шелковисто-матовое, с внешней — высокоглянцевое. Цвет эмали WCP176 (NCS). 
    Корпус модулей выполнен из ЛДСП с тиснением под структуру натурального ясеня. Открывание фасадов: push-to-open.`,
    dimensions: 'Габариты, см: д/г/в 299/32/90',
    images: ['../images/cat-image-4.png', '../images/cat-image-2.png'],
    ids: ['sib1', 'sib2'],
    description: 'Тумба для телевизора навесная Sibox (Astron, Россия)',
    price: 'ЦЕНА: 89 000 Р',
  },
]

// export const imagesCount = (arr) => {
//   if (arr.length > 3) {
//     return 
//       `<img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />`
//     } else if (arr.length > 2) {
//       return 
//       `<img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />`
//     } else if (arr.length > 1) {
//       return 
//       `<img src='../images/cat-image-1.png' />
//       <img src='../images/cat-image-1.png' />`
//     } else return `<img src='../images/cat-image-1.png' />`
// }

// const catalogItem = document.getElementById('catalog-item');
// const catalogContainer = document.querySelector('.catalog__items');
// const catalogSection = document.querySelector('.catalog__item');

// const createTemplate = (text, dimensions, image, description, price) => {
//   const item = catalogItem.content.querySelector('.catalog__item').cloneNode(true);
//   item.querySelector('.catalog__content').textContent = text;
//   item.querySelector('.catalog__dimensions').textContent = dimensions;
//   for (let i=0; i<image.length; i++) {
//     item.querySelector('.catalog__image-wrapper').append(document.createElement("img"))
//   }
//   // item.querySelector('.catalog__image').src = image[0];
//   item.querySelector('.catalog__description').textContent = description;
//   item.querySelector('.catalog__price').textContent = price;
//   return item;
// }

// data.forEach(function(currentItem) {
//   catalogContainer.append(createTemplate(currentItem.text, currentItem.dimensions , currentItem.image, currentItem.description, currentItem.price))
// })
