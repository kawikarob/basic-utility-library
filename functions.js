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
   var firstName = 0;
   var firstName = "Kawika"; //"Kawika" = 6
   return input1.length;
}

function firstCharacter(input1) {
   var firstName = "Kawika";
   var firstLetter = firstName[0]; // "K"
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

function arrayPush(input1) {
   myArray = ["Dog", "Cat"];
   myArray.push([input1]); // adds to elemnet to end of array
   return myArray;
}

function arrayPop(input1) {
   myArray = ["Dog", "Cat", "Mouse", "Hat"];
   myArray.pop([input1]); // removes last element
   return myArray;
}

function arrayShift(input1) {
   myArray = [
      ["dog", 3],
      ["cat", 7],
   ];
   myArray.shift([input1]); // removes first element
   return myArray;
}

function arrayUnshift(input1) {
   myArray = ["kiwi", "apple", "banana"];
   myArray.unshift([input1]); // adds element to the beginning of array
   return myArray;
}

function shoppingList(input1, input2) {
   myList = [[[input1]], [[input2]]]; // 1st element = string (item), 2nd element = quantity (of item)
   return myList;
}

function nextInLine(input1) {
   myArray = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
   myArray.push([input1]); // adds element to end of array
   myArray.shift(); // removes first element of array
   return myArray;
}
