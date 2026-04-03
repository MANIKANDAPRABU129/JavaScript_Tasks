// Section 1: Printing & User Interaction

// 1. Print your name and designation in the console.
console.log("Manikandaprabu S - Full Stack Developer");

// 2.Show an alert saying "Welcome to JavaScript Session".
alert("Welcome to JavaScript Session");

// 3. Ask the user: "Do you like coding?" using confirm() and print the result.
let likeCoding = confirm("Do you like coding?");
console.log(likeCoding);// Output: true or false 

// 4. Take user input for favorite food using prompt() and print it.
let favoriteFood = prompt("What is your favorite food?");
console.log(favoriteFood);// Output: (user's input for favorite food)

// 5. Display "Good Evening Team" on the UI using document.writeln().
document.writeln("Good Evening Team");// Output: Good Evening Team displayed on the webpage

//  Section 2: Console Methods

// 6. Print a number using console.log().
console.log(18); // Output: 18

// 7. Print a warning message: "This is a warning".
console.warn("This is a warning!"); // Output: This is a warning!

// 8. Print an error message: "Something went wrong!".
console.error("Something went wrong!"); // Output: Something went wrong!

// 9. Clear the console after printing 3 messages.
console.log("Message 1");
console.log("Message 2");
console.log("Message 3");
console.clear();// Clear the console


// 🔹 Section 3: Data Types

// 10.Create a variable with your name and print its type.
var name = "Manikandaprabu S";
console.log(typeof(name)); // Output: string

// 11.Store your age and print the datatype.
var age = 24;
console.log(typeof(age)); // Output: number

// 12.Store a boolean value (true/false) and print it.
var working = true;
console.log(working); // Output: true

// 13. Declare a variable without value and print it.
var stackly;
console.log(stackly); // Output: undefined

// 14. Assign null to a variable and print it.
var nullValue = null;
console.log(nullValue); // Output: null

// Section 4: Arrays

// 15.Create an array of 5 fruits and print it.
var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grape", "Mango"]

// 16.Print the first and last element of the array.
var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[fruits.length - 1]); // Output: Mango

// 17.Add one more fruit dynamically and print updated array.
var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
fruits.push("Pineapple");
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grape", "Mango", "Pineapple"] 

// 18.Remove the last element and print array.
var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana", "Orange", "Grape"]

// 19.Find the length of the array.
var fruits = ["Apple", "Banana", "Orange", "Grape", "Mango"];
console.log(fruits.length); // Output: 5

// Section 5: Objects

// 20.Create an object for a student (name, age, course).
let student = {
    name: "Manikandaprabu S",
    age: 23,
    course: "information technology",
    fruits: ["Apple", "Banana", "Orange"] // Nested array inside object

}
// 21.Print the student name.
console.log(student.name); // Output: Manikandaprabu S

// 22.Add a new property (college) dynamically.
student.college = "karpagam college of engineering";
console.log(student); // Output: add new property college in console 

// 23.Access nested array inside object (like your fruit example).
console.log(student.fruits); // Output: ["Apple", "Banana", "Orange"]

// 24.Update a property value
student.age = 24;
console.log(student); // Output: update age property value in console

// Section 6: Operators

// 25.Add two numbers and print result.
let num1 = 10;
let num2 = 20;
let num3 = num1 + num2;
console.log(num3); // Output: 30 

// 26.Subtract two numbers.
let a = 50;
let b = 30;
let c = a - b;
console.log(c); // Output: 20

// 27.Multiply two numbers.
let x = 5;
let y = 4;
let z = x * y;
console.log(z); // Output: 20   

// 28.Divide two numbers.
let p = 100;
let q = 5;
let r = p / q;
console.log(r); // Output: 20

// 29.Find remainder using %.
let d1 = 10;
let d2 = 3;
let remainder = d1 % d2;
console.log(remainder); // Output: 1    

// 30.Use exponent operator (**) to find power.
let e1 = 2;
let e2 = 3;
let power = e1 ** e2;
console.log(power); // Output: 8

//  Section 7: Increment & Decrement

// 31.Create a variable and use post increment.
let a1 = 5;
console.log(a1++); // Output: 5 
console.log(a1);   // Output: 6 after post increment

// 32.Create a variable and use pre increment.
let b1 = 10;
console.log(++b1); // Output: 11 
console.log(b1);   // Output: 11

// 33.Show difference between num++ and ++num.
let number1 = 7;
console.log(number1++); // Output: 7 
console.log(number1);   // Output: 8 

let number2 = 7;
console.log(++number2); // Output: 8 

// 34.Use decrement operator and print values.
let count = 10;
console.log(count--); // Output: 10
console.log(count);   // Output: 9 

// 35.Predict output before running (important logic task 👇)
let a11 = 5;
let b22 = a11++; // a , b , c  this variables are already use then i will chaange a11, b22, c33
let c33= ++a11;

console.log(a11);// Output: 7
console.log(b22);// Output: 5
console.log(c33);// Output: 7

//  Section 8: Real-Time Logic Tasks

// 36.Ask user age and check if eligible to vote.
{
let age = 23;
if (age >=18){
    console.log("You eligible to vote."); 
}else{
    console.log("not eligible to vote.");
}// Output: You eligible to vote.
}
// 37.Ask user name and greet: "Hello Naveen".
{
let name = "Manikandaprabu";
console.log("Hello " + name); // Output: Hello Manikandaprabu
}

// 38.Store marks in array and print highest value.
let marks = [85, 92, 78, 90, 88];
let highestMarks = Math.max(...marks);
console.log(highestMarks); // Output 92

// 39.Create object for fruits category (like your example) and access values.
let fruits1 = {
  redColor: ["apple", "strawberry", "cherry"],
  yellowColor: ["banana", "orange"]
};

console.log(fruits1.redColor);// Output: ["apple", "strawberry", "cherry"]
console.log(fruits1.yellowColor[0]);// Output: banana

// 40.Combine prompt + array:
//   Ask user to enter 3 favorite fruits
//   Store in array
//   Print them

let fruits123 = [];

fruits123[0] = prompt("Enter fruit 1:");
fruits123[1] = prompt("Enter fruit 2:");
fruits123[2] = prompt("Enter fruit 3:");

console.log("Your favorite fruits:", fruits123);// output:Your favorite fruits: (3) ['apple', 'banana', 'orange']
