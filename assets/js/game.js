let time = document.getElementById('time').textContent;
let countdown = 60;
let answers_container = document.getElementById("outer-container")
let answers_buttons = Array.from(document.querySelectorAll(".answers-container button"))
let question_on = 0

let correct_answers = 0



const count = setInterval(() => {
    if (countdown <= 0) {
      end_quiz()
    }
    document.getElementById('time').textContent = 'Time:' + countdown;
    countdown--
},  1000);



var quizQuestions = [
    {
        question: " The condition in an if/else statement is enclosed with _________.",
        answers: [
            { name: "1. quotes", selection: false },
            { name: "2. curly brackets", selection: false },
            { name: "3. parenthesis", selection: true },
            {name: " 4. square brackets", selection: false}
        ]
    },
    {
        question: "Arrays in Javascript can be used to store_________.",
        answers: [
            { name: "1. numbers and strings", selection: false },
            { name: "2. other arrays", selection: false },
            { name: "3. booleans", selection: false },
            { name: "4. all of the above", selection: true }
        ]
    },
       {
        question: "String values must be enclosed within_________ when being assigned to variables",
        answers: [
            { name: "1. commas", selection: false },
            { name: "2. curly brackets", selection: false },
            { name: "3. quotes", selection: true },
            { name: "4. parenthesis", selection: false }
        ]
    },
       {
           question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { name: "1. JavaScript", selection: false },
            { name: "2. terminal/bash", selection: false },
            { name: "3. for loops", selection: false },
            { name: "4. console.log", selection:true }
        ]

       }

    ];

const question = document.getElementById("question")

function run_questions(question_list){
  let question_current = question_list[question_on]
  question.innerHTML = question_current.question
  let questions = 0
  for(let button of answers_buttons){
    button.innerHTML = question_current.answers[questions].name
    button.dataset.correct = question_current.answers[questions++].selection
  }
}



function end_quiz(){
  clearInterval(count)
  localStorage.setItem("our_quiz_score_current", correct_answers)
  question.innerHTML = "Complete! You got " + correct_answers + " of " + quizQuestions.length
  answers_container.remove()
  window.location.assign("./highscores.html")
}

/*
correct_answers = correct_answers - 1
correct_answers -= 10
correct_answers--
*/

for(let button of answers_buttons){
  button.addEventListener("click", function(event){
    if (event.target.dataset.correct === "true"){
      correct_answers++
    }
    else{
countdown -=5
    }
      
    if(quizQuestions.length - 1 > question_on){
      question_on += 1
      run_questions(quizQuestions)
    }
    else
      end_quiz()
  })
}
run_questions(quizQuestions)