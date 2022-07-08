import {arr} from "./main.js"
let bigSection = document.querySelector('.big-picture.overlay.hidden');
let allPhotos = document.querySelector('.pictures.container');
const createComment = ({message, avatar, name}) =>
    `
    <li class="social__comment">
        <img class="social__picture" src="${avatar}" alt="${name}" width="35" height="35">
        <p class="social__text">${message}</p>
    </li>
    `;
const bigPicture = (evt) => {
    if (evt.target.closest('a.picture').classList == 'picture'){
        let elem = arr.find(arr => arr.id == evt.target.closest('a.picture').querySelector('.picture__img').id);
        bigSection.querySelector('.big-picture__img img').src = `photos/${elem.url}.jpg`;
        bigSection.querySelector('.big-picture__img img').alt = elem.description;

        bigSection.querySelector('.social__caption').textContent = elem.description;
        bigSection.querySelector('.social__likes').textContent = elem.likes;
        bigSection.querySelector('.comments-count').textContent = elem.comments.length;

        let comments = bigSection.querySelector('.social__comments');

        const commentString = elem.comments.map((item) => createComment(item)).join('');

        comments.insertAdjacentHTML("beforeend", commentString);
        bigSection.classList.remove('hidden');
    }
}
const closeBigPicture = (evt) => {
    if(evt.target.closest('button').classList == "big-picture__cancel"){
        document.querySelector('.big-picture.overlay').classList.add('hidden');
    }
}
bigSection.addEventListener('click',closeBigPicture);
allPhotos.addEventListener('click', bigPicture);
