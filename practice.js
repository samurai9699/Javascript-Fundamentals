var currentTime = 10;
console.log(currentTime > 9 && currentTime < 17);

var currentTime = 7;
console.log(currentTime < 9 || currentTime > 17);

var petHungry = true;
petHungry = !petHungry;
console.log(petHungry); 

console.log(36 % 8);

console.log(1 + "2");

var score = 8;
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
      console.log("work on a project");
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
        console.log("bronze medal")
        break;
        default:
        console.log(i);
    }
}