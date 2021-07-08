var startBtn = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var question = document.getElementById("question");
var button = document.getElementById("option1");
var button = document.getElementById("option2");
var button = document.getElementById("option3");
var button = document.getElementById("option4");


//Hide Display
questionContainer.style.display = "none";

startBtn.addEventListener("click", function() {
    startBtn.style.display = "none";
    questionContainer.style.display = "block";

}
);
// var questions = [
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
//     {
//         q: 'Is the sky blue?',
//         a: true
//     },
// ]

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