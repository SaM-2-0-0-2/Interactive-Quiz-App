const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn')
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizSection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const resultBox = document.querySelector('.result-box');
const tryAgainBtn = document.querySelector('.tryAgain-btn');
const goHomeBtn = document.querySelector('.goHome-btn');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

exitBtn.onclick = () => {
    popupInfo.classList.remove('active');
    main.classList.remove('active');
}

tryAgainBtn.onclick = () => {
    clearInterval(timer);
    quizBox.classList.add('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 0;
    userScore = 0
    showQuestions(questionCount);
    questionCounter(questionNumb);

    headerScore();
}
 
goHomeBtn.onclick = () => {
    clearInterval(timer);
    quizSection.classList.remove('active');
    nextBtn.classList.remove('active');
    resultBox.classList.remove('active');

    questionCount = 0;
    questionNumb = 0;
    userScore = 0
    showQuestions(questionCount);
    questionCounter(questionNumb);
}

continueBtn.onclick = () => {
    quizSection.classList.add('active');
    popupInfo.classList.remove('active');
    main.classList.remove('active');
    quizBox.classList.add('active');
    showQuestions(0);
    questionCounter(0);
    headerScore();
    startTimer();
}

let questionCount = 0;
let questionNumb = 0;
let userScore = 0;

const nextBtn = document.querySelector('.next-btn');
const optionList = document.querySelector('.option-list');

nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
        if (questionNumb == questions.length - 1) {
            nextBtn.textContent = "Finish"
        }
    } else {
        showResultBox();
    }

    nextBtn.classList.remove('active');
}

//To print HTML syntax characters properly
function escapeHTML(str) {
    return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

//getting questions and options from array
function showQuestions(index) {
    const questionText = document.querySelector('.question-text');
    const optionList = document.querySelector('.option-list');

    const q = questions[index];
    if (!q || !questionText || !optionList) return;

    questionText.textContent = `${q.numb}. ${q.question}`;

    const optionTag = `
    <div class="option"><span>${escapeHTML(q.options[0])}</span></div>
    <div class="option"><span>${escapeHTML(q.options[1])}</span></div>
    <div class="option"><span>${escapeHTML(q.options[2])}</span></div>
    <div class="option"><span>${escapeHTML(q.options[3])}</span></div>
  `;

    optionList.innerHTML = optionTag;

    const option = document.querySelectorAll('.option');
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute('onclick', 'optionSelected(this)');
    }
}

function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;

    if (userAnswer == correctAnswer) {
        answer.classList.add('correct');
        userScore++;
        headerScore();
    } else {
        answer.classList.add('incorrect');

        //if incorrect answer is selected, auto-selection of correct answer
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute('class', 'option correct');
            }
        }
    }

    //if user has selected, disabled all options
    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add('disabled');
    }

    nextBtn.classList.add('active');
}

function questionCounter(index) {
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent = `${questions[index].numb} of 30`;
}

function headerScore() {
    const headerScoreText = document.querySelector('.header-score');
    headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
    clearInterval(timer);
    quizBox.classList.remove('active');
    resultBox.classList.add('active');

    const scoreText = document.querySelector('.score-text');
    scoreText.textContent = `Your Score ${userScore} out of ${questions.length}`;

    const circularProgress = document.querySelector('.circular-progress');
    const progressValue = document.querySelector('.progress-value');
    let progressStartValue = -1;
    let progressEndValue = Number(((userScore / questions.length) * 100).toFixed(2));;
    let speed = 20;

    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressEndValue}%`;
        circularProgress.style.background = `conic-gradient(#ff03c0 ${progressEndValue * 3.6}deg, rgba(255, 255, 255, 0.1) 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed)
}

let timer;
let timeLeft = 15 * 60;

function startTimer() {
    const timerElement = document.querySelector('.quiz-timer');

    clearInterval(timer);
    timeLeft = 15 * 60;

    timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        timerElement.textContent =
            `⏱️ ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (timeLeft <= 60) {
            timerElement.classList.add('warning');
        }

        // Time over → auto submit
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuizDueToTimeout();
        }
        timeLeft--;
    }, 1000);
}

function submitQuizDueToTimeout() {
    quizBox.classList.remove('active');
    showResultBox();
}