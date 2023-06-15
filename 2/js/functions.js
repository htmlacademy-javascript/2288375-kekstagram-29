function checkMaxLengthString(string, length) {
  return string.length <= length;
}

checkMaxLengthString('проверяемая строка', 20);

function itPalindrome (primaryString){
  const string = primaryString.replaceAll(' ', '').toUpperCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
    return true;
  }
}

itPalindrome('топот');
