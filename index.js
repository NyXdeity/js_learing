 //day 1 introduction to Js
/*
 var first = " 1st ";
alert("welcome to my"+first+"site");//display a modal dialog box with this msg and an OK button.

console.log("learning JavaScript");
document.write("Wlecome To My First Site");
*/
//day 2 Data types

// PRIMITVE DATA TYPES

// 1. strings
// let first_name = "PRINCE";
// let last_name = "SONI";
// console.log(first_name + last_name);

// 2. boolean- this tyoe has two values: true and false
// let learning = true;
// let notlearning = false;
// console.log(typeof learning);
// console.log(learning);

// 3. undefined
// let age;
// console.log(age);

// 4. null- this represents empty or unknown value(is not called undefined)
// let number = null;
// console.log(number);
// console.log(typeof number);
//the type should be null but it says the type is object.
// It is a known bug in javaScript.


// Refernce | non-primitive Data Types

// 1. Object
/**
 in js,a object is a collection of properties.
 where each property is defined as a key-value pair.
 */
// example 1
// let person = {};
// console.log(person);
// console.log(typeof person);//it shows object.
//example 2
// let person = {
//     firstName: 'PRINCE',
//     lastName: 'SONI',
//     age: 18
// };
// console.log(person);
// console.log(typeof person);// this objects store strings and number type of datas

// 2. Array
/** 
 they are a type of object that stores
 a collection of values.
 */
// example 1 
// let number = [1,2,3,5,6,7,3,8,9,9,0,0];
//  console.log(number);
//  console.log(typeof number);

// 3. Functions
/**
 they are a type of object that can 
 be used to execute code. 
 */
//example 1
// function PRINCE(){
//     console.log("hello, world this is my first function in javaScript");
// }
// console.log(PRINCE);
// console.log(typeof PRINCE);

//day 3
// CONTROL_STATEMENTS:

// 1. conditional statement
/*
let age = 18;
let isAdult = age >= 18 ? true : false;
console.log(isAdult);

2. if statement
/*
 let age = 13
 if(age>=18){
    console.log("can vote");
 }
 if(age<18){
    console.log("cannot vote");
 }
*/
// 3. else statement
/*
 let nationality = "INDIAN";
let age = 17;

if(age >= 18 && nationality == "INDIAN"){
    console.log("can vote in india");
}
if(age<18 && nationality == "INDIAN"){
    console.log(" can vote in india when you hit 18 ;)");
}

else{
    console.log("cannot vote in ");
}
*/

// 4. else if statement
/* 
  let age = 17;

  if(age>=18){
    console.log(" This person is an Adult");
 }
 else if (age>=13) {
    console.log(" This person is an teenager");
 }
 else{
    console.log(" This is a Child | Minor");
 }
*/
// 5. switch:-
/**
 it's used to execute a block of code
 base on the value of an expression
 */
//this code will tell the data type of an give value
/*
 let value = false;
 switch (typeof value) {
    case "number":
        console.log("Number ");
        break;
    case "string":
        console.log("String");
        break;
    case "boolean":
        console.log("String");
        break;    
    case "array":
        console.log("Array");
        break;
    default:
        console.log("other");
        break;
}
*/

// code to find which day it is through numbers
/*let day = 8 ;

 switch (day) {
    case 1 :
        day = "monday"
        break;

    case 2 :
        day = "tuesday"
        break;  

    case 3 :
        day = "wednesday"
        break;  

    case 4 :
        day = "thursday"
        break;  

    case 5 :
        day = "friday"
        break;  

    case 6:
        day = "saturday"
        break;  

    case 7 :
        day = "sunday"
        break;
       
    default:
        day = " null as a valid week day number is not given";
        break;
}
console.log("the day is:\n" + day);
*/

// 6. Ternary operator
// condition ? true_statement : false_statement;
// let age = 8;
// (age >= 18) ? console.log("Adult") : console.log("Minor");// as this method is long, i'll convert it into an function
// let block = (age >= 18) ? "Adult" : "Minor";
// console.log(block);

// day 4 operators and expression
/*1. Arithmetic operators
let s = 10;
let b = 2;
console.log("s + b =", s+b);
console.log("s - b =", s-b);
console.log("s * b =", s*b);// multiplication
console.log("s ** b =",s**b);//exponentiation :- (s**b)this becomes (s^b) 
console.log("s / b =", s/b);//division
console.log("s % b =", s%b);//modulus
*/

//2. Assignment operators
// let a = 4;
// let b = 2;
// console.log(a /= b);
// console.log(a /= b);
// console.log(a **= b);

/* simple primitives: variables, data types, if/else , loops- for loops

// let first_Name = " Prince ";
// let age = 18
// let is_Married = true;
// console.log("this person's name is" + first_Name +
// "and their age is "+ age);
// if(is_Married == true){
//     console.log(first_Name + "is married.");
// } else{
//     console.log(first_Name+"is not married.");
// }


// let answer = 0;// loops:- Q: print the sum of o to nth term?
// answer += 1+2+3+4+5+6+7+8+9+10;
// console.log(answer);//ugly way of doing it.

// let n = 0;
// let answer = 0;
// for( let i = 0; i<= n; i++ ){
//     answer = answer + i;
// }
// console.log(answer);

//the code below uses the input function and asks for user input:- 
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Enter a number: ', n => {
//     n = Number(n); // Convert input to a number
  
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//       answer += i;
//     }
  
//     console.log(answer);
//     readline.close(); 
// });




// let first_Name = "Abhishek";// Q1.WAP to greet a person given their first and lasdt name.
// let last_Name = "soni";
// console.log("Hello " + first_Name +" "+ last_Name + " how are you?");


// let male = true;//Q2.WAP that greets someone based on their gender.
// if(male == true){
//     console.log("hello sir");
// }else{
//     console.log("hello ma'am");
// }


// let ans = 0;//Q3.WAP to the sum of 0 to 1000.
// for(i = 0; i <= 1000; i++){
//     ans = ans + i;
// }
// console.log(ans);

*/
//*complex primitives://arrays and objects:-
// WAP to print all the even numbers in an array

// const personArray = ["this","is","a","ARRAY"];
// console.log(personArray[0]);

// const age =[15,45,67,32,65,32,65];

// numberOfpeople = age.length;

// for(i = 0; i < numberOfpeople; i++) {
    
//     if(age[i] % 2 == 0){
//         console.log(age[i]);
//     }
// }

// const num = [6,23,54,100,67,68]; //WAP to print the biggest number in an array
// let biggestNum = [0];//assumes the first element is the largest
// for(let i = 1 ; i < num.length; i++) {
    
//     if(num[i] > biggestNum) {
//         biggestNum = num[i];//update if a larger number is found 
//     }
// }
// console.log("the biggest number in the array is:- "+biggestNum);