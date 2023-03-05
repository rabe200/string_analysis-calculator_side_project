export const evenOrOdd = (string) => {
  if (parseInt(string.length, 10) % 2 == 0) {
    console.log('string.length', string);
    console.log('even');
  } else {
    console.log('string.length', string);
    console.log('Odd');
  }
};
