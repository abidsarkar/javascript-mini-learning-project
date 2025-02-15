const questions = [
  //   question number 1
  {
    question: "Capital of Bangladesh?",
    answers: [
      
      {
        text: "Dhaka",
        correct: true,
      },
      {
        text: "Rangpur",
        correct: false,
      },
      {
        text: "Khulna",
        correct: false,
      },
      {
        text: "Borishal",
        correct: false,
      },
    ],
  },
  {
    //   question number 2

    question: "National Fish of Bangladesh?",
    answers: [
      {
        text: "Rui",
        correct: false,
      },
      {
        text: "Hilsha",
        correct: true,
      },
      {
        text: "cat Fish",
        correct: false,
      },
      {
        text: "Tuna",
        correct: false,
      },
    ],
  },
  {
    //   question number 3

    question: "How many color in Bangladeshi national flag?",
    answers: [
      {
        text: "5",
        correct: false,
      },
      {
        text: "4",
        correct: false,
      },
      {
        text: "3",
        correct: false,
      },
      {
        text: "2",
        correct: true,
      },
    ],
  },

  {
    //   question number 4

    question: "National fruit of Bangladesh?",
    answers: [
      {
        text: "Jackfruit",
        correct: true,
      },
      {
        text: "Mango",
        correct: false,
      },
      {
        text: "Banana",
        correct: false,
      },
      {
        text: "Apple",
        correct: false,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answers.correct){
        button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.addEventListener('mouseover', () =>{
        nextButton.style.backgroundColor = 'red';
        nextButton.style.transition = "all 0.5s ease-in-out";
    });
    nextButton.addEventListener('mouseout', () =>{
        nextButton.style.backgroundColor = '';
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play again!";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();
    }
    else{
       startQuiz();
    }
})
startQuiz();
