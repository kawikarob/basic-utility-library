function add(input1, input2) {
   // A1: any JavaScript value
   // A2: any JavaScript value
   // R: a single JavaScript value
   return input1 + input2;
}

function subtract(firstNumber, secondNumber) {
   // A1: a number
   // A2 : a number
   // R : a number
   return secondNumber - firstNumber;
}

function multiply(firstNumber, secondNumber) {
   // A1 : a number
   // A2 : a number
   // R : a number
   return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
   // A1 : a number
   // A2 : a number
   // R : a number
   return firstNumber / secondNumber;
}

function increment(firstNumber) {
   // A1 : a number
   // R : number + 1
   // ++
   return ++firstNumber;
}

function decrement(firstNumber) {
   // A1 : a number
   // R : number - 1
   // --
   return --firstNumber;
}

function multiplyDecimals(firstNumber, secondNumber) {
   // A1 : a number
   // A2 : a number
   // R : a number
   return firstNumber * secondNumber;
}

function divideDecimals(firstNumber, secondNumber) {
   // A1 : a number
   // A2 : a number
   // R : a number
   return firstNumber / secondNumber;
}

function concatenate(input1, input2) {
   // A1 : string1
   // A2 : a string2
   // R :  string1 string2
   return input1 + " " + input2;
}

function concatenatePlusEquals(input1, input2) {
   // A1 : string1
   // A2 : string2
   // R : string1String2
   // +=
   return (input1 += input2);
}

function stringVariables(input1, input2) {
   var yourName = input1 + " " + input2;
   var greeting = "Hello " + yourName + ", nice to meet you";
   return greeting;
}

function stringLength(input1) {
   //var firstName = 0;
   //var firstName = "Kawika"; //"Kawika" = 6
   return input1.length;
}

function firstCharacter(input1) {
   //var firstName = "Kawika";
   //var firstLetter = firstName[0]; // "K"
   return input1[0];
}

function nthCharacter(input1, input2) {
   // input1 = string
   // input2 = nth character
   return input1[input2];
}

function findLastCharacter(input1) {
   //var firstName = "Kawika";
   //var lastLetter = firstName[firstName.length - 1]; //a
   return input1[input1.length - 1];
}

function nthToLastCharacter(input1, input2) {
   // input1 = string
   // input2 = nth character
   return input1[input1.length - [input2]];
}

// not sure how to do this :/
function arrayPush(input1, input2) {
   // input1 = array
   // input2 = array
   // input2 is added to end of input1
   return "input1".push("input2");
}
