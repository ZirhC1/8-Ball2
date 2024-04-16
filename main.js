//start

//8 BALL VARAIBALES
let question = document.getElementById("Ball-question");
let output = document.getElementById("Question-btn");
let ballOutput = document.getElementById("Ball-output");

//EVENT LISTENER
document
  .getElementById("Question-btn")
  .addEventListener("click", QuestionEntered);

function QuestionEntered() {
  //inputs and question responses

  let randNum = Math.random();
  if (question.value == "") {
    ballOutput.innerHTML = "Please ask a question...";
  } else if (
    question.value == "Does a magic 8 ball actually work?".toLowerCase()
  ) {
    ballOutput.innerHTML = "How dare you doubt me!!";
  } else if (question.value == "Is Java Script awesome?".toLowerCase()) {
    ballOutput.innerHTML = "Of course!!";
  } else if (randNum < 0.2) {
    ballOutput.innerHTML = "Without a doubt";
  } else if (randNum < 0.4) {
    ballOutput.innerHTML = "As I see it, yes.";
  } else if (randNum < 0.6) {
    ballOutput.innerHTML = "Concentrate and ask again.";
  } else if (randNum < 0.8) {
    ballOutput.innerHTML = "Don't count on it";
  } else if (randNum < 0.1) {
    ballOutput.innerHTML = "Outlook not so good.";
  }
  console.log(ballOutput);
  console.log(question.value);
}
