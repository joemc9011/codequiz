const timerEl = document.querySelector(".timer");
const questionEl = document.querySelector(".questionheader");
const choicesEl = document.querySelector(".choices");
const scores = document.querySelector("#highscores");
const button = document.querySelector(".start");


var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hover Typo Makeup Letters", "Heavy Text Markup Leverage", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which does not belong",
        choices: ["Java", "Fire", "Python"],
        answer: "Fire"
    },
    {
        question: "The action of doing something over and over again, repeating code",
        choices: ["Repeat", "Program", "Loop"],
        answer: "Loop"
    },
    {
        question: "An error, or mistake, in a program that prevents the program from being run correctly",
        choices: ["Bug", "Glitch", "Lemon"],
        answer: "Bug"
    },
];

var questionIndex = 0;
var correctCount = 0;
var time =  15;
var intervalId;


function start() {
    time--;
  timerEl.textContent = time;
  if (time <= 0) {
    endQuiz();
  }
}

function renderQuestion() {
  
  if (time == 0) {
    start();
    return;
  }

  intervalId = setInterval(start, 1000);
  
  questionEl.textContent = questions[questionIndex].question;

  choicesEl.innerHTML = "";
  answerEl.innerHTML = "";

  var choices = questions[questionIndex].choices;
  var choicesLenth = choices.length;

  for (var i = 0; i < choicesLenth; i++) {
    var questionListItem = document.createElement("li");
    questionListItem.textContent = choices[i];
    choicesEl.append(questionListItem);
  }
}

function nextQuestion() {
  questionIndex++;
  if (questionIndex === questions.length) {
    time = 0;
  }
  renderQuestion();
}

function checkAnswer(event) {
  clearInterval(intervalId);
  if (event.target.matches("li")) {
    var answer = event.target.textContent;
    if (answer === questions[questionIndex].answer) {
        answerEl.textContent = "Correct";
      correctCount++;
    } else {
        answerEl.textContent = "Incorrect";
      time = time - 2;
      timerEl.textContent = time;
    }
  }
  setTimeout(nextQuestion, 2000);
}

renderQuestion();
choicesEl.addEventListener("click", checkAnswer);
