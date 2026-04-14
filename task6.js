// Task 6:
//  1.E-commerce Cart Total
// 👉 Scenario: You are building a shopping cart

let cart = [
  {name: "Shirt", price: 500, qty: 2},
  {name: "Shoes", price: 1500, qty: 1},
  {name: "Cap", price: 300, qty: 3}
]
let total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
console.log(total);

let costly = cart.filter(item => item.price > 1000);
console.log(costly);

let names = cart.map(item => item.name.toUpperCase());
console.log(names);

//output:
//  task6.js:11  3400
// task6.js:14 [{…}]0: {name: 'Shoes', price: 1500, qty: 1}length: 1[[Prototype]]: Array(0)
// task6.js:17 (3) ['SHIRT', 'SHOES', 'CAP']0: "SHIRT"1: "SHOES"2: "CAP"length: 3[[Prototype]]: Array(0)

//  Task 2: Student Result System
// 👉 Scenario: School result processing
let students = [
  {name: "Arun", marks: 85},
  {name: "Bala", marks: 45},
  {name: "Charan", marks: 60},
  {name: "Divya", marks: 30}
]
let failed = students.filter(s => s.marks < 50);
console.log(failed);

let distinction = students.some(s => s.marks > 80);
console.log(distinction);

let allPass = students.every(s => s.marks > 35);
console.log(allPass);

let firstFail = students.find(s => s.marks < 50);
console.log(firstFail);

// output:
// (2) [{…}, {…}]0: {name: 'Bala', marks: 45}1: {name: 'Divya', marks: 30}length: 2[[Prototype]]: Array(0)
// task6.js:36 true
// task6.js:39 false
// task6.js:42 {name: 'Bala', marks: 45}

// Task 3: Employee Salary Analysis
// 👉 Scenario: HR dashboard
let employees = [
  {name: "A", salary: 25000},
  {name: "B", salary: 40000},
  {name: "C", salary: 15000},
  {name: "D", salary: 50000}
]
let updated = employees.map(e => ({
  ...e,
  salary: e.salary * 1.1
}));
console.log(updated);

let high = employees.filter(e => e.salary > 30000);
console.log(high);

let totalSalary = employees.reduce((acc, e) => acc + e.salary, 0);
console.log(totalSalary);

let sorted = employees.sort((a,b) => b.salary - a.salary);
console.log(sorted);

//output:
// task6.js:62 (4) [{…}, {…}, {…}, {…}]0: {name: 'A', salary: 27500.000000000004}1: {name: 'B', salary: 44000}2: {name: 'C', salary: 16500}3: {name: 'D', salary: 55000.00000000001}length: 4[[Prototype]]: Array(0)
// task6.js:65 (2) [{…}, {…}]0: {name: 'B', salary: 40000}1: {name: 'D', salary: 50000}length: 2[[Prototype]]: Array(0)
// task6.js:68 130000
// task6.js:71 (4) [{…}, {…}, {…}, {…}]0: {name: 'D', salary: 50000}1: {name: 'B', salary: 40000}2: {name: 'A', salary: 25000}3: {name: 'C', salary: 15000}length: 4[[Prototype]]: Array(0)

//  Task 4: String Real Use Case (Search System)
// 👉 Scenario: Search feature

let products = ["Laptop", "Mobile", "Tablet", "Camera"]

console.log(products.includes("Mobile"));

let lower = products.map(p => p.toLowerCase());
console.log(lower);

console.log(products.indexOf("Tablet"));
console.log(products.join("-"));

// output:
// task6.js:84 true
// task6.js:87 (4) ['laptop', 'mobile', 'tablet', 'camera']
// task6.js:89 2
// task6.js:90 Laptop-Mobile-Tablet-Camera

// Task 5: Date Real-Time Task (Age Calculator)
// 👉 Scenario: User profile

let dob = new Date("2002-10-05");
let today = new Date();

let age = today.getFullYear() - dob.getFullYear();
console.log(`You are ${age} years old`);

// output:
// task6.js:105 You are 24 years old

// Task 6: Login Validation System
// 👉 Scenario: Basic login check

let users = [
  {username: "admin", password: "1234"},
  {username: "user", password: "abcd"}
]

let username = "admin";
let password = "1234";

let user = users.find(u => u.username === username && u.password === password);

if(user){
  console.log("Login Success ✅");
}else{
  console.log("Invalid Credentials ❌");
}

// output:
// task6.js:124 Login Success ✅

// Task 7: Even Number Analyzer

let numbers = [10, 15, 20, 25, 30]
let even = numbers.filter(n => n % 2 === 0);
console.log(even);

console.log(numbers.some(n => n % 2 !== 0));

console.log(numbers.every(n => n % 2 === 0));

console.log(numbers.find(n => n > 20));

// output:
// task6.js:136 (3) [10, 20, 30]
// task6.js:138 true
// task6.js:140 false
// task6.js:142 25

// Task 10: Bonus Challenge
// 👉 Combine everything

let orders = [
  {id: 1, amount: 500, status: "delivered"},
  {id: 2, amount: 1500, status: "pending"},
  {id: 3, amount: 2000, status: "delivered"}
]
let revenue = orders
  .filter(o => o.status === "delivered")
  .reduce((acc,o) => acc + o.amount, 0);

console.log(revenue);

console.log(orders.filter(o => o.status === "pending"));

console.log(orders.some(o => o.amount > 1000));

let sortedOrders = orders.sort((a,b) => a.amount - b.amount);
console.log(sortedOrders);

// output:
// task6.js:162 2500
// task6.js:164 [{…}]0: {id: 2, amount: 1500, status: 'pending'}length: 1[[Prototype]]: Array(0)
// task6.js:166 true
// task6.js:169 (3) [{…}, {…}, {…}]0: {id: 1, amount: 500, status: 'delivered'}1: {id: 2, amount: 1500, status: 'pending'}2: {id: 3, amount: 2000, status: 'delivered'}length: 3[[Prototype]]: Array(0)