import { operator } from "../../index.js"
import { operatorIndexInString } from "../../index.js"
import { string }from "../../index.js"
import { numbers } from "../../index.js"

export const analyzeArray = () => {
  console.log('operatorIndexInString: ', operatorIndexInString, 'operator: ', operator)
  console.log('------')
    const x = operator.length +1;
  for (let i=0; i<x; i++) {
    console.log('iteratorIndex',i);  
    console.log('operatorIndexInString', operatorIndexInString[i]);
    if (i<1) {
    console.log('---0')
    console.log(string.slice(i, operatorIndexInString[i]));
    numbers[i] = string.slice(i, operatorIndexInString[i]);
    console.log(numbers[i]);
  } else if (i<2 ) {
    console.log('---1')
    let operatorIndexInStringPlusOne = operatorIndexInString[i-1] + 1;
    numbers[i] = string.slice(operatorIndexInStringPlusOne, operatorIndexInString[i]);
    console.log('numberArray of i', numbers[i]);
    console.log('i',i);
  } else if (i>=2) {
    console.log('---2')
    let operatorIndexInStringPlusOne = operatorIndexInString[i-1] + 1;
    numbers[i] = string.slice(operatorIndexInStringPlusOne, operatorIndexInString[i]);
    console.log(numbers[i]);
    console.log('i', i, 'operator.length', operator.length);
    }}

}