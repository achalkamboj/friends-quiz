var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question(" What is your name? ");

console.log("Welcome " + userName);
var yesorno = readlineSync.question("Do you know Achal? ");

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer)
  {console.log("right!");
  score = score + 1;}
  else
  {console.log("wrong!");}

  console.log("current Score:  ", score);
  console.log("--------------------");
}



var questions = [ {
  question : "What is Achal's age? " ,
  answer : "19"
}, {
  question : "Where does Achal live? ",
  answer : "Ajmer"
},{
  question : "What is the name of Achal's School? ",
  answer : "St. Anselms"
},{
  question : "What is the name of Achal's college? ",
  answer : "SRM"
},{
  question : "Who is Achal's Best Friend? ",
  answer : "Brownie"
}];

for(var i=0;i<questions.length;i++)
{
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer);
}