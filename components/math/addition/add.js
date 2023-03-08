import { getValues } from '../../getValues/getValues.js';

export function add(iterator) {
  console.log('initialize addition');
  getValues(iterator);
  const addValue = getValues(iterator);
  console.log(addValue);
  const sum = parseInt(addValue.a, 10) + parseInt(addValue.b, 10);
  console.log('sum', sum);
  // const sum= a+b;
}
