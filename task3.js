// User Input

let name = prompt("Enter your name:");
let age = Number(prompt("Enter your age:"));
let monthlySalary = Number(prompt("Enter your monthly salary:"));
let loanAmount = Number(prompt("Enter your loan amount:"));

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Monthly Salary: ${monthlySalary}`);
console.log(`Loan Amount: ${loanAmount}`);

let salary = monthlySalary;

// Eligibility Check (Logical Operators)

if (age >=21 && age <= 60 && salary >= 25000){
    console.log("Eligible ");
}else{
    console.log("Not Eligible");
}

// EMI Calculation (Operators)

let emi = loanAmount;
 emi /= 12;
console.log(`EMI: ${emi}`);

// Loan Category (If-Else)

if (loanAmount > 500000){
    console.log("High loan amount");
}else if (loanAmount  > 200000){
    console.log("Medium loan amount");
}else{
    console.log("Low loan amount");
}

// Risk Level (Ternary Operator)

let risk = (salary > 50000) ? "Low risk" : "High risk";
console.log(`Risk level: ${risk}`);

// Customer Type (Switch)

switch (true) {
    case(emi > 40000):
        console.log("Premium Customer");
        break;

    case(emi > 20000):
        console.log("Standard Customer");
        break;

    default:
        console.log("Basic Customer");
}

// Type Conversion Check
console.log(`name: ${typeof name}`);
console.log(`age: ${typeof age}`);
console.log(`monthlySalary: ${typeof monthlySalary}`);
console.log(`loanAmount: ${typeof loanAmount}`);



// output

// Name: manikandaprabu
// task3.js:9 Age: 23
// task3.js:10 Monthly Salary: 40000
// task3.js:11 Loan Amount: 300000
// task3.js:18 Eligible 
// task3.js:27 EMI: 25000
// task3.js:34 Medium loan amount
// task3.js:42 Risk level: High risk
// task3.js:52 Standard Customer

// task3.js:60 name: string
// task3.js:61 age: number
// task3.js:62 monthlySalary: number
// task3.js:63 loanAmount: number