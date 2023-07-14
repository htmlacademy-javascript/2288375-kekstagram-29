import {DESCRIPTIONS, MESSAGES, NAMES} from './data.js';

const getRandomNumberFromRange = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const getCommentObj = () => ({
  id: getRandomNumberFromRange(1, 25),
  avatar: `img/${getRandomNumberFromRange(1, 6)}.svg`,
  message: MESSAGES[getRandomNumberFromRange(0, MESSAGES.length)],
  name: NAMES[getRandomNumberFromRange(0, NAMES.length)]
});

export { getRandomNumberFromRange, getCommentObj};
