import { analyzeArray } from "./components/analyze/analyze.js";
console.clear()

//funktioniert , solange hinter der letzten ziffer ein plus ist ?!?! gelöst durch zusätzliche variable, die operator.length + 1 speichert
export const string = '1/2*3+4+5+6/7+2+44-32323232+11111+213232132'
export const operatorIndexInString = []
export const operator = []
export let number = [];
for (let i = 0; i < string.length; i++) {
  if (string[i] === '+' || string[i] === '-' || string[i] === '*' || string[i] === '/') {
    // diese iteration funktioniert, weil der index des erstellten arrays eine eigene zählung hat!
    operatorIndexInString[operatorIndexInString.length] = i;
    operator[operator.length] = string[i];
  }
}
analyzeArray();

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


  // console.log(number[i]);
    // console.log(string.slice(i, operatorIndexInString([i+1]))








// for (let i=0; i<number.length; i++) 


// if (operator [i] === "+") {
//   console.log('number', number[i]);
//   console.log('number2', number[i+1]);
//   i+2;
//   // console.log('sum', sum[i]);
// }
// }
