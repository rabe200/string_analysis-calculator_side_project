import { string } from '../../index.js';
import { operatorIndexInString } from '../../index.js';
import { operator } from '../../index.js';

export function getOperatorArray() {
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === '+' ||
      string[i] === '-' ||
      string[i] === '*' ||
      string[i] === '/'
    ) {
      operatorIndexInString[operatorIndexInString.length] = i;
      operator[operator.length] = string[i];
    }
  }
}
