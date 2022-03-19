// DOT NOTATION

// ACTIVITY
// Have a go at logging a grid to the console
// The long way:
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log("   |   |   ");

// Slightly shorter...
// console.log("   |   |   \n   |   |   \n   |   |   ");
// console.log("-----------");
// console.log("   |   |   \n   |   |   \n   |   |   ");
// console.log("-----------");
// console.log("   |   |   \n   |   |   \n   |   |   ");

// --------------------------------------------------------------------------------------------------------------------------------


// Extra Activities
// console.log("Lisa")
// console.log("44")
// console.log("Libra")

// Use a string method
// The replace() method replaces a specified value with another value in a string
// const p = "The quick brown fox jumps over the lazy dog"
// console.log(p.replace('dog', 'unicorn'))

// display the 8th character of this sentence
// console.log("All around the world".charAt(7))
// // The charAt() method returns the character at a specified index (position) in a string.

// // display the 8th character of this sentence in uppercase.
// console.log("All around the world".charAt(7).toUpperCase());

// Use a number method
//The tostring() method returns a number as a string
// let x = 123;
// console.log(x.toString())

// // convert a date to a number
// Number(new Date("1970-01-01"))
// console.log(new Date)

// --------------------------------------------------------------------------------------------------------------------------------

// VARIABLES

// ACTIVITY 1
// Create a program that stores someone's name, age and favourite colour and log it to theconsole in a 
// complete sentence using template literals.


// let firstName = "Lisa";
// let age = 44;
// let favColor = "blue";

// console.log(`Hi, my name is ${firstName}, my age is ${age} and my favourite colour is ${favColor}`);

// STRETCH
// Update all of your variables and write out a new sentence.

// let firstName = "Lisa";
// let age = 44;
// let favColor = "blue";

// console.log(`Hi, my name is ${firstName}, my age is ${age} and my favourite colour is ${favColor}`);

// firstName = "Maddie"
// age = 30;
// favColor = "red";

// console.log(`Hi, my name is ${firstName}, my age is ${age} and my favourite colour is ${favColor}`);

// ------------------------------------------------------------------------------------------------------------------------------------

// ACTIVITY 2
// Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.

// let breakfast = "porridge";
// let lunch = "a healthy shake";
// let dinner = "salmon and vegetables";

// console.log(`Today I will be eating ${breakfast} for breakfast, ${lunch} for lunch and for dinner I will be having ${dinner}`);

// STRETCH
// Update each of these variables to what you will eat tomorrow. Log these to the console.

// breakfast = "toast and peanut butter";
// lunch = "soup";
// dinner = "fish and chips";

// console.log(`Tomorrow I will be eating ${breakfast} for breakfast, ${lunch} for lunch and for dinner I will be having ${dinner}`);

// -------------------------------------------------------------------------------------------------------------------------------------

// ACTIVITY 3 
// Create a program that calculates the number of days from today to your birth date.
// Hint - look for 'Javascript Date' on MDN.

// Suggested answer Activity 3
// const birthDay = new Date("2022,11,05")
// const todaysDate = new Date("2022, 02, 15");
// let diffInTime = birthDay.getTime() - todaysDate.getTime()
// let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24)); 
// console.log(`The difference between ${todaysDate} and ${birthDay} is ${diffInDays} days.`);
// console.log(`Your birthday is in: ${diffInDays} days.`)

// After conducting research, the method provided in the sample answer seemed to be the simplest way to complete the task.
// The Date object is a built-in object in JavaScript that stores the date and time. It provides a number of built-in methods for 
// formatting and managing that data. Date methods allow you to get and set the year, month, day, hour, minute, second, and millisecond.
// Date and time method - new Date (year, month, day)
// .getTime method returns the numeric value of the specified date as the number of milliseconds since Jan 1st 1970 00:00:00 UTC

// My answer
// const birthDay = new Date("2022, 09, 28")
// const today = new Date("2022, 03, 18");
// let timeBetween = birthDay.getTime() - today.getTime()
// let diffInDays = Math.floor(diffInTime / (1000 * 3600 * 24));
// console.log(`The difference between ${today} and ${birthDay} is ${diffInDays} days.`);
// console.log(`Your birthday is in: ${diffInDays} days.`)
// -------------------------------------------------------------------------------------------------------------------------------------

// ACTIVITY 4
// Create 9 variables: space 1, space 2... space9.
// Assign either the value 'x', 'o', '', to each of these varaibles.
// Insert the variables into your board using the ${varName} syntax and 
// and make it look the grid displayed in the Variables PDF.

// let space1 = "X";
// let space2 = "O";
// let space3 = " ";
// let space4 = "X";
// let space5 = "X";
// let space6 = " ";
// let space7 = "O";
// let space8 = " ";
// let space9 = " ";

// console.log("   |   |   ");
// console.log(` ${space1} | ${space2} | ${space3}`)
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log(` ${space4} | ${space5} | ${space6}`);
// console.log("   |   |   ");
// console.log("-----------");
// console.log("   |   |   ");
// console.log(` ${space7} | ${space8} | ${space9}`);
// console.log("   |   |   ");

// A more advanced answer would use arrays

// -------------------------------------------------------------------------------------------------------------------------------------

// IF ELSE

// Activity 1
// Create a variable called age. Write an if statement that logs "Yes I can serve you" if the age is greater than 17 and else logs 
// "You aren't old enough!"

// let age = 16;
// let country = "America";

// if (age > 17) {
//     console.log ("Yes, I can serve you");
// }
// else {
//     console.log("You aren't old enough.");
// }

// // Stretch
// Take your if statement and add a variable called country in.

// if (age > 17 && country == "America") {
//     console.log ("Yes, I can serve you");
// }
// else {
//     console.log("You aren't old enough.");
// }

// -----------------------------------------------------------------------------------------------------------------------------------

// Activity 2
// Create a variable for any pizza topping.
// Create a switch statement, if the topping is one of your favourite ingredients, log to the console 
// "These are important ingredients for my pizza." If you don't mind having pepperoni for example log to the 
// console "I don't mind having ${topping} on my pizza."
// Finally, for any topping you don't like log "${topping} should not be on a pizza."

// let topping = "mushrooms";

// switch(topping) {
//     case "mushrooms":
//     case "extra cheese":
//         console.log("These are important ingredients for my pizza!");
//         break;
//     case "pepperoni":
//     case "olives":
//         console.log(`I don't mind having ${topping} on my pizza. `);
//         break;
//     default:
//         console.log(`${topping} should not be on a pizza!`);
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// Activity 3
// Create a variable called password.
// Check how many letters are in the password. If there are less than 8, log to the console that the password is too short. 
// Otherwise log the password to the console.

// let password = "28091977";

// if (password.length < 8){
//   console.log("This password is too short.");
// } else {
//   console.log(`Your new password is ${password}`);
// }

// ------------------------------------------------------------------------------------------------------------------------------------

// Activity 4
// Create a variable called num.
// Check if the variable is divisible by 3 or 5. It is is, log "This number is divisible by 3 or 5".
// Otherwise log something else.

// let num = 60;

// if (num % 3 == 0){
//   console.log("This number is divisible by 3.")
// } else if (num % 5 == 0){
//   console.log("This number is divisible by 5.");
// }
// else {
//   console.log("This number is not divisible by 3 or 5");
// }


// Activity 5
// Create a variable called num.
// If num is divisible by 3 log "fizz" to the console, if it's 
// divisible by both 3 and 5 log "fizz buzz" to the console.
// Otherwise log num to the console.

// let num = 25;

// if (num % 3 == 0) {
//   console.log("fizz.")
// } 
// else if (num % 3 == 0 && num % 5 == 0) {
//   console.log("This number is divisible by 3 and 5.");
// }
// else {
//  console.log(num);
// }

// Activity 6 
// Create a variable called num.
// Check if the number is a palindrome e.g. 1001.

// suggested answer

// let num = 7261;
// let numString = num.toString(); 
// .tostring converts a number to a string
// let reverseNumString = numString.split('').reverse().join('');
// splits the number (7,2,6,1), reverses the order (1,6,2,7), and joins it to form a string (1627).

// if (num == reverseNumString){
//     console.log(`Yes ${num} is a palindrome`)
// } else {
//     console.log(`No ${num} is not a palindrome`)
// }

// My answer
// After doing some research I found a way to do the task using a while loop

// let rev = 0;
// let num = 123;
// let lastDigit;

// while(num != 0){
// 	lastDigit = num % 10;
//   rev = rev * 10 + lastDigit;
//   num = Math.floor(num/10);
// }

// console.log("Reverse number : "+rev);
// if (rev == num){
//     console.log(`Yes ${num} is a palindrome`)
// }
// else {
//     console.log(`No ${num} is not a palindrome`)
// }

// --------------------------------------------------------------------------------------------------------------------------------

// Activity 7 
// Create a variable called time, a variable called placeOfWork
// and a variable called townOfHome. Create an if statement 
// that logs to the console where someone is at times of the 
// day. E.g. if the time is 7 I'm at home, at 8 I'm commuting, 
// at 9 I'm at work.

// let time = 7;
// let placeOfWork = "Manchester"
// let townOfHome = "Liverpool"

// if (time == 8){
//   console.log(`I am currently commuting to work in ${placeOfWork}`);
// } else if (time == 7){
//   console.log(`I am at currently relaxing at home in ${townOfHome}`);
// } else if (time == 9){
//   console.log(`I am currently at work in ${placeOfWork}`)
// } else {
//   console.log(`If it is between 9 and 5, I am at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// Activity 8 
// Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh 
// gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the index of a last
// vowel in the string.

// suggested answer

// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// // counter go through whole array using length as limiter
// for (let i = 0; i < vowelArr.length; i++){
// //  console.log(string.lastIndexOf(vowelArr[i]));
// // gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// // compares current index to find highest index
// if (index >= highestIndex ){
// // so new highestindex becomes index
//     highestIndex = index;
// // won't reach last two nums in vowelarray
//     lastVowel = vowelArr[i];
// }
// }
// // This logs the last Vowel to the console. 
// console.log(lastVowel); 
// // This line logs the index number of the last vowel. 
// console.log(highestIndex)

// My Answer
// After completing some research, I found another method that works
// let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
// let vowels =  ['a','e','i','o','u'];

// let arr = myString.split("").reverse(); // split string into array, and reverse it
// let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e))

// if(indexOfLastVowelInReverse != -1) { // if the index is -1 there is no vowel in the string
//   let index = myString.length-1-indexOfLastVowelInReverse
//   console.log(`Last vowel found at index ${index}: ${myString[index]}`)
// }


// ---------------------------------------------------------------------------------------------------------------------------------

// Activity 9 
// Create a variable called word that takes a string. Create an if
// statement that checks if the last letter is the first. If it is 
// return true, otherwise return false.

// The charAt() method returns the character at a specified index (position) in a string.
// The index of the first character is 0. The index of the last character is -1.

// let word = "LISA";
// if (word.charAt(0) == word.charAt(word.length-1)){
//   console.log("True")
// } else {
//   console.log("False")
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// Activity 10 
// Create two variables called num1 and num2.
// Create an if statement that checks if the result of the sum is 
// even. If it is return the number, otherwise return the numbers
// multiplied together.

// let num1 = 3;
// let num2 = 3;
// let sum = num1 + num2;

// if (sum % 2 == 0){
//   console.log(`The sum = ${sum} and is even.`)
// } else {
//   console.log(`${num1 * num2}`)
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// ARRAYS

// CLASS ACTIVITY

// let songList = [
//     "SOS - Abba",
//     "One and only - Chesney Hawkes",
//     "My way - Frank Sinatra"
// ]

// console.log(songList);

// songList.push("YMCA - Village People");
// songList.push("Run to you - Bryan Adams");
// console.log(songList);

// songList.pop();
// console.log(songList);

// songList.splice(1,0, "My Universe - Coldplay");
// // this inserts at index 1 and the second value means how many items to be removed.

// LOOPS

// Activity 1 
// Create an array that lists your favourite films, up to 5 elements.
// Add 2 more using a method.
// Use a loop to cycle through the array.

// let favFilms = [
//     "Some like it hot",
//     "Psycho",
//     "Dirty Dancing",
//     "Shawshank Redemption",
//     "All about Eve"
// ]
// console.log(favFilms);

// favFilms.push("The Shining");
// favFilms.splice(1,0, "Alien");
// console.log(favFilms);

// for(let i = 0; i < favFilms.length; i++){
//     console.log(favFilms[i]);
// }

// -------------------------------------------------------------------------------------------------------------------------------------

// Activity 2 
// Generate 6 random numbers between 1-50 and log them to the console. 

// this is the long way to print 6 random numbers between 1 and 50
// console.log(Math.floor(Math.random()*50)+1);
// console.log(Math.floor(Math.random()*50)+1);
// console.log(Math.floor(Math.random()*50)+1);
// console.log(Math.floor(Math.random()*50)+1);
// console.log(Math.floor(Math.random()*50)+1);
// console.log(Math.floor(Math.random()*50)+1);

// this prints 6 random numbers between 1 and 50
// let num = []
// for (let i = 0; i < 6; i++){
    // console.log(Math.floor(Math.random()*50));
// }

// Alternative answer generates random between 1 and 50, +1 elimates 0.
// let num = 0;

// for (i = 0; i < 6; i++){
//   num = Math.floor(Math.random() * 50) + 1; 
//   console.log(num);
// }

// ---------------------------------------------------------------------------------------------------------------------------------

// Activity 3 
// If we can create a loop to put 0-9 on the screen, how can we count from 9-0? Create a program that does this.

// for(let i = 9; i >=0; i--) {
//     console.log(i)
// }

// --------------------------------------------------------------------------------------------------------------------------------


// Activity 4 
// display 4 films in an array. Use a for loop to show each film in the array.
// Use an if statement to check if the 3rd film in the array is Ghostbusters.
// If it is, return "Yay it's Ghostbusters." If it isn't return "Boo!
// We want Ghostbusters!"

// let films = [
//     "Some like it hot",
//     "Psycho",
//     "Dirty Dancing",
//     "Shawshank Redemption",
// ]
// console.log(films);

// // use a for loop to show each film in the array.
// for(let i = 0; i < films.length; i++) {
//     console.log(films[i]);
// }

// use an if statement to check if the 3rd film in the array is Ghostbusters.
// if it is, return "Yay it's Ghostbusters". If it isn't return "Boo! We want Ghostbusters!"
// if(films[2]=="ghostbusters") {
//     console.log("Yay it's Ghostbusters");
// }
// else {
//     console.log("Boo! We want Ghostbusters!");
// }

// -------------------------------------------------------------------------------------------------------------------------------------


// Activity 5 
// Generate a random number between 1 and 30 six times.
// For each random number generated, check if this number is divisible by 7 or not.
// Log out a message to the console if it is divisible by 7 or not.

// This generates a random number between 1 and 30 six times.
// let num = []
// for (let i = 0; i < 6; i++){
//     console.log(Math.floor(Math.random()*30));
// }

// if/else statements check if the number is divisible by 7.

// let num = []

// for (let i = 0; i < 6; i++) {
//     let randomNum = Math.floor(Math.random()* 30);

//     if (randomNum % 7 == 0) {
//         num.push(`${randomNum} is divisible by 7!`)
//     } 
//     else {
//         num.push(`${randomNum} not divisible by 7`)
//     }
// }

// console.log(num)

// --------------------------------------------------------------------------------------------------------------------------------------

// Activity 6
// Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. Make sure there are 2 names that are in both arrays.
// Using a nested loop iterate over both arrays and console.log the matching follower.
// A nested loop is a loop that runs inside another loop.
// for (initialization; cond; increment/decrement)
// {
// for(initialization; cond; increment/decrement)
// {
// statements to be executed inside inner loop.
// }
// statements to be executed inside outer loop
// }

// let bobsFollowers = ["Lisa", "Sammi", "Ian", "Michael"];
// let hannahsFollowers = ["Lisa", "Sammi", "Myles", "Chris"];

// for(i = 0; i < bobsFollowers.length; i++)
// {
//     for(j = 0; j < hannahsFollowers.length; j++)
//     {
//         if (bobsFollowers[i] == hannahsFollowers[j])
//         {
//             console.log(`The matching follower is: ${bobsFollowers[i]}`)
//             }
//         }
// }


// -------------------------------------------------------------------------------------------------------------------------------------

// Activity 7 
// Research do...while loops, find out about the difference between for loop, while loop and do...while. 
// Give an example of each. What are the pros and cons?

// The do...while statement creates a loop that executes a specified statement until the test condition
// evaluates to false. The condition is evaluated after executing the statement, resulting in the specified 
// statement executing at least once, e.g.,

// let result = '';
// let i = 0;

// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);

// console.log(result);
// expected result: "12345"

// The for statement creates a loop that consists of three optional expressions, enclosed in parentheses 
// and separated by semicolons, followed by a statement (usually a block statement) to be executed 
// in the loop, e.g.,

// let str = '';

// for (let i = 0; i < 9; i++) {
//   str = str + i;
// }

// console.log(str);
// expected output: "012345678"

// We use for loops when we know how many times we want to loop through.

// The while statement creates a loop that executes a specified statement as long as the test condition 
// evaluates to true. The condition is evaluated before executing the statement, e.g.,

// let n = 0;

// while (n < 3) {
//   n++;
// }

// console.log(n);
// // expected output: 3

// we use while loops when we want to run the loop an unlimited number of times.

// ------------------------------------------------------------------------------------------------------------------------------------

// FUNCTIONS

// Activity 1 
// Take this code and turn it into arrow function syntax:

// function factorial (n) {
//     if((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// Arrow function
// const factorial = (n) => {
//     if((n === 0) || (n === 1)) {
//         return 1;
//     }
//     else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

// -----------------------------------------------------------------------------------------------------------------------------------

// Activity 2 
// Edit the below snippet to include two parameters and a running order count updated when the function is called.

// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
// }
// takeOrder("pineapple");

// MY ANSWER
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log("Your order number is", orderCount)
//     console.log(`Pizza with ${topping1} and ${topping2} coming right up!`);
//     orderCount++;
// }

// takeOrder("mushrooms","pepperoni");
// takeOrder("extra cheese","olives");
// takeOrder("prawns", "peppers");

// ------------------------------------------------------------------------------------------------------------------------------------

// Activity 3 
// Cash machine time! Let's create one that:
//> Dispenses cash if your pin number is correct and your balance is equal to, or more than, the amount you're trying to withdraw!

// FIRST ANSWER
// let pin = 1234;
// let balance = 500;
// const cashOut = (pinNum, amount) => {
//     if(pin == pinNum && amount <= balance) {
//         console.log("That is correct. Enjoy your money!");
//     }
//     else {
//         console.log("Your pin number is incorrect. Try again!");
//     }
    
// }
// cashOut (5678, 200);

// SECOND ANSWER using template literals.
// let pin = 1234;
// let balance = 500;
// const cashOut = (pinNum, amount) => {
//     if(pin == pinNum && amount <= balance) {
//         console.log(`That is correct. You have withdrawn ${amount}. Enjoy your money!`);
//     }
//     else {
//         console.log("Your pin number is incorrect. Try again!");
//     }
            
// }
// cashOut (1234, 200);

// a more advanced version would update the balance...

// ------------------------------------------------------------------------------------------------------------------------------------
        
// Objects

// ACTIVITY IN CLASS
// Alarm task: Let's create an alarm.
// Create a key called weekendAlarm, with a value saying "no alarm needed" and a key called weekdayAlarm, with
// a value saying "get up at 7am."
// Create a variable called day and one called alarm.
// If day is Saturday or Sunday, set alarm to weekendAlarm.
// If day is a weekday, set alarm to weekdayAlarm.

// let day = "Saturday";

// const alarmClock = {
//     weekendAlarm: "No alarm needed",
//     weekdayAlarm: "Get up at 7am"
// };
// if(day == "Saturday" || day == "Sunday"){
//     alarm = alarmClock.weekendAlarm;
//     console.log(`Hello Lisa: ${alarm}`)

// }
// else {
//     alarm = alarmClock.weekdayAlarm;
//     console.log(`Hello Lisa: ${alarm}`)

// }

// ------------------------------------------------------------------------------------------------------------------------------------


// Activity 1 
// Let's edit our person object to include..
// A function called sayHi and when it's called, it should return
// Hello my name is ${this.name}""

// const person = {
//     name: "Lisa",
//     age: 44,
//     favSongs: [
//         "My way - Frank Sinatra",
//         "YMCA - Village People",
// ],
        
//     sayHi: () => {
//     return "Hello my name is ${this.name}";
//     }
// };
    
// console.log(person.sayHi());

// -----------------------------------------------------------------------------------------------------------------------------------

// Activity 2
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a
// string saying [Your Pet Name] is eating/drinking.

// FIRST VERSION
// const pet = {
//     name: "Pussy Galore",
//     typeOfPet: "cat",
//     age: 2,
//     color: "black and white",
//     sheEats: () => {
//         return "Pussy Galore is eating.";
//     },
//     sheDrinks: () => {
//         return "Pussy Galore is drinking.";
//     }
// };
// console.log(pet.sheEats());
// console.log(pet.sheDrinks());

// SECOND VERSION with template literals:
// const pet = {
//     name: "Pussy Galore",
//     typeOfPet: "cat",
//     age: 2,
//     color: "black and white",
    
//     sheEats: () => {
//         return `${pet.name} is eating.`;
//     },
//     sheDrinks: () => {
//         return `${pet.name} is drinking.`;
//     }
// };
// console.log(pet.sheEats());
// console.log(pet.sheDrinks());

// ------------------------------------------------------------------------------------------------------------------------------------

// Activity 3
// Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices and methods 
// called drinksOrdered and foodOrdered. They should return a string saying [Your order] is... with all items chosen with costs and total costs.

// BASIC VERSION without the maths:

// const coffeeShop = {
//     branch: "myLocal",
//     drinks: [
//         ["Coffee", 1.50],
//         ["Tea", 1.25],
//         ["Milkshake", 3.00]],
//     food:   [ 
//         ["Sausage sandwich", 4,50],
//         ["Cheese panini", 3.00],
//         ["Chocolate brownie", 3.50]
//     ],

//     drinksOrdered: () => {
//         return "Your drinks order is..."
//     },
//     foodOrdered: () => {
//         return "Your food order is..."
//     }
// }
// console.log(coffeeShop.drinksOrdered());
// console.log(coffeeShop.foodOrdered());

// Using the suggested answer to help me

// Arrays created for drinksOrder and foodOrder
// drinksOrder = [     
//     "Americano",
//     "Milkshake"
// ]
// foodOrder = [
//     "Cheese panini",
//     "Chocolate brownie"
// ]
// coffeeshop object created with arrays for drinks, food and their prices
// coffeeShop = {
//     branch : "Mylocal",
//     drinks : [
//         "Americano",
//         "Espresso", 
//         "Cappuccino", 
//         "Milkshake", 
//         "Tea"
//     ],
//     drinkPrices : [
//         1.50,
//         2,
//         3,
//         3.50,
//         1.25
//     ],
//     food: [
//         "Sausage sandwich",
//         "Cheese panini",
//         "Chocolate brownie",
//         "Carrot cake"
//     ],
//     foodPrices: [
//         4.50,
//         3,
//         3.50,
//         4
//     ],

// Function for drinkOrder - uses a nested for loop to check through the drinks and drinksOrder arrays. The if statement asks if the items on the 
// drinks order are present on the drinks list then add them to the drinksBill.
//     drinksOrdered() {
//         drinksBill = []
//         for (let i = 0 ; i < drinksOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.drinks.length; j++) {
//                 if (drinksOrder[i] == coffeeShop.drinks[j]){
//                     drinksBill.push(j)
//                 }
                
//             }
//         }
    
// This section adds up the drinks items and returns the drinks total
//         console.log('------------------')
//         console.log(`Your drinks order is:\n`)
//         sum = 0
//         for (l = 0; l < drinksBill.length; l++) {
//             console.log(`${coffeeShop.drinks[drinksBill[l]]} ${coffeeShop.drinkPrices[drinksBill[l]]}`)
//             sum += coffeeShop.drinkPrices[drinksBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//         },

// Function for foodOrder - uses a nested for loop to check through the food and foodOrder arrays. The if statement asks if the items on the 
// food order are present on the food list then add them to the foodBill.
    
//     foodOrdered() {
//         foodBill = []
//         for (let i = 0 ; i < foodOrder.length ; i++) {
//             for (let j = 0; j < coffeeShop.food.length; j++) {
//                 if (foodOrder[i] == coffeeShop.food[j]){
//                     foodBill.push(j)
//                 }
                
//             }
//         }
    
// This section adds up the food items and returns the food total
//         console.log('------------------')
//         console.log(`Your food order is:\n`)
//         sum = 0
//         for (l = 0; l < foodBill.length; l++) {
//             console.log(`${coffeeShop.food[foodBill[l]]} ${coffeeShop.foodPrices[foodBill[l]]}`)
//             sum += coffeeShop.foodPrices[foodBill[l]]
//         }
//         console.log('------------------')
//         console.log(`Total: £ ${sum} \n`)
//         return(sum)
//     }
    
// }
// This sections adds the drinks total to the food total to produce a final total.

// let foodSum = coffeeShop.foodOrdered()
// let drinkSum = coffeeShop.drinksOrdered()
// console.log(`Grand Total: £ ${foodSum + drinkSum}`)


// ----------------------------------------------------------------------------------------------------------------------------------





