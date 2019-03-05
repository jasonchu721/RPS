var choiceOne = document.getElementById("choice-one");
var choiceTwo = document.getElementById("choice-two");
var choiceThree = document.getElementById("choice-three");

arrChoice = ["rock", "paper", "scissors"]

choiceOne.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer === "scissors")
     {alert ("Computer picked scissors, you win")}
  else if (randomAnswer === "paper")
    {alert ("Computer picked paper, you lose")}
    else
    {alert ("Computer picked rock, you lose")}
})

choiceTwo.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer == "rock")
     alert ("Computer picked rock, you win")
  else if (randomAnswer == "scissors")
    alert ("Computer picked scissors, you lose")
    else
    alert ("Computer picked paper, you lose")
})

choiceThree.addEventListener("click", function(){
  var randomAnswer = arrChoice[Math.floor(Math.random() * arrChoice.length)];
  if (randomAnswer == "paper")
    {alert ("Computer picked paper, you win")}
  else if (randomAnswer == "rock")
    {alert ("Computer picked rock, you lose")}
    else
    {alert ("omputer picked scissors, you lose")}
})




