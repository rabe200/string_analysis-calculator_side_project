import { analyzeArray } from './components/analyze/analyze.js';
console.clear();
import { handleOperators } from './components/handleOperators/handleOperators.js';
import { operatorIndexArray } from './components/handleOperators/handleOperators.js';
//funktioniert , solange hinter der letzten ziffer ein plus ist ?!?! gelöst durch zusätzliche variable, die operator.length + 1 speichert
export const string = '1-2*3+4-3/5';
export const operatorIndexInString = [];
export const operator = [];
export let numbers = [];
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
analyzeArray();
handleOperators();
// console.clear()
console.log('numbers', numbers);
console.log('operators', operatorIndexArray);
console.log(operator);
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

function divide(iterator) {
  console.log('initialize division');
  getValues(iterator);
  // const sum = a/b;
}
function multiply(iterator) {
  console.log('initialize multiplication');
  getValues(iterator);
  // const sum= a*b;
}
function substract(iterator) {
  console.log('initialize substraction');
  getValues(iterator);
  // const sum= a-b;
}
function add(iterator) {
  console.log('initialize addition');
  getValues(iterator);
  const addValue = getValues(iterator);
  console.log(addValue);
  const sum = parseInt(addValue.a, 10) + parseInt(addValue.b, 10);
  console.log('sum', sum);
  // const sum= a+b;
}

function getValues(iterator) {
  const a = numbers[iterator];
  const b = numbers[iterator + 1];
  return {
    a: a,
    b: b
  };
}

// muss noch funktion rein, wass passiert, wenn numbers[0] keine zahl ist, sondern beispielsweise ein minus!
// vielleicht kann ich die substraktion in der form schreiben, dass sie das minus einfach auf die numbers[i] zieht
// also nur das minus und die darauf folgende form betrachtet
// dafür muss ich dann auf die reihenfolge der ausführung achten

// function beforeSignAfter(iterator) {
// for (let i=0; i<operator.length; i++) {
// let a;
// let b;
// console.log(numbers[iterator]);
// console.log(numbers[iterator+1]);
// console.log(operator[iterator]);
// console.log('iterator', iterator)
// a = numbers[iterator];
// console.log('a', a);
// b = numbers[iterator+1];
// console.log('b', b);
// }
// }

console.log('EOL');

// for (let i=0; i<number.length; i++) {
//   console.log(i);
//   a=number[i];
//   console.log('a:',a);
//   b=number[i+1];
//   console.log('b:',b);
//   if (i=number.length && evenOrOdd(number.length)) console.log ('end');
//Problem: prüfung, ob gerade oder ungerade fehlt
//wenn ungerade, dann muss nach bestimmter iteration selbige gestoppt werden?
// }

// resumee: was macht der code bisher?
// a) er sucht operatoren +, -, *, /
// b) er setzt den index der operatoren in eine variable
// c) er loggt die erwarteten stringslices der rechnung ohne die operatoren
// d) die korrekten strings werden in einem array gespeichert mit entsprechenden indexes starting bei 0

// next step(s)
// a) überlegen, welche logik angewandt werden kann, um zum ergebnis zu kommen
// Gedanken: erstmal für den case "+"
// -vom kleinen ins große -smallest viable object oder so
// 'wenn +, dann führe fn addition() aus
// logik: nehme zahl vor + und addiere sie zur zahl nach +
// das ergebnis kommt in die variable zwischenergebnis[i]

//Samstag 2023-02-04:
//order in der if Abfrage, da das erste if höchste Priorität hat, die mathematischen gleichungen nach oben
//die höher in der rangliste sind
//also punkt vor strich
//zuerst multiplikation and division
//dann addition und substraktion
//also nun erstmal die if anfrage schreiben für die operators
//außerdem: der funktion für die aufspaltung von zahlen in strings einer variablen zuweisen,
//um sie vor der if anfrage nach den operatoren direkt abzurufen
