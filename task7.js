// Task - 7: 
// Task 1: Order System (setTimeout)
// 👉 Simulate a food order system

console.log("Order placed");

setTimeout(() => {
    console.log("Preparing food");
}, 2000);

setTimeout(() => {
    console.log("Food ready");
}, 4000);

setTimeout(() => {
    console.log("Delivered");
}, 5000);

// output:
// task7.js:5 Order placed
// task7.js:8 Preparing food
// task7.js:12 Food ready
// task7.js:16 Delivered

//Task 2: Digital Clock (setInterval)
// 👉 Build a live clock


let count = 0;
const clock = setInterval(() => {
    const time = new Date().toLocaleTimeString();
    console.log(time);
    count++;

    if (count === 10) {
        clearInterval(clock);
        console.log("Clock stopped");
    }
}, 1000);

// output:
// task7.js:5 Order placed
// task7.js:32 3:41:49 pm
// task7.js:8 Preparing food
// task7.js:32 3:41:50 pm
// task7.js:32 3:41:51 pm
// task7.js:12 Food ready
// task7.js:32 3:41:52 pm
// task7.js:16 Delivered
// task7.js:32 3:41:53 pm
// task7.js:32 3:41:54 pm
// task7.js:32 3:41:55 pm
// task7.js:32 3:41:56 pm
// task7.js:32 3:41:57 pm
// task7.js:32 3:41:58 pm
// task7.js:37 Clock stopped

//Task 3: Callback Hell Simulation

function loginUser(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 2000);
}
function getUserData(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 2000);
}
function getUserPosts(callback) {
    setTimeout(() => {
        console.log("User Posts Fetched");
    }, 2000);
}

loginUser(() => {
    getUserData(() => {
        getUserPosts();
    });
});

// output:
// task7.js:5 Order placed
// task7.js:32 3:45:11 pm
// task7.js:8 Preparing food
// task7.js:32 3:45:12 pm
// task7.js:62 User Logged In
// task7.js:32 3:45:13 pm
// task7.js:12 Food ready
// task7.js:32 3:45:14 pm
// task7.js:68 User Data Fetched
// task7.js:16 Delivered
// task7.js:32 3:45:15 pm
// task7.js:32 3:45:16 pm
// task7.js:74 User Posts Fetched
// task7.js:32 3:45:17 pm
// task7.js:32 3:45:18 pm
// task7.js:32 3:45:19 pm
// task7.js:32 3:45:20 pm
// task7.js:37 Clock stopped


//  Task 4: Fake API Promise
// 👉 Create your own Promise function

function getProducts() {
    return new Promise((resolve, reject) => {
        let success = true; 

        setTimeout(() => {
            if (success) {
                resolve(["Mobile", "Laptop", "Smartwatch"]);
            } else {
                reject("API Failed");
            }
        }, 2000);
    });
}

getProducts()

.then((data) => {

    console.log("Products:", data);
})
 .catch((error) => {
        console.log("Error:", error);
})
    .finally(() => {
        console.log("API call finished");
    });

    // final output
// task7.js:5 Order placed
// task7.js:32 3:49:23 pm
// task7.js:8 Preparing food
// task7.js:32 3:49:24 pm
// task7.js:62 User Logged In
// task7.js:126 Products: (3) ['Mobile', 'Laptop', 'Smartwatch']
// task7.js:132 API call finished
// task7.js:32 3:49:25 pm
// task7.js:12 Food ready
// task7.js:32 3:49:26 pm
// task7.js:68 User Data Fetched
// task7.js:16 Delivered
// task7.js:32 3:49:27 pm
// task7.js:32 3:49:28 pm
// task7.js:74 User Posts Fetched
// task7.js:32 3:49:29 pm
// task7.js:32 3:49:30 pm
// task7.js:32 3:49:31 pm
// task7.js:32 3:49:32 pm
// task7.js:37 Clock stopped




