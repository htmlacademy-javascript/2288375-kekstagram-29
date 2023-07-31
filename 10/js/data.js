import {getRandomNumberFromRange} from './util.js';

const DESCRIPTIONS = [
  'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется. Верьте в себя. Главное хотеть и мечтать.....',
  'Как же круто тут кормят #food #foodgram #instafood #delicious #yummy',
  '#fun #party #cool #young',
  'Норм',
  'Вот это тачка! #wow #car #carwow #drive',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Олег',
  'Василий',
  'Петр',
  'Кристина',
  'Ольга',
  'Катерина'
];

const getCommentObj = () => ({
  id: getRandomNumberFromRange(1, 25),
  avatar: `img/avatar-${getRandomNumberFromRange(1, 6)}.svg`,
  message: MESSAGES[getRandomNumberFromRange(0, MESSAGES.length)],
  name: NAMES[getRandomNumberFromRange(0, NAMES.length)]
});

const getPhotoObj = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[getRandomNumberFromRange(0, DESCRIPTIONS.length)],
  likes: getRandomNumberFromRange(15, 200),
  comments: Array.from({length: getRandomNumberFromRange(0, 25)}, getCommentObj)
});

export const getPhotosData = (num) => {
  const photos = Array.from({length: num}, (_, index) => getPhotoObj(index + 1));
  return photos;
};

export const data = getPhotosData(25);

