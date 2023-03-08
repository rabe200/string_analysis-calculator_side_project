import { operator } from '../../index.js';
import { divide } from '../math/division/division.js';
import { multiply } from '../math/multiplication/multiplication.js';
import { substract } from '../math/substraction/substraction.js';
import { add } from '../math/addition/add.js';

export function executeMath() {
  for (let i = 0; i < operator.length; i++) {
    console.log('i', i);
    console.log(operator[i]);
    if (operator[i] === '/') {
      console.log('DIVIDE', operator[i]);
      divide(i);
    }
    if (operator[i] === '*') {
      console.log('MULTIPLY', operator[i]);
      multiply(i);
    }
    if (operator[i] === '+') {
      console.log('ADD', operator[i]);
      add(i);
    }
    if (operator[i] === '-') {
      console.log('SUBSTRACT', operator[i]);
      substract(i);
    }
  }
}
