const timerEl = document.querySelector(".timer");
const questionEl = document.querySelector(".questionheader");
const choicesEl = document.querySelector(".choices");
const scores = document.querySelector("#highscores");
const questionbody = document.querySelector("#questionbod");
const button = document.querySelector(".start");
const resultEl = document.querySelector(".result");


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

function renderQuestion() {
    var questionUp = questions[questionIndex];
    questionEl.textContent = questionUp.question;

    choicesEl.innerHTML = "";

    var choices = questions[questionIndex].choices;


    for (var i = 0; i < choices.length; i++) {
        var questionList = document.createElement("button");
        questionList.setAttribute("class", "btncolor");
        questionList.setAttribute("value", choice);
        questionList.textContent = choices[i];
        choicesEl.append(questionList);

        questionList.onclick = checkAnswer;


    };
}

function checkAnswer() {
    if (this.value !== questions[questionIndex].answer) {
        time -= 2;
        if (time < 0) {
            time = 0;
        }

        timerEl.textContent = time;
        resultEl.textContent = "Incorrect";

    } else {
        resultEl.textContent = "Correct";
        correctCount++;
    }
    setTimeout(nextQuestion, 500);
}

function nextQuestion() {
    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz();
    } else {
        renderQuestion();
    }

}

function endQuiz(){
    clearInterval(timer);
    scores.removeAttribute("class");
    questionbody.setAttribute("class", "hide");
    var name = prompt("Please enter your name");

    var highScores= localStorage.getItem("scores");
  
    if (!highScores) {
      highScores= [];
    } else {
      highScores= JSON.parse(highScores);
    }
  
    highScores.push({ name: name, score: correctCount });
  
    localStorage.setItem("scores", JSON.stringify(highScores));
  
    highScores.sort(function (a, b) {
      return b.score - a.score;
    });
  
    var scoresUL = document.createElement("ul");
  
    for (var i = 0; i < highScores.length; i++) {
      var contentLI = document.createElement("li");
      contentLI.textContent =
        "Name: " + highScores[i].name + " Score: " + highScores[i].score;
      scoresUL.appendChild(contentLI);
    }
  
    document.body.appendChild(contentUL);
  }

  button.onclick = start;