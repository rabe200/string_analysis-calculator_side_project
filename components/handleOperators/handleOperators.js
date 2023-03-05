import { string } from "../../index.js"
import { operator } from "../../index.js"
import { operatorIndexInString } from "../../index.js"

function findCommonElements3(arr1, arr2) {
    return arr1.some(item => arr2.includes(item))
    }
 export const operatorIndexArray = []

export function handleOperators() {
     

    

let countStringIndex = 0;
function arrayOperators()
{   
    for (let i=0; i<string.length; i++) {
  //  console.log(`TEST ${i}`)
   let ix = operatorIndexInString;
   let check = [i];
   
    if (findCommonElements3(ix, check)) {  
            // console.log('check'); 
            operatorIndexArray[i] = [ix[countStringIndex], operator[countStringIndex]];
            countStringIndex++;
        }
          else {
            // console.log('fail'); 
            operatorIndexArray[check]= []; 
        }
}}
arrayOperators();
console.log(operatorIndexArray);
}
