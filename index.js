import { getOperatorArray } from './components/getOperatorArray/getOperatorArray.js';
import { analyzeArray } from './components/analyze/analyze.js';
console.clear();
import { handleOperators } from './components/handleOperators/handleOperators.js';
import { operatorIndexArray } from './components/handleOperators/handleOperators.js';
import { executeMath } from './components/executeMath/executeMath.js';

//funktioniert , solange hinter der letzten ziffer ein plus ist ?!?! gelöst durch zusätzliche variable, die operator.length + 1 speichert
export const string = '1-2*3+4-3/5';
export const operatorIndexInString = [];
export const operator = [];
export let numbers = [];
getOperatorArray();
console.log('numbers', numbers);
console.log('operators', operatorIndexArray);
analyzeArray();
handleOperators();
executeMath();

console.log(operator);
console.log('EOL');

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

// Samstag 2023-02-04:
// order in der if Abfrage, da das erste if höchste Priorität hat, die mathematischen gleichungen nach oben
// die höher in der rangliste sind
// also punkt vor strich
// zuerst multiplikation and division
// dann addition und substraktion
// also nun erstmal die if anfrage schreiben für die operators
// außerdem: der funktion für die aufspaltung von zahlen in strings einer variablen zuweisen,
// um sie vor der if anfrage nach den operatoren direkt abzurufen

// 2023-03-08 01:27am
// jsstructure implemented. index.js nearly clean now. import/export structure of components is working
// next step is to get the math operations divide, multiply and substraction working as add.js
// meaning: look for string before and after operator, then combing them with the assigend operator
// after that i can think of implementing bracelets and then maybe have to think of ways to sort array
// in order to execute the maths in correct order
// also gotta think of combining all that what has been calculated to a sum then
// but i need to take a nap. next day i got to write protocol for bootcamp
