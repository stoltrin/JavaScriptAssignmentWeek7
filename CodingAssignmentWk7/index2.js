// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

let ages = [3,9,23,64,2,8,28,93]; //NOTE - I added 52 as the final number to ensure this worked programatically
let firstElement = ages[0];
let lastElement = ages[ages.length - 1];

// Add a new age to your array

ages.push(60)
console.log("Ages: ", ages);

let difference = (ages) => ages[ages.length - 1] - ages[0]; //function that is subtracting the first value of the array from the last value
console.log('Difference of Ages 0 & -1: ', difference(ages)); // displaying difference of ages of the array

// create loop to iterate through the array and calculate average ages

let sum = 0;

// iterate over each item in the array
for (let i = 0; i < ages.length; i++ ) {
  sum += ages[i];
}

console.log('Sum of Ages: ', sum) // displaying the sum of all elements in ages added together

let AverageAge = sum / ages.length; // declaring average age as the sum of the array elements divided by the amount of elements within the array
console.log("Average Age: ", AverageAge) //Displaying average age

// second array of names start
// Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let totalLetters = 0
//Use a loop to iterate through the array and calculate the average number of letters per name
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
console.log("Total Letters per Name: ", totalLetters)

let averageLettersPerName = totalLetters / names.length;
console.log("Average Letters Per Name: ", averageLettersPerName)
// Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

let concatenatedNames = ""; // empty string same as declaring sum as 0
for (let i = 0; i < names.length; i++) {
    concatenatedNames += names[i] + " ";
}
console.log(concatenatedNames);
//REVIEW -  How do you access the last element of any array?
// arrayName[arrayName.length - 1]
//REVIEW - How do you access the first element of any array?
// arrayName[0]


//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times.

let repeatWord = (word, n) => word.repeat(n); // repeat word function n = number

//NOTE - order is important with parameters

// word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

console.log(repeatWord('Hello ', 3)); // repeating hello 3 times

// Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
const firstName = 'Trinity'; // setting variable trinity
const lastName = 'Stolworthy'; // setting variable stolworthy

let createFullName = (firstName, LastName) => `${firstName} ${LastName}`; // concatenating firstName variable and lastName variable together
console.log(createFullName(firstName, lastName)); // Displaying first name and last name to console

// Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
// For example:

// let names = ["Kelly", "Sam", "Kate"];    // starting with this array
// let nameLengths = [5, 3, 4];             // create a new array

// Create a new array called nameLengths.

let names2 = ["Kuvo", "Clifford", "Franky", "Stewie", "Pumpkin", "Bug", "Angel"]
let nameLengths = [4,8,6,6,7,3,5]
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let concatenatedNames2 = ""; // empty string same as declaring sum as 0
for (let i = 0; i < names2.length; i++) {
    concatenatedNames2 += names2[i] + " ";
}
console.log(concatenatedNames2); // displaying all names in array

const array3 = names2.concat(nameLengths); // concatenating names 2 with name lengths

console.log(array3); //Displaying array3 in console
// Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
for (let i = 0; i < array3.length; i++){
    sum += array3[i];
}
console.log('Sum of Array3: ', sum);

// Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function generateRandomArray() {
    let auxArray = [];   
    let randomLength = Math.floor(Math.random()*100);
    for(let i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
    return auxArray;
}

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

//REVIEW -  I created this function generateRandomArray because of the problem of having to create an obsurd amount of arrays for this assignment, and also so that I can truly see if my code is working to calculate the averages programmatically.

let myStupidArray = generateRandomArray();
console.log("MyStupidArray: ", myStupidArray);

console.log('random math', Math.random()*100)

function sumOfArray (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum > 100;
}
console.log("Is the Sum of myStupidArray > 100: ", sumOfArray(myStupidArray)); //!SECTION END OF FIRST RANDOM GENERATED ARRAY

//!SECTION SECOND RANDOM GENERATED ARRAY
function generateRandomArrayTwo() {
    let auxArray = [];   
    let randomLength = Math.floor(Math.random()*100);
    for(let i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
    return auxArray;
}
let myWeirdArray = generateRandomArrayTwo();
console.log("MyWeirdArray: ", myWeirdArray);

function calculateAverage(array) {
    if (array.length === 0) {
        return 0; 
    }

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}
console.log("Average of myWeirdArray: ", calculateAverage(myWeirdArray));
console.log("Average of myStupidArray: ", calculateAverage(myStupidArray))

//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function compareAverageofArrays(array1, array2) {
    array1Average = calculateAverage(array1);
    array2Average = calculateAverage(array2);
    if(array1Average > array2Average) {
        return true;
    } else {
        return false;
    }
}

console.log("Is the Average of myStupidArray > the Average of myWeirdArray: ", compareAverageofArrays(myStupidArray, myWeirdArray))


//NOTE - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

// Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

// Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

// Write a function called willBuyDrink
// takes a boolean isHotOutside and a number moneyInPocket
let isHotOutside = true;
let moneyInPocket = 10;
function willBuyDrink (temp, money){
// Return true ifHotOutside && if moneyInPocket is > 10
if (temp === true && money > 10.50){
    console.log('Will buy drink.');
} else {
    console.log('Will not buy drink.')
}
}
console.log(willBuyDrink(isHotOutside, moneyInPocket));