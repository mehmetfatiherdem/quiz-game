const questions = [
    {
        question: "When was JavaScript invented?",
        choices: [ 
            {choice:"1993", isCorrect: false},
            {choice:"1994", isCorrect: false},
            {choice:"1995", isCorrect: true},
            {choice:"1996", isCorrect: false}
        ]
    },

    {
        question: "Who did invent JavaScript?",
        choices:[ 
            {choice:"Steve Jobs", isCorrect: false},
            {choice:"Adam Script", isCorrect: false},
            {choice:"John Poker", isCorrect: false},
            {choice:"Brendan Eich", isCorrect: true}
        ]
    },

    {
        question: "When was the first computer invented?",
        choices:[ 
            {choice:"1943", isCorrect: true},
            {choice:"1944", isCorrect: false},
            {choice:"1945", isCorrect: false},
            {choice:"1946", isCorrect: false}
        ]
    },

    {
        question: "What was the first computer system that used color display?",
        choices:[ 
            {choice:"IBM 650", isCorrect: false},
            {choice:"Apple 1", isCorrect: true},
            {choice:"Atari 400/800", isCorrect: false},
            {choice:"Sinclair", isCorrect: false}
        ]
    },

    {
        question: "What was the name of the first computer programmer?",
        choices:[ 
            {choice:"Alan Turing", isCorrect: false},
            {choice:"Steve Wozniak", isCorrect: false},
            {choice:"Margaret Hamilton", isCorrect: false},
            {choice:"Ada Lovelace", isCorrect: true}
        ]
    },

    {
        question: "How many generations of computers have been invented?",
        choices:[ 
            {choice:"3", isCorrect: false},
            {choice:"4", isCorrect: false},
            {choice:"5", isCorrect: true},
            {choice:"6", isCorrect: false}
        ]
    },

    {
        question: "Which popular company designed the first CPU?",
        choices:[ 
            {choice:"Intel", isCorrect: true},
            {choice:"IBM", isCorrect: false},
            {choice:"Apple", isCorrect: false},
            {choice:"AMD", isCorrect: false}
        ]
    },

    {
        question: "Which computer company invented the first floppy disks, hard disk drives, and DRAMS?",
        choices:[ 
            {choice:"HP", isCorrect: false},
            {choice:"Intel", isCorrect: false},
            {choice:"Apple", isCorrect: false},
            {choice:"IBM", isCorrect: true}
        ]
    },

    {
        question: "What was the name of the first social networking site launched on the internet in 1994?",
        choices:[ 
            {choice:"Facebook", isCorrect: false},
            {choice:"MySpace", isCorrect: false},
            {choice:"GeoCities", isCorrect: true},
            {choice:"ICQ", isCorrect: false}
        ]
    },

    {
        question: "What product did Amazon first start out selling?",
        choices:[ 
            {choice:"Movies", isCorrect: false},
            {choice:"Books", isCorrect: true},
            {choice:"Furniture", isCorrect: false},
            {choice:"Video Games", isCorrect: false}
        ]
    }

];


const questText = document.getElementById("question-cta");

const choiceContainer = document.getElementById("choice-container");

const nextBtn = document.getElementById("next-cta");

const progressBar = document.getElementById("progressBarFull");

const questProgress = document.getElementById("question-info");


let currentQuestion;

nextBtn.addEventListener("click", nextQuest);

function nextQuest(){
    if(currentQuestion<questions.length-1){
      currentQuestion++;
      clearState();
      getQuestion();
    }else{
      clearState();
      document.location.href = "highscores.html";
    }
    
}

function clearState(){
    nextBtn.classList.add("hide");
    while(choiceContainer.firstChild) {
        choiceContainer.removeChild(choiceContainer.firstChild);
      }

}


function progress(){
    questProgress.innerText = "Question " + (currentQuestion+1) + " of " + questions.length;
    let width = (currentQuestion+1)*100/questions.length;
    progressBar.style.width = width + "%";
}

function getQuestion(){
    progress();
    clearState();
    questText.innerText = questions[currentQuestion].question;

    questions[currentQuestion].choices.forEach(choice => {
        const btn = document.createElement("div");
        const choiceText = document.createElement("p");
        choiceText.innerText = choice.choice;
      
        choiceText.classList.add("opt");
        btn.classList.add("choice");

        btn.appendChild(choiceText);

        btn.addEventListener("click", ()=>{

          if(choice.isCorrect){
            btn.classList.add("correct");
          }else{
            btn.classList.add("wrong");
          }
          nextBtn.classList.remove("hide");
        });

          
          choiceContainer.appendChild(btn);
    });
    

}

function start(){
    currentQuestion = 0;
    getQuestion();

}

start();





