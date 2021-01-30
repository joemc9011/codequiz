const timerEl = document.querySelector(".timer");
const questionEl = document.querySelector(".questionheader");
const choicesEl = document.querySelector(".choices");
const scores = document.querySelector("#highscores");
const questionbody = document.querySelector("#questionbod");
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
  button.setAttribute("class", "hide");
  questionbody.removeAttribute("class");

  timer = setInterval(countDown, 1000);

  timer.textContent = time;

  renderQuestion();
}

function countDown() {
    time--;
    timerEl.textContent = time;

    if (time <= 0) {
        stopQuiz();
    }
}

renderQuestion () {
    var  questionUp =questions[questionIndex];
    questionEl.textContent = questionUp.question;
}