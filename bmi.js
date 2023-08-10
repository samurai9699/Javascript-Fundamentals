let lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;

if(lovescore > 100){
  console.log("your love score is" + ' ' + lovescore + ' ' + "you both deserve each other.")
}
 else{
  console.log("your love score is" + ' ' + lovescore + ' ' + "you both are not compatible.")
 }
// console.log("your love score is" + ' '+ lovescore);  


function bmiCalculator(weight, height) {
  var bmi = weight / (height * height);
  var interpretation;

  if (bmi < 18.5) {
    interpretation = "Your BMI is " + bmi.toFixed(0) + ", so you are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    interpretation = "Your BMI is " + bmi.toFixed(0) + ", so you have a normal weight.";
  } else {
    interpretation = "Your BMI is " + bmi.toFixed(0) + ", so you are overweight.";
  }

  return interpretation;
}