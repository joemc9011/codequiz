const button = document.querySelector(".start");
const quizpage = document.querySelector(".quizbody");
const questionNum = document.querySelector(".questionheader");
const choicesEL = document.querySelector(".choicess");
const answerEl = document.querySelector("#answer");
const scores = document.querySelector("#highscores");
const timer = document.querySelector("#timer");


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
var time = 15;
var intervalId;

function startQuiz() {
    time = 15;
    timer.innerHTML = time;
    button.style.visibility = "hidden";
    

    function updateTime() {
        time--;
        if (time <= 0) {
            endQuiz();
        }
    };

    intervalId = setInterval(updateTime, 1000);

    };

    function renderQuestions (){

        questionEl.textContent = questions[questionIndex].question;

        choicesEl.innerHTML = "";
        answerEl.innerHTML = "";
    
        var choicess = questions[questionIndex].choicess;
        var choicessLenth = choicess.length;
    
        for (var i = 0; i < choicessLenth; i++) {
            var questionListItem = document.createElement("li");
            questionListItem.textContent = choicess[i];
            optionListEl.append(questionListItem);
    }
}

function nextQuestion () {
    questionIndex++;
    if (questionIndex === questions.length) {
        time = 0;
      }
      else {
        renderQuestion();

      }
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
        setTimeout(nextQuestion, 500);
      }