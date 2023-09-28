var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

let petHungry = true;
petHungry = !petHungry;
console.log(petHungry); 

console.log(36 % 8);

console.log(1 + "2");

let score = 8;
console.log("Mid-level skills;", score>0 && score<10);


var timeRemaining = 0;
var energy = 10;
console.log("Game over:", timeRemaining === 0 || energy === 0);


const now = "Now in";
const three = 3;
const d = "D!";
console.log(`${now} ${three}${d}`);


var i = 7;
i += 1;
i += 2;
console.log(i);



var age = 10;
if(age >= 65){
    console.log("You got your income from your pension");
}
else if(age <= 65 && age >= 18){
    console.log("Each month you got a salary");
}
else if(age < 18){
    console.log("You get an allowance");
}
else{
    console.log("The value of the age variable is not numerical");
}



var day = "Sunday";
switch (day){
    case "Sunday":
      console.log("Go to church");
       break;
       case "Monday":
      console.log("Do some coding");
       break;
       case "Tuesday":
      console.log("Do your chores");
       break;
       case "Wednesday":
      console.log("Work on a project");
       break;
       case "Thursday":
      console.log("Go do some community work");
       break;
       case "Friday":
      console.log("Take your cat for a walk and a vet visit");
       break;
       case "Saturday":
      console.log("Go for a swim");
       break;
       default:
        console.log("No such day exists");
}


 



for(var i = 1; i <= 5; i++){
    console.log(i);
}
console.log("countdown completed");



for(var i = 5; i >= 1; i--){
    console.log(i);
}
console.log("countdown completed");



var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log("Countdown is completed");


var i = 5;
while(i > 0){
    console.log(i);
    i--;
}
console.log("countdown completed");


var year = 2018;
while(year < 2024){
    console.log(year);
    year++;
}
console.log("present year");



for(var i = 1; i<= 10; i++){
    if(i === 1){
        console.log("Gold medal");
    }
    else if(i === 2){
        console.log("silver medal");
    }
    else if(i === 3){
        console.log("bronze medal");
    }
    else{
        console.log(i);
    }
}



for(var i = 1; i<=10; i++){
    switch(i){
        case 1:
        console.log("Gold medal");
        break;
        case 2:
        console.log("silver medal");
        break;
        case 3:
        console.log("bronze medal");
        break;
        default:
        console.log(i);
    }
}


function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i]);
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);



// Task 1:
// Write a function named letterFinder that accepts two parameters: word and match.

// Task 2:
// Code a 'for' loop inside the function's body. The for loop's counter should start at zero, increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

// Task 3:
// Add an if statement inside the for loop whose condition works as follows:

//  Access each of the letters inside the passed in word using the counter variable, with word[i]. 

// Check if the current word[i] is equal to the value of match.

// Task 4:
// console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

// Task 5:
// Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

// Task 6:
// Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".

function letterFinder (word, match){
    for(var i = 0; i < word.length; i++){
        if(word[i] === match){
            console.log('Found the', match, 'at', i)
        }
        else{
            console.log('--No match found at', i)
        }
    }
}

letterFinder("test" , "t");



var cat = {
    emotionalSupport: 10,
    playfulness: 10,
    hunger: 7,
    sleep: 7,
    discipline: 8
}
console.log(cat.emotionalSupport);


var house2 = {};
house2["rooms"] = 4;
house2['color']= "black";
house2["priceUSD"] = 12345;
console.log(house2); 


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "blue"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]]);
}


var anime = ["demon slayer", "black clover", "record of ragnarok"];
console.log(anime.length);

for(var i = 0; i < anime.length; i++){
    console.log(anime[i]);
}



var clothes = [];
clothes.push("durag", "sweatPants", "bandana", "shorts", "t-shirts");
clothes.pop();
clothes.push("anime-cloth");
console.log(clothes[2]);


var favCar = {};
favCar.color = "black";
favCar.covertible = false;
console.log(favCar);


var car = {
    mileage: 98765,
    color: "white",
    turnTheKey: function() {
        console.log("The engine is running");
    },
    lightsOn: function() {
        console.log("The lights are on.");
    }
};

console.log(car);

car.turnTheKey();
car.lightsOn();




try {
    // Code that might throw an error
    var result = someFunctionThatMayThrowAnError();
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}



function addTwoNums(a, b) {
    try {
        if (typeof a !== 'number') {
            throw new ReferenceError('the first argument is not a number');
        } else if (typeof b !== 'number') {
            throw new ReferenceError('the second argument is not a number');
        } else {
            console.log(a + b);
        }
    } catch (err) {
        console.log("Error!", err);
    }
}

addTwoNums(5, "5");
console.log("It still works");




function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2;
    var condition2 = typeof(match) == 'string' && match.length == 1;
    if(condition1 && condition2){
         for(var i = 0; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
     }
   }
   else{
       console.log("please pass correct arguments to function");
   }
}

letterFinder(1 , 9);
letterFinder("cat", "c");



var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false;
    }
}
console.log(virtualPet.sleepy); 
virtualPet.nap();
console.log(virtualPet.sleepy);



function addTwoNums(a, b) {
    console.log(a + b);
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber; 

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber());


var purchase2 = {
    shoes: 50,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:' + calculation);
    }
}
purchase2.totalPrice();


var purchase2 = {
    shoes: 60,
    stateTax: 1.5,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:' + calculation);
    }
}
purchase2.totalPrice();




class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect";
    }
}
var better = new WithDefaultParams();
better.calculate(); 



class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep() {
        this.energy += 10;
    }

    doSomethingFun() {
        this.energy -= 10;
    }
}



const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); 


const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3));


const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));



var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}




function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();




 
const car = {
    engine: true
}  
const sportsCar = Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object:", sportsCar);

for(prop in sportsCar){
    console.log('🤔', prop);
}

for(prop of Object.keys(sportsCar)){
    console.log('🎯', prop + ":" + sportsCar[prop]);
}


var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];
function logDairy() {
    for(let item of dairy){
        console.log(item);
    }
}
logDairy();


const animal = {
   canJump: true
  };
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;
    
  function animalCan() {
    for (prop in bird) {
        console.log(prop + ": " + bird[prop]);
    }
 }
animalCan();


const animal1 = {
     canJump: true
  };
    const bird = Object.create(animal1);
    bird.canFly = true;
    bird.hasFeathers = true;
        
   function birdCan() {
     for (key of Object.keys(bird)) {
         console.log(key + ": " + bird[key]);
    }
  }
birdCan();
    


//DATA STRUCTURES
// for each() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach((veggie, index) => {
    console.log(`${index}. ${veggie}`);
});

        
//filter() method It filters your arrays based on a specific test. Those array items that pass the test are returned.
const nums = [0, 10, 20, 30, 40, 50];

const filteredNums = nums.filter(num => num > 20);

console.log(filteredNums);


//map() method  is used to map each array item over to another array's item, based on whatever work is performed inside the function that is passed-in to the map as a parameter. 
const result = [0, 10, 20, 30, 40, 50].map(num => num / 10);

console.log(result);




const drone = {
    speed: 100,
    color: 'yellow'
};

const result = Object.keys(drone).map(key => [key, drone[key]]);

console.log(result);



let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);



const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);


//use of spread operator
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries);


const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop();
console.log(fruits1, "not", fruits2);



//use of Rest Operator
function calculateSum(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

const sum1 = calculateSum(5, 10, 15);
console.log(sum1); // Output: 30

const sum2 = calculateSum(2, 4, 6, 8, 10);
console.log(sum2); // Output: 30

const sum3 = calculateSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(sum3); // Output: 55



const grades = [75, 95, 90, 85, 80, 85];
let gradesSum = 0;

for (i = 0; i< grades.length; i++){
    gradesSum += grades[i]
}
console.log(gradesSum / grades.length);


var superHeroes = [ 'Iron Man' ]; 
for (prop of superHeroes) { 
    console.log(prop);
}
