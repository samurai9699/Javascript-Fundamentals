//Intermediate Javascript

// INTRODUCTION TO CLASSES
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  
  const halley = new Dog('Halley');
  console.log(halley.name);  
  console.log(halley.behavior);  
  halley.incrementBehavior();  
  console.log(halley.name); 
  console.log(halley.behavior);
 /* output:
 Halley
0
Halley
1*/    



//CONSTRUCTOR
class Surgeon{
    constructor(name, department){
       this.name = name;
       this.deparment = department;
    }
  }



//INSTANCE 
class Surgeon {
    constructor(name, department) {
      this.name = name;
      this.department = department;
    }
  }
  const surgeonRomer = new Surgeon('Francisco Romero', 'Cardiovascular');
  console.log(surgeonRomer.name, surgeonRomer.department);
   
  const surgeonJackso = new Surgeon('Ruth Jackson', 'Orthopedics');
  console.log(surgeonJackso.name, surgeonJackso.department);
/*output: Francisco Romero Cardiovascular
Ruth Jackson Orthopedics */  


//METHODS
class Surgeon {
  constructor(name, department, remainingVacationDays) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff){   //this is a method
    this._remainingVacationDays -=daysOff;
  }
}


//METHOD CLASSES
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name);
surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);
/* output: Francisco Romero
17 */


//INHERITANCE II
class HospitalEmployee{
  constructor(name){
   this._name = name;
   this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    this._remainingVacationDays -=daysOff;
  }
}


//INHERITANCE III
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);


//INHERITANCE IV
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
 constructor(name, certifications) {
   super(name);
   this._certifications = certifications;
 } 
}

const nurseOlynykk = new Nurse('Olynykk', ['Trauma','Pediatrics']);

 nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynykk.remainingVacationDays);
/* output: 15*/


//INHERITANCE V
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  } 
  get certifications(){
       return this._certifications;
  }
  addCertification(newCertification){
      this._certifications.push(newCertification);
  }
}

const nurseOlyny = new Nurse('Olyny', ['Trauma','Pediatrics']);
nurseOlyny.takeVacationDays(5);
console.log(nurseOlyny.remainingVacationDays);
 nurseOlyny.addCertification('Genetics');
 console.log(nurseOlyny.certifications);
/*output: 15
[ 'Trauma', 'Pediatrics', 'Genetics' ] */


//STATIC METHODS
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
  static generatePassword(){
    return Math.floor(Math.random() * 10000);
  }
}


//CONSTRUCTING A PROMISE OBJECT
const inventory = {
  sunglasses: 1200,
  pants: 1088,
  bags: 1344
};

const myExecutor= (resolve, reject) => {
  if(inventory.sunglasses > 0){
    resolve('Sunglasses order processed.');
  }
  else{
    reject('That item is sold out.');
  }
}

const orderSunglasses= () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();
console.log(orderPromise);



//THE NODE SETTIMEOUT() FUNCTION
console.log("This is the first line of code in app.js.");

// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
  console.log("i am a developer");
};
setTimeout(usingSTO, 2500);

// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");




//SUCCESS AND FAILURE CALLBACK FUNCTIONS
const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
}
const handleFailure= (rejectionReason) => {
  console.log(rejectionReason);
}
checkInventory(order).then(handleSuccess, handleFailure);




//USING CATCH() WITH PROMISES
/* include the whole code on success and failure callback functions */
checkInventory(order).then(handleSuccess).catch(handleFailure);


//CHAINING MULTIPLE PROMISES
const {checkInventory, processPayment, shipOrder} = require('./ku.js');

const orde = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
.then((resolvedValueArray) => {
  // Write the correct return statement here:
   return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  // Write the correct return statement here:
   return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
})
.catch((errorMessage) => {
  console.log(errorMessage);
});




//USING PROMISE.ALL()
const {checkAvailability} = require('./fin.js');

const onFulfill = (itemsArray) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.');
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags])
.then(onFulfill)
.catch(onReject);




//ASYNC AWAIT
const fs = require('fs');
const promisifiedReadfile = require('./promisifiedReadfile');
      
// Here we use fs.readfile() and callback functions:
fs.readFile('./file.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  let firstSentence = data;
  fs.readFile('./file2.txt',  'utf-8', (err, data)   => {
    if (err) throw err;
    let secondSentence = data;
    console.log(firstSentence, secondSentence);
  });
});

// Here we use native promises with our "promisified" version of readfile:
let firstSentence;
promisifiedReadfile('./file.txt', 'utf-8')
  .then((data) => {
    firstSentence = data;
    return promisifiedReadfile('./file2.txt', 'utf-8');
  })
  .then((data) => {
    let secondSentence = data;
    console.log(firstSentence, secondSentence)
  })
  .catch((err) => {console.log(err)});

// Here we use promisifiedReadfile() again but instead of using the native promise .then() syntax, we declare and invoke an async/await function:
async function readFiles() {
  let firstSentence = await promisifiedReadfile('./file.txt', 'utf-8');
  let secondSentence = await promisifiedReadfile('./file2.txt', 'utf-8');
  console.log(firstSentence, secondSentence);
}

readFiles();





//THE ASYNC KEYWORD
function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});


async function withAsync(num){
  if (num === 0){
      return 'zero';
    } else {
      return 'not zero';
    }
}

withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})




//THE AWAIT OPERATOR
const brainstormDinner = require('./woh.js');

// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}

// async/await version:
async function announceDinner() {
  // Write your code below:
   let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
}
announceDinner();

//writing async function
const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();





//HANDLING DEPENDENT PROMISES
const {shopForBeans, soakTheBeans, cookTheBeans} = require('./cook.js');

// Write your code below:
async function makeBeans(){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}
makeBeans();




//HANDLING ERRORS
const cookBeanSouffle = require('./din.js');

// Write your code below:
async function hostDinnerParty(){
  try{
    let dinner = await cookBeanSouffle();
   console.log(`${dinner} is served!`);
  }
  catch (error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}
hostDinnerParty();





//HANDLING INDEPENDENT PROMISES
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./lun.js');

// Write your code below:
async function serveDinner(){
  const vegetablePromise = steamBroccoli();
  const starchPromise = cookRice();
  const proteinPromise = bakeChicken();
  const sidePromise = cookBeans();
  console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}
serveDinner();





//AWAIT PROMISE.ALL()
let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./madel.js');

// Write your code below:
async function serveDinnerAgain(){
  const foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}
serveDinnerAgain();





//INTRODUCTION TO REQUESTS WITH ES6
// Element selectors
const jsonButton = document.querySelector('#generate');
const buttonContainer = document.querySelector('#buttonContainer');
const display = document.querySelector('#displayContainer');

// Text to populate button text on click
const collection = ["Another", "More", "Next", "Continue", "Keep going", "Click me", "A new one"];

// Asynchronous function
const generateJson = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
      changeButton();
    }
  } catch(error) {
    console.log(error);
  }
};
    
// Format returned promise data
const formatJson = (resJson) => {
  resJson = JSON.stringify(resJson);
  let counter = 0;
  return resJson.split('')
  .map(char => {
    switch (char) {
      case ',':
        return `,\n${' '.repeat(counter * 2)}`;
      case '{':
        counter += 1;
        return `{\n${' '.repeat(counter * 2)}`;
      case '}':
        counter -= 1;
        return `\n${' '.repeat(counter * 2)}}`;
      default:
        return char;
    }
  })
  .join('');
};

// Display formatted data
const renderResponse = (jsonResponse) => {
  const jsonSelection = Math.floor(Math.random() * 10);
  display.innerHTML = `<pre>${formatJson(jsonResponse[jsonSelection])}</pre>`;
};

// Change button text
const changeButton = () => {
  const newText = Math.floor(Math.random() * 7);
  jsonButton.innerHTML = `${collection[newText]}!`;
};

// Listen for click on button
jsonButton.addEventListener('click', generateJson);





//MAKING A GET REQUEST
// Information to reach API
const url = "https://api.datamuse.com/words?sl=";

// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// Asynchronous function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${wordQuery}`;
  
  fetch(endpoint, {cache: 'no-cache'}).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Request failed!');
  }, networkError => {
    console.log(networkError.message)
  })
}

// Clears previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);





//MAKING A POST REQUEST
// Information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  
	fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'apikey': apiKey
    },
    body: data
  })
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);






//MAKING AN ASYNC POST REQUEST
// information to reach API
const apiKey = '<Your API Key>';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// Asynchronous functions
// Code goes here
const shortenUrl = async () => {
	const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  try {
    const response = await fetch(url, {
			method: 'POST',
      body: data,
      headers: {
        'Content-type': 'application/json',
				'apikey': apiKey
      }
    });
		if(response.ok){
      const jsonResponse = await response.json();
      renderResponse(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
}

// Clear page and call Asynchronous functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);