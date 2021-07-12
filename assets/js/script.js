var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");
var saveButton = document.getElementById("initialsSave");
var startingMinutes = 5;
let time = startingMinutes * 60;

var countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 500);

function updateCountdown() {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--; 
}

var questions = [
    {
        q: 'What is HTML?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What of these is NOT a programming language?',
        choices: ["Java","Ruby","Python","Banana"],
        answer:4
    },
    {
        q: 'What symbols are used to make up the Python language?',
        choices: ["Arabic","Emojis","Words","Muffins"],
        answer:3
    },
    {
        q: 'Which of these do NOT run using a computer program?',
        choices: ["Airplane","Bicycle","Car","Rocket"],
        answer:2
    },
    {
        q: 'People who write computer code are called ______?',
        choices: ["Cryptographers","Professors","Diarmuids","Programmers"],
        answer:4
    },
    {
        q: 'What word describes the set of instructions that computers need to do work?',
        choices: ["Program","Synopsis","Menu","Blueprint"],
        answer:1
    },
];

var currentQ = 0;
var score = 0;
var initials = document.getElementById("initials");
var results = document.getElementById("userInput");
var buttons = document.getElementById("btn btn-secondary");

//Hide Display
questionContainer.style.display = "none";
results.style.display = "none";

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    questionContainer.style.display = "block";
    displayQuestion();
});

button1.addEventListener("click", displayAnswer);
button2.addEventListener("click", displayAnswer);
button3.addEventListener("click", displayAnswer);
button4.addEventListener("click", displayAnswer);

function displayQuestion(){
   question.innerText = questions[currentQ].q;
   button1.innerText = questions[currentQ].choices[0]
   button2.innerText = questions[currentQ].choices[1]
   button3.innerText = questions[currentQ].choices[2]
   button4.innerText = questions[currentQ].choices[3]
}

function displayAnswer() {
    // console.log(this.getAttribute("data-value"))
    if (this.getAttribute("data-value") === questions[currentQ].answer) {
        score++;
    } else {
    } if (currentQ < questions.length - 1) {
        currentQ++;
        displayQuestion();
    } else {
        questionContainer.style.display = "none";
        results.style.display = "block";
    }
};

var user = localStorage.getItem('name') || 'Anon';

document.querySelector('#initialsSave').addEventListener('click', function(e) {
    e.preventDefault();

    var userInput = document.querySelector('#name').value
    // console.log(userInput);

    localStorage.setItem('name', userInput);
});

document.querySelector('#greeting').textContent = 'Last submitted by ' + (user) + '.';

