var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var button1 = document.getElementById("option1");
var button2 = document.getElementById("option2");
var button3 = document.getElementById("option3");
var button4 = document.getElementById("option4");

var questions = [
    {
        q: 'What is HTML?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What is cssL?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What is HTML?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What is HTML?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What is HTML?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
        answer:1
    },
    {
        q: 'What is jsL?',
        choices: ["Hypertext Markup Language","HPml","sj","s"],
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
button1.addEventListener("click",displayAnswer);
button2.addEventListener("click",displayAnswer);
button3.addEventListener("click",displayAnswer);
button4.addEventListener("click",displayAnswer);

function displayQuestion(){
   question.innerText = questions[currentQ].q;
   button1.innerText = questions[currentQ].choices[0]
   button2.innerText = questions[currentQ].choices[1]
   button3.innerText = questions[currentQ].choices[2]
   button4.innerText = questions[currentQ].choices[3]
}

function displayAnswer() {
    console.log(this.getAttribute("data-value"))
    if (this.getAttribute("data-value") === questions[currentQ].answer) {
        score++;
    } else {

    }
    if (currentQ < questions.length - 1) {
        currentQ++;
        displayQuestion();
    } else {
        questionContainer.style.display = "none";
        results.style.display = "block";
    }
};



// // variable to keep track of score
// var score = 0;

// // iterate over the questions array and display each question in a confirmation box
// for (var i = 0; i < questions.length; i++) {
//     let answer = confirm(questions[i].q);

//     if (
//         (answer === true && questions[i].a === true) ||
//         (answer === false && questions[i].a === false) 
//     ) { 
//         alert('Correct!');
//         score++; 
//     } else {
//         alert('Wrong!');
//     }
// };

// alert('Final Score: ' + score);