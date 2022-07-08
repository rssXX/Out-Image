import {arr} from "./data.js"
let pictureTemplate = document.querySelector('#picture').content;
const elementsFragment = document.createDocumentFragment();
const elementsList = document.querySelector('.pictures');

const render = () => {
  arr.forEach( function(element) {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('img').setAttribute('src', `photos/${element.url}.jpg`);
    photoElement.querySelector('img').setAttribute('id', `${element.id}`);
    photoElement.querySelector('.picture__comments').textContent = element.comments.length;
    photoElement.querySelector('.picture__likes').textContent = element.likes;
    elementsFragment.appendChild(photoElement);
  });
  elementsList.appendChild(elementsFragment);

}
export {render};
