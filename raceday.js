let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

const registeredEarly = true;
const registeredLate = true;
const age = 20;
const child = 17;
if(registeredEarly && age){
  console.log(raceNumber+=1000);
}
else{
  console.log('return home');
}

if(registerdEarly && age){
  console.log(`you will race at 9:30am ${raceNumber}`);
}
else if(registeredLate && age){
  console.log(`you wil race at 11:00 am ${raceNumber}`);
}
else if(child){
 console.log(`you will race at 12:30am ${raceNumber}`);
}
else{
  console.log('see the registration desk');
}