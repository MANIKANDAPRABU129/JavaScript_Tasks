// Task 4:
// 1. E-Commerce Discount System

function calculateDiscountedPrice(product,price){
    let finalPrice;

    if(price > 1000){
        finalPrice = price - (price * 0.20)
    }else{
        finalPrice = price - (price * 0.10)
    }
    // return ("Product: " + product + " Final Price: " + finalPrice);
    return `Product: ${product}\nFinal Price: ${finalPrice}`;
}
console.log(calculateDiscountedPrice("Shose", 2000));


// 2: Order Processing using Callback
 
function payment(amount){
    console.log(`Payment of ${amount} successfully.`);
}
function orderSuccess(){
    console.log("Order Delivered");
}
function placeOrder( callback){
    console.log("Order Placed ");
    callback(500);
    orderSuccess();
}
placeOrder(payment);

// 3.Employee Data Loop System

let employees = [
    {name: "Navi",
     salary: 50000  
    },
    {name: "Jhon",
     salary: 70000  
    }
];
for(let emp of employees){
    if(emp.salary > 60000){
        console.log(emp.name + " : High Salary");
   }else{
    console.log(emp.name + " : Low Salary")
   }
}


//4.Login Attempts (While Loop)
let correctPassword = "12345";
let attempts = 0;

while(attempts < 3){
    let input;
    
    if(attempts === 0){
        input = "012345"; // Simulating correct password on first attempt
    }else if(attempts === 1){
        input = "12345"; // Simulating correct password on second attempt
    }
    console.log("Attempt", attempts + 1);
    if(input === correctPassword){
        console.log("Login Success");
        break;
    }
   
    attempts++;
}

// 5.Coupon Generator (Generator Function)
function* couponGenerator(){
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let offers = couponGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

// 6.Shopping Cart Total (for...of)
 let cart = [100, 200, 300, 400];

    let total = 0;
    for(let price of cart){
        total += price;
    }
    console.log("Total Bill: " + total);     

// 7. User Profile System (for...in)

 let user = {
    name: "Navi",
    role: "Developer",
    location: "India"
};
for (let key in user){
    console.log(key + ": " + user[key]);
}

// 8. Factory Pattern (Function Reuse)

function createPhone(){
    return "Phone";
}
function createBattery(){
    return "Battery";
}
function createCharger(){
    return "Charger";
}   
console.log("Your Order: " , createPhone() , "+ " + createBattery() , " + " + createCharger());

//  9. College Form with Default Values

function collegeForm(name,age,dept = "Not Assigned"){
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Department: " + dept);
}
collegeForm("manikandaprabu", 20);

// 10.Currying - EMI Calculator
function curryingEmi(p){
    return function(r){
        return function(t){
            return (p * r * t) / 100;
        }
    }
}
console.log(curryingEmi(10000)(2)(12));  

// 11.Even/Odd Analyzer

for(let i = 1; i <= 10; i++){
    if(i % 2 === 0){
        console.log(i + " -> Even");
    }else{
        console.log(i + " -> Odd");
    }
}

// /12. Function Scope Debugging
// Concepts: var, let, const
// 👉 Ask students:

// Why var works outside block?
//var is function scope it can used outside {} within the function.

// Why let/const fails?
// let is block scope value can be changed re-assign allowed.
// const is block scope value cannot be changed no re-assign.

// 13.: Real-Time Alert System (IIFE)
(function(){
    console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();

// 14. Marks Calculator with Return

function marks(a,b,c){
    let total = a + b + c;
    let average = total / 3;
    return { total, average };
}
let result = marks(80, 90, 70);
console.log("Total: " + result.total);
console.log("Average: " + result.average);

// 15.Retry Offer System (Generator + Condition)

function* offerSystem(){
  yield "10% OFF";
  yield "20% OFF";
}
let data = offerSystem();

console.log(data.next());
console.log(data.next());
console.log(data.next());

if(data.next().done){
  console.log("All offers expired");
}


// 1 to 15 tasks are completed successfully.
// output is also correct.

//Product: Shose
// Final Price: 1600

// task4.js:26 Order Placed 
// task4.js:20 Payment of 500 successfully.
// task4.js:23 Order Delivered

// task4.js:46 Navi : Low Salary
// task4.js:44 Jhon : High Salary

// task4.js:62 Attempt 1
// task4.js:62 Attempt 2
// task4.js:64 Login Success

// task4.js:79 10% OFF
// task4.js:80 20% OFF
// task4.js:81 Free Delivery
// task4.js:82 Cashback

// task4.js:91 Total Bill: 1000

// task4.js:101 name: Navi
// task4.js:101 role: Developer
// task4.js:101 location: India

// task4.js:115 Your Order:  Phone + Battery  + Charger

// task4.js:120 Name: manikandaprabu
// task4.js:121 Age: 20
// task4.js:122 Department: Not Assigned

// task4.js:134 2400

// task4.js:142 1 -> Odd
// task4.js:140 2 -> Even
// task4.js:142 3 -> Odd
// task4.js:140 4 -> Even
// task4.js:142 5 -> Odd
// task4.js:140 6 -> Even
// task4.js:142 7 -> Odd
// task4.js:140 8 -> Even
// task4.js:142 9 -> Odd
// task4.js:140 10 -> Even

// task4.js:159 🔥 Flash Sale: 50% OFF on Shirts

// task4.js:171 Total: 240
// task4.js:172 Average: 80

// task4.js:182 {value: '10% OFF', done: false}
// task4.js:183 {value: '20% OFF', done: false}
// task4.js:184 {value: undefined, done: true}
// task4.js:187 All offers expired