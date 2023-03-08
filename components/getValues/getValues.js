import { numbers } from '../../index.js';

export function getValues(iterator) {
  const a = numbers[iterator];
  const b = numbers[iterator + 1];
  return {
    a: a,
    b: b
  };
}
