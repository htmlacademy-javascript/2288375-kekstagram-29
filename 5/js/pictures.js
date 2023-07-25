const picturesContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');

// console.log(cardTemplate)

const fillCardTemplate = ({url, description, comments, likes}) => {
  const element = cardTemplate.cloneNode(true);
  element.querySelector('.picture__img').src = url;
  element.querySelector('.picture__img').alt = description;
  element.querySelector('.picture__comments').textContent = comments.length;
  element.querySelector('.picture__likes').textContent = likes;
  return element;
};

export const renderPictures = (data) => {
  data.forEach((cardObj) => {
    fragment.appendChild(fillCardTemplate(cardObj));
  });
  picturesContainer.appendChild(fragment);
};
