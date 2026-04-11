// Task - 5
//  1: E-commerce Cart System


let cart1 = [
  {name: "Shirt", price: 500},
  {name: "Shoes", price: 1500}
]

let cart2 = [
  {name: "Watch", price: 2000}
]

let mergecard = [...cart1,...cart2]
mergecard.push({name: "Bag", price: 800})
mergecard.pop()

let totalPrice = 0;
for(let item of mergecard){
    totalPrice += item.price
}
console.log(mergecard);
console.log("Total Price: " + totalPrice);

// 2: User Profile Management

let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
}

let update = {
  role: "Developer",
  salary: 50000
}
let updatedUser = {...user,...update}
// console.log(updatedUser);
let {name, role, salary} = updatedUser
console.log(`${name} is now a ${role} earing ${salary}`);

//3: Function with Rest Operator (Team Score System)

function teamScore(teamName,...scores){
    console.log("Team: " + teamName);
    console.log("Scores: " + scores);

    let total = 0;
    for(let score of scores){
        total += score;
    }
    console.log("Total Score: " + total);

    let highest = Math.max(...scores);
    console.log("Highest Score: " + highest);

}
teamScore("Royal Challengers Bengaluru", 50, 65, 45, 100);

// 4: Nested Data Extraction (API Response Simulation)
let apiData = {
  user: {
    name1: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
}
let {user: {name1, address: {city, pincode}}} = apiData;
console.log(`${name1} live in ${city} - ${pincode}`);

// 5: Array Dashboard (Admin Panel)
 let users = ["A", "B", "C", "D", "E"];

 users.splice(2,2,"X","Y");
    console.log(users);

    let firstThree = users.slice(0,3);
    console.log(firstThree);

    let check = users.includes("B");
    console.log(check);

    let index = users.indexOf("E");
    console.log(index);
 
// 6: Data Cleaning Tool
    
let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"]

let flatData = messyData.flat(Infinity).filter(item => item !== null && item !== undefined);
console.log("Clean Array:",flatData);

//7: Sorting Bug Fix (Real Industry Issue ⚠️)

let prices = [1000, 200, 50, 5000]
prices.sort((a,b) => a - b);
console.log(prices);

//8: Analytics Report Generator
let orders = [
  {id:1, amount:100},
  {id:2, amount:200},
  {id:3, amount:300}
]
let totalAmount = orders.reduce((total, order) => total + order.amount, 0);
console.log("Total Revenue: " + totalAmount); 
let averageAmount = totalAmount / orders.length;
console.log("Average Order Value: " + averageAmount);   

//9: Inventory System (Advanced)
let team1 = ["CSK","RCB"]
let team2 = ["MI"]

team1.push("KKR")   
console.log("Add iteams:", team1);

team1.pop()
console.log("Remove iteams:", team1);

team1.splice(1,1,"SRH")
console.log("Update iteams:", team1);

let searchTeam = team1.includes("SRH");
console.log("includes:", searchTeam);

let finalteams = [...team1,...team2]
console.log("Merge inventory:", finalteams);

// 10: Interview Level Challenge 🔥

function processData(...data){
  let flatArr = data.flat(Infinity)

  let unique = [...new Set(flatArr)]

  let sorted = unique.sort((a,b)=>a-b)
  return sorted
}
let result = processData(1,2,[3,4],[5,[6]])
console.log(result)


// output

// (3) [{…}, {…}, {…}]0: {name: 'Shirt', price: 500}1: {name: 'Shoes', price: 1500}2: {name: 'Watch', price: 2000}length: 3[[Prototype]]: Array(0)
// task5.js:23 Total Price: 4000
// task5.js:40 Naveen is now a Developer earing 50000
// task5.js:45 Team: Royal Challengers Bengaluru
// task5.js:46 Scores: 50,65,45,100
// task5.js:52 Total Score: 260
// task5.js:55 Highest Score: 100
// task5.js:71 Naveen live in Bangalore - 560001
// task5.js:77 (5) ['A', 'B', 'X', 'Y', 'E']
// task5.js:80 (3) ['A', 'B', 'X']
// task5.js:83 true
// task5.js:86 4
// task5.js:93 Clean Array: (6) [1, 2, 3, 4, 5, 'hello']
// task5.js:99 (4) [50, 200, 1000, 5000]
// task5.js:108 Total Revenue: 600
// task5.js:110 Average Order Value: 200
// task5.js:117 Add iteams: (3) ['CSK', 'RCB', 'KKR']
// task5.js:120 Remove iteams: (2) ['CSK', 'RCB']
// task5.js:123 Update iteams: (2) ['CSK', 'SRH']
// task5.js:126 includes: true
// task5.js:129 Merge inventory: (3) ['CSK', 'SRH', 'MI']
// task5.js:142 (6) [1, 2, 3, 4, 5, 6]