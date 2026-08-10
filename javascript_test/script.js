

/* Question 1: Function Declaration

Write a function declaration called sayHello that takes one parameter name 
and returns the string "Hello,[name]!".*/


function sayHello(name) {
  return `Hello, ${name}!`;
}



/* Question 2: Function Expression

Write a function expression assigned to a constant called subtract
that takes two parameters a and b and returns their difference (a-b).*/


const subtract = function(a, b) {
  return a - b;
};



/* Question 3: Arrow Function

Write an arrow function assigned to a constant called divide that
takes two parameters x and y and returns the result of x/y. */

const divide = (x, y) => x / y;



/* Question 4: Default Parameters

Write a function called welcome that takes two parameters:
name (default value "Visitor") and city (default value "Unknown"). 
The function should return the string "[name] is from [city]". */

function welcome(name = "Visitor", city = "Unknown") {
  return `${name} is from ${city}`;
}



/* Question 5: Higher-Order Function

Write a higher-order function called operate that takes three parameters:
a number num, and two functions func1 and func2. The function should
return the result of calling func2 with the result of calling func1 on
num. */

function operate(num, func1, func2) {
  return func2(func1(num));
}



/* Question 6: Immediately Invoked Function Expression (IIFE)

Write an immediately invoked function expression (IIFE) that logs the 
message "I run immediately!" to the console as soon as it is defined*/

(function() {
  console.log("I run immediately!");
})();


/* Question 7: Object Method

Create an object called car with a property brand set to "Toyota" and a
method called getInfo that returns the string "This car is a [brand]".*/

const car = {
  brand: "Toyota",
  getInfo() {
    return `This car is a ${this.brand}`;
  }
};



/* Question 8: Arrow Function with Condition

Write an arrow function called isEven that takes one paramete n and 
returns true if the number is even, and false if it is odd.*/


const isEven = n => n % 2 === 0;


