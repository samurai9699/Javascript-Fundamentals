 //INTRODUCTION TO JAVASCRIPT
 
/*Data types 
null
boolean
symbol
number
object
string
*/


console.log('sam'+ ' ' +'rai'); //prints the word sam and rai since its been assigned to space

console.log('software'.length); //prints the amount of letters within the specified string

console.log('engineer'.toUpperCase()); //prints the string in uppercase format
 
console.log('javascript'.startsWith('j')); //prints true/false if the string does start with j

console.log(Math.random()); //prints a random number betweeen 0 & 1

console.log(Math.random()* 50); //prints a random number betweeen 0 & 50

console.log(Math.floor(Math.random()* 50)); //prints a random WHOLE number between 0 & 50

console.log(Math.ceil(43.2)); //prints the smallest integer greater than or equal to the given number

console.log(Number.isInteger(19)); //checks if the given number is an integer


var myName = 'Samurai';                               var newNum = 20;
console.log(myName);                                  console.log(newNum);
//output:Samurai                                      //output:20



//the let keyword signals that the variable can be reassigned a different value
let meal = 'rice';                                   meal = 'chapo';
console.log(meal);                                   console.log(meal);
//output:rice                                         //output:chapo



let changeMe = true;                                 changeMe = false;
console.log(changeMe);                               console.log(changeMe);
//output:true                                        //output:false


//When using const variable you cannot reassign it otherwise you'll get a TypeError
const entree = 'Enchiladas';
console.log(entree);
//output:Enchiladas
 

//using mathematical operators to calculate new values & assign them to a variable
let levelUp = 10;                                            let powerLevel = 9001;                           
levelUp  +=5;                                                powerLevel -= 100;
console.log(levelUp);                                         console.log(powerLevel);
//output:15                                                  //output:8901


//Using the increment & decrement operator(by 1 in each case)
let gainedDollar = 3;                                  let lostDollar = 50;
gainedDollar++;                                         lostDollar--;
console.log(gainedDollar);                             console.log(lostDollar);
//output:4                                              //output:49


 
 //string concatenation with variables
let favoriteAnimal = 'cats';
console.log('My favorite animals are' + ' ' + favoriteAnimal);
//output:My favorite animal:cats


//String Interpolation
let myName = "Sam";
let myCountry = "Japan";

console.log(`My name is ${myName}. My favorite country is ${myCountry}.`);
//output:My name is Sam. My favorite country is Japan.


//data type of a variable's value
let newVariable = 'sam';                                    let doVariable = 1;
console.log(typeof newVariable);                            console.log(typeof doVariable);
//output: string                                            //output:number

 
//If Statement
let sal = true;

if(sal){
console.log('Time to buy!');
}
//output:Time to buy


//If Else Statement
let sale = false;

if(sale) {
console.log('Time to buy!');
}
else{
console.log('Time to wait for a sale.');
}
//output:Time to wait for a sale


//comparison Operators
let hungerLevel = 7;
if(hungerLevel > 7){
console.log('Time to eat!');
}
else{
console.log('We can eat later!');
}
//output:We can eat later


//Logical Operators(&&,||,!)
let mood = 'sleepy';
let tirednessLevel = 6;
if(mood === 'sleepy' && tirednessLevel>8){
  console.log('time to sleep');
}
else{
console.log('not bed time yet');
}
//output:not bed time yet


//TRUTH AND FALSY
let wordCount = 6;                                                             

if (wordCount) {
console.log("Great! You've started your work!");
} else {
console.log('Better get to work!');
}
//oputput:great! you've started your work

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
//output:This string is definitely empty



//Truthy & Falsy Assignment
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen'

console.log(`The ${writingUtensil} is mightier than the sword.`);
//output:The pen is mightier than the sword.

let toop = 'marker';
// Use short circuit evaluation to assign  writingUtensil variable below:
let writeUtensil = toop || 'pen'

console.log(`The ${writeUtensil} is mightier than the sword.`);
//output:The marker is mightier than the sword.



//Ternary Operator
let isLocked = false;
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}
isLocked? console.log('You will need a key to open the door.'):console.log('You will not need a key to open the door.')
//output:You will not need a key to open the door.


let favoritePhrased = 'Love That!';

if (favoritePhrased === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}
favoritePhrased === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
//output:I love that!



//Else if statement
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else {
  console.log('It\'s summer! Time to enjoy swimming.');
}
//output:Invalid season

let seasons = 'summer';

if (seasons === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} 
else if(seasons === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
}
else if(seasons === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
}
else if(seasons === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
}
else {
  console.log('Invalid seasons.');
}
//output:It\'s sunny and warm because it\'s summer!


//The Switch Keyword
let athleteFinalPosition = 'first place';
switch(athleteFinalPosition){
  case 'first place':
   console.log('You get the gold medal!');
   break;
   case 'second place':
     console.log('You get the silver medal!');
     break;
     case 'third place':
       console.log('You get the bronze medal!');
     break;  
     default:
       console.log('No medal awarded.');
       break;
}
//output:You get the gold medal!

 

//FUNCTION DECLARATION
getReminder();
 function getReminder(){
  console.log('Water the plants.');
 }
 //output:'water the plants.'


 //CALLING A FUNCTION
 function sayThanks(){
  console.log('Thank you for your purchase! We appreciate your business.');
}
sayThanks();
//output:Thank you for your purchase! We appreciate your business.


//Parameters & arguments
function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}
sayThanks('Cole');
//output:Thank you for your purchase Cole! We appreciate your business.


//DEFAULT PARAMETERS
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}


//RETURN
function monitorCount(rows,columns){
  console.log(rows * columns);
  return rows * columns;
}
const numOfMonitors = monitorCount(5,4);
console.log(numOfMonitors);
//output:20


//HELPER FUNCTIONS
function monitorCount(rows, columns) {
  return rows * columns;
}
function costOfMonitors(rows, columns){
 return monitorCount(rows, columns)*200;
}
const totalCost = costOfMonitors(5,4);
console.log(totalCost);
//print:4000


//FUNCTION EXPRESSION
const plantNeedsWater = function(day){
  if(day === 'Wednesday'){
    return true;
  }
  else{
    return false;
  }
};
plantNeedsWater('Tuesday')
console.log(plantNeedsWater('Tuesday'));
//print:false

//ARROW FUNCTION
const plantneedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } 
  else {
    return false;
  }
};



//CONCISE BODY ARROW FUNCTIONS
const plantWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
//To make it into a concise body, we would remove the parentheses, curly braces, and the return keyword:
const planWater = day => 
   day === 'Wednesday' ? true : false;
;



//BLOCKS & SCOPES
const city = 'New York City';
function logCitySkyline(){
  console.log(logCitySkyline());
 let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}



 
//GLOBAL SCOPE
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';
function callMyNightSky(){
  console.log(callMyNightSky());
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}




//BLOCK SCOPE
function logVisibleLightWaves(){
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}
logVisibleLightWaves()
console.log(lightWaves);
//output:REFERENCE ERROR since the variable is tied to the block scope of the function!



//SCOPE POLLUTION
//First practice
const satellit = 'The Moon';
const galax = 'The Milky Way';
let star = 'North Star';

const callMyNightSky = () => {
  star = 'Sirius';
	return 'Night Sky: ' + satellit + ', ' + star + ', ' + galax;
};

console.log(callMyNightSky());
 //output:Night Sky: The Moon, Sirius, The Milky Way

 //Second Practice
 const satelli = 'The Moon';
const gala = 'The Milky Way';
let sta = 'North Star';

const callMyNightSky = () => {
  sta = 'Sirius';
	return 'Night Sky: ' + satelli + ', ' + sta + ', ' + gala;
};

console.log(callMyNightSky());
console.log(stars);
//output:Night Sky: The Moon, Sirius, The Milky Way
//Sirius You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.



//PRACTICE GOOD SCOPING
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
   let lightWaves = 'Northern Lights';
   console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
//output:Northern Lights Moonlight



//CREATE AN ARRAY
const hobbies = ['sam', 'david', 'john'];
console.log(hobbies);
//output:[ 'sam', 'david', 'john' ]


//ACCESSING ELEMENTS
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
//output:Fortune favors the brave. Where there is love there is life



//UPDATE ELEMENTS
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList);
//output:[ 'bread', 'avocados', 'milk' ]

//ARRAYS WITH LET AND CONST
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
condiments[0] = 'Mayo';
console.log(condiments);
//output:[ 'Mayo', 'Mustard', 'Soy Sauce', 'Sriracha' ]




//THE .LENGHT PROPERTY
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);
//output:3


//THE .PUSH() METHOD
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('code', 'eat');
console.log(chores);
//print:[ 'wash dishes', 'do laundry', 'take out trash', 'code', 'eat' ]



//THE .POP() METHOD
const chore = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores.pop();
console.log(chore);
//print:[ 'wash dishes', 'do laundry', 'take out trash', 'cook dinner' ]



//MORE ARRAYS METHODS
//1.use of .shift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.shift();
console.log(groceryList);
//print:[ 'bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]

//2.use of .unshift()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList.unshift('popcorn');
console.log(groceryList);
//print:[ 'popcorn','orange juice','bananas','coffee beans','brown rice','pasta','coconut oil','plantains' ]

//3.use of .slice()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
console.log(groceryList.slice(1,4));
//print:[ 'bananas', 'coffee beans', 'brown rice' ]

//4.use of indexOf()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);
//print:4




//ARRAYS AND FUNCTIONS
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

function removeElement (newArr){
  newArr.pop();
}
removeElement(concept);
console.log(concept);
//print:[ 'arrays', 'can', 'be', 'MUTATED' ]        [ 'arrays', 'can', 'be' ]



//NESTED ARRAYS
const numberClusters = [[1,2], [3,4], [5,6]];
const target = numberClusters[2][1];
console.log(target);
//print:6


//LOOPS (REPEATING TASKS MANUALLY)
const vacationSpots = ['tokyo', 'dubai', 'korea'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);
//print:tokyo, dubai, korea



//THE FOR LOOP
for (let item = 5; item <11; item++){
  console.log(item);
}
//print: 5, 6, 7, 8, 9, 10


//LOOPING IN REVERSE
for (let counter = 3; counter >=0; counter--){
  console.log(counter);
}
//print:3, 2, 1, 0



//LOOPING THROUGH ARRAYS
const vacationSports = ['Bali', 'Paris', 'Tulum'];
for(let i=0; i<vacationSports.length; i++){
       console.log('I would love to visit ' + vacationSports[i]);
}
//print:I would love to visit Bali   I would love to visit Paris   I would love to visit Tulum



//NESTED LOOPS
let bobsFollowers = ['Joe', 'Marta', 'Sam', 'Erin'];
let tinasFollowers = ['Sam', 'Marta', 'Elle'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
  console.log(mutualFollowers);
    }
  }
};
//print:[ 'Marta' ] [ 'Marta', 'Sam' ]



//THE WHILE LOOP
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard = [];
currentCard = cards[Math.floor(Math.random() * 4)];

while ( currentCard != 'spade') {
  console.log(currentCard);
  
  currentCard = cards[Math.floor(Math.random() * 4)];
}
//print:diamond heart club




//DO WHILE STATEMENTS
let cupsOfSugarNeeded = 6;
let cupsAdded = 0; 
do{
  cupsAdded++;
} 
while(cupsAdded < cupsOfSugarNeeded){
  cupsAdded++;
};
console.log(cupsAdded);
//print:7




//THE BREAK KEYWORD
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i= 0; i < rapperArray.length; i++){
  if( i > 3){
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");
//print:Lil' Kim, Jay-Z, Notorious B.I.G., Tupac, And if you don't know, now you know.



//HIGHER ORDER FUNCTIONS
//FUNCTIONS AS DATA
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);
//PRINT:checkThatTwoPlusTwoEqualsFourAMillionTimes


//FUNCTIONS AS PARAMETERS
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
const checkA = val + 2; 
const checkB =  func(val)
if(checkA === checkB) {
   return func(val);
 } else{
    return 'inconsistent results';
  }
}

console.log(checkConsistentOutput(addTwo, 6));
//print:8



//USE OF .FOREACH()
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});
//PRINT:Picasso is one of my favorite artists. Kahlo is one of my favorite artists. Matisse is one of my favorite artists. Utamaro is one of my favorite artists.


//USE OF .MAP()
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);
//PRINT:[ 1, 4, 9, 16, 25 ]


//USE OF FILTER()
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
//PRINT:[ 5, 3.14, 100 ]


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length>7;
});
console.log(longFavoriteWords);
//print:[ 'nostalgia', 'hyperbole', 'esoteric' ]


//USE OF .findIndex()
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => animal === 'elephant');
console.log(foundAnimal);
//print:7


const animale = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const startsWithS = animale.findIndex(animal => {
return animal[0] === 's' ? true : false;
});
console.log(startsWithS);
//print:3




//use of .reduce() METHOD
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
} )
console.log(newSum);
//print:The value of accumulator:  1
//The value of currentValue:  3
//The value of accumulator:  4
//The value of currentValue:  5
//The value of accumulator:  9
//The value of currentValue:  7
//16



const newNumberse = [1, 3, 5, 7];
const newSume = newNumberse.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10)
console.log(newSume);
//print:
//The value of accumulator:  10
//The value of currentValue:  1
//The value of accumulator:  11
//The value of currentValue:  3
//The value of accumulator:  14
//The value of currentValue:  5
//The value of accumulator:  19
//The value of currentValue:  7
//26




//Iterator Documentation
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

console.log(words.some((word) => {
  return word.length < 6;
}));
const interestingWords = words.filter(function(word){ return word.length > 5 })

console.log(interestingWords.every(word => word.length > 5));
//print:true
//true


const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
//print:Have you visited Orlando?
//Have you visited Dubai?
//Have you visited Edinburgh?
//Have you visited Chennai?
//Have you visited Accra?
//Have you visited Denver?
//Have you visited Eskisehir?
//Have you visited Medellin?
//Have you visited Yokohama?
//CODECADEMY




//CREATING OBJECT LITERALS
let fasterShip = {
  'Fuel Type' : 'Turbo Fuel',
  color : 'silver'
};



//ACCESSING OBJECT PROPERTIES 
// 1. USE OF DOT NOTATION .
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;
const planetArray = spaceship.flightPath;


// 2. BRACKET NOTATION
let spaceshipp = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceshipp['Active Mission'];
console.log(spaceshipp[propName]);
//print:true




//PROPERTY ASSIGNMENT
let spaceshil = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceshil.color = 'glorious gold';
spaceshil.numEngines = 4;
delete spaceshil['Secret Mission'];


//METHODS
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.')
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

alienShip.retreat();
alienShip.takeOff();
//print:We no longer wish to conquer your planet. It is full of dogs, which we do not care for.  Spim... Borp... Glix... Blastoff!





//NESTED OBJECTS
let spaceshipe = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
 
 let capFave = spaceshipe.crew.captain['favorite foods'][0];

 spaceshipe.passengers = [{
    name: 'Space Cats'
}];

let firstPassenger =  spaceship.passengers[0]




//PASS BY REFERENCE
let spaceshipt = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

 let greenEnergy = obj => {
  obj['Fuel Type']= 'avocado oil';
}
 let remotelyDisable = objectParam => {
  objectParam.disabled = true;
};
 greenEnergy(spaceshipt);
remotelyDisable(spaceshipt);
console.log(spaceshipt);
//prints:{ 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }




//LOOPING THROUGH OBJECTS
let spaceshep = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

 
for(let crewMember in spaceshep.crew){
console.log(`${crewMember}: ${spaceshep.crew[crewMember].name}`);
}
//prints:captain: Lily  chief officer: Dan   medic: Clementine   translator: Shauna

for (let member in spaceshep.crew) {
console.log(`${spaceshep.crew[member].name}: ${spaceshep.crew[member].degree}`);
}
//prints:Lily: Computer Engineering  Dan: Aerospace Engineering  Clementine: Physics  Shauna: Conservation Science




//ADVANCED OBJECTS INTRODUCTION
//1.THE THIS KEYWORD
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};
console.log(robot.provideInfo());
//print: I am 1E78V2 and my current energy level is 100.


//2.ARROW FUNCTIONS AND THIS
const roboto = {
  energyLevel: 100,
  checkEnergy:() => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
};

roboto.checkEnergy();
//prints: undefined


//3. PRIVACY
const roboo = {
  _energyLevel: 'high', //was originally set as a number
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
console.log(roboo.recharge());
//print: Recharged! Energy is currently at high30%. undefined


//4.GETTERS
const rob = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){

  if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`;
    } else{
      return 'System malfunction: cannot retrieve energy level';
    };
  }
};

console.log(rob.energyLevel);
//print: My current energy level is 100


//5. Setters
const rolo = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,

  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

 set numOfSensors(num){
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

rolo.numOfSensors= 100;

console.log(rolo.numOfSensors);
//prints: 100


//6.FACTORY FUNCTIONS
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep: () => {
      console.log('Beep Boop')
    }
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();
//print: Beep Boop
 


//7.Property Value Shorthand
function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

const newRobot = robotFactory('P-501', false)
console.log(newRobot.model);
console.log(newRobot.mobile);
//print: P-501  false



//8. DESTRUCTURED ASSIGNMENT
const roli = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = roli;

functionality.beep();
//print: Beep Boop




//9. BUILT-IN OBJECT METHODS
const roki = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const rokiKeys = Object.keys(roki);

console.log(rokiKeys);

// Declare robotEntries below this line:
const rokiEntries = Object.entries(roki);

console.log(rokiEntries);

// Declare newRobot below this line:
const newRoki = Object.assign({laserBlaster: true, voiceRecognition: true}, roki);

console.log(newRoki);