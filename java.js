const button = document.querySelector(".start");
const quizpage = document.querySelector(".quizbody");
const questionNum = document.querySelector(".questionheader");
const choicesEL = document.querySelector(".choices");
const answerEl = document.querySelector("#answer");
const scores = document.querySelector(".highscores");
const timerEl = document.querySelector("#timer");


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
var time = 3;
var intervalId;

function startQuiz() {
    time--;
    timer.textContent = time;
    
    function updateTime() {
        time--;
        timer.textContent = time
        if (time <= 0) {
            clearInterval(intervalId);
            endQuiz();
        }
    };

    intervalId = setInterval(updateTime, 1000);
    nextQuestion();

};

