/*Five different examples of each of the 
three Javascript variables types*/

//First variable type is: var
//Examples of var

var firstName="Hezekiah"; //stores my name
var School="University of Jos"; // Name of school
var isStudent=true; //stores whether someone is a student or not
var salary=50000; //stores an employee's salary.
var isMarried=false; //stores whether someone is married or not


//Second variable type is: let
//Examples of let

let city="Jos"; //stores the name of a city
let score="95"; // stores a student's score
let temperature=28; //stores the current temperature
let course="Computer Science"; //stores course of study
let accountBalance=12000000000; //bank account balance;


//Third variable type is: const
//Examples of const

const pi=3.142; //stores mathematical value of pi
const daysInWeek=7; //stores the number of days in a week
const passMark=40; //stores the minimum score required to pass.
const currency="Naira"; //stores the name of country's currency
const country="Nigeria"; //stores the name of a country

//to display some values stored inside the container
console.log(city);
console.log(score);
console.log(isStudent);
console.log(accountBalance);
console.log(pi);
console.log(passMark);
console.log(firstName);
console.log(School);
console.log(salary);
console.log(isMarried);

//Javascript logical operators
//First logical operator is: AND (&&)
//Examples of AND (&&) operator

let rank="Staff";
let level=10;
console.log(rank="Staff" && level>=7);



let isLoggedIn=true;
let isVerified=false;
console.log(isLoggedIn && isVerified);


//Second logical operator is: OR (||)
//Examples of OR (||) operator

let isStudent=true;
let isStaff=false;
console.log(isStudent||isStaff);

let hasCash=true;
let hasATM=false;
console.log(hasCash||hasATM);

let rain=false;
let cloudy=false;
console.log(rain||cloudy);


//Third logical operator is: NOT (!)
//Examples of NOT (!) operator

let isLoggedIn=true;
console.log(!isLoggedIn);

let lightOn=false;
console.log(!islightOn);

let isPresent=true;
console.log(!isPresent);

//Examples of Prompt/Alert in Javascript

//Prompt() Example

let name=prompt("What is your name?");
console.log("Welcome" + name); //user enters name and it is stored in variable name

let age=prompt("How old are you?");
console.log("You are" + age + "years old.");

//Alert() Example

alert("Welcome to my Javascript code");

alert("Alert test successful!");


