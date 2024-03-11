let startSection = document.querySelector(".start-wrapper");
let quizSection = document.querySelector(".quiz-wrapper");
let startButton = document.querySelector(".start-button");
let quizHeading = document.querySelector(".question-heading");
let buttons = document.querySelectorAll(".answer-row > button");

let signs = ["-", "+"];

function startGame() {
    startSection.classList.add("hide");
    quizSection.classList.remove("hide");
    generateQuestion();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generateQuestion() {
    let number1 = getRandomInt(50);
    let number2 = getRandomInt(50);
    let sign = signs[getRandomInt(signs.length)];
    quizHeading.innerHTML = `${number1} ${sign} ${number2}`;
    generateAnswer();
}

function generateAnswer() {
    for (let i = 0; i < buttons.length; i += 1) {
        buttons[i].innerHTML = getRandomInt(100);
    }
}

for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener("click", generateQuestion);
}

startButton.addEventListener("click", startGame);