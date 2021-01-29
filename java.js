const button = document.querySelector(".start");
const quizpage = document.querySelector(".quizbody");
const questionNum = document.querySelector(".questionheader");
const questions = document.querySelector(".questions");
const answer = document.querySelector("#answer");
const scores = document.querySelector("#highscores");
const timer = document.querySelector("#timer");


var questions = [
    {
        question: "What does HTML stand for?",
        choice: ["Hover Typo Makeup Letters", "Heavy Text Markup Leverage", "Hyper Text Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which does not belong",
        choice: ["Java", "Fire", "Python"],
        answer: "Fire"
    },
    {
        question: "The action of doing something over and over again, repeating code",
        choice: ["Repeat", "Program", "Loop"],
        answer: "Loop"
    },
    {
        question: "An error, or mistake, in a program that prevents the program from being run correctly",
        choice: ["Bug", "Glitch", "Lemon"],
        answer: "Bug"
    },
];



var questionIndex = 0;
var correctCount = 0;
var time = 15;
var intervalId;

function startQuiz (){
    time = 15
    timer.innerHTML = time;
    


  }