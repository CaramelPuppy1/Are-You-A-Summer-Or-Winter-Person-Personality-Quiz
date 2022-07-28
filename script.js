/*Storing Summer and Winter Scores*/
var summerScore = 0;// Store the Summer score
var winterScore = 0; // Store the Winter score
var questionCount =0;

/*Storing HTML Elements Using DOM*/
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

// Listen for click on answer buttons and call function if clicked
q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", summer);

q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);

// Track winter person score and check if quiz is complete
function winter() {
  winterScore += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " winterScore = " + winterScore);
  

if (questionCount == 3) {console.log("The quiz is done!")
  updateResult();
 }  
}

  
// Track summer person score and check if quiz is complete
function summer() {
  summerScore += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " summerScore = " + summerScore);
  

  if (questionCount == 3) {console.log("The quiz is done!")
  updateResult();
 }  
}

// Update quiz result

function updateResult(){
if (winterScore >= 2) {
  result.innerHTML = "You are a Winter Person!";
  console.log("You are a Winter Person!");
} else if (summerScore >= 2) {
  result.innerHTML = "You are a Summer Person!";
console.log("You are a Summer Person!");
}
function updateResult() {
 displayResult.addEventListener("click", display);
}
}
//disable button

q1a1.addEventListener("click", disableBtn1);
q1a2.addEventListener("click", disableBtn1);

q2a1.addEventListener("click", disableBtn2);
q2a2.addEventListener("click", disableBtn2);

q3a1.addEventListener("click", disableBtn3);
q3a2.addEventListener("click", disableBtn3);

function disableBtn1() {
document.getElementById("q1a1").disabled = true; document.getElementById("q1a2").disabled = true;
}
  
function disableBtn2() {
document.getElementById("q2a1").disabled = true;
document.getElementById("q2a2").disabled = true;
}
  
function disableBtn3() {
document.getElementById("q3a1").disabled = true;
document.getElementById("q3a2").disabled = true; 
} 

function enableBtn() {
document.getElementById("q1a1").disabled = false;
document.getElementById("q1a2").disabled = false;
  
document.getElementById("q2a1").disabled = false;
document.getElementById("q2a2").disabled = false;
  
document.getElementById("q3a1").disabled = false;
document.getElementById("q3a2").disabled = false;
}

//restart//
var Restart = document.getElementById ("restart"); 

Restart.addEventListener("click", restartQuiz);

function restartQuiz(){
  summerScore = 0;
  winterScore = 0;
  questionCount = 0;
  
  result.innerHTML = ("You are...");


enableBtn();
}




