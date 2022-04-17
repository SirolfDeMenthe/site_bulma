const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
    {
      question: "Ton clash préféré",
      answers: {
        a:{
          text: "Luigi clash Mario",
          src: "img/emblemicons_png_72px_alert-circle-fill.png",
          ctg: "luigi_norman"
        },
        b:{
          text: "Cyprien clash Cortex",
          src: "img/emblemicons_png_72px_calendar-date-fill.png",
          ctg: "cyprien_cortex"
        },
      },
    },
  ];
  
function buildQuiz(){
    const output = [];
    myQuestions.forEach(
        (currentQuestion,questionNumber)=>{
          const choices = [];
            for(letter in currentQuestion.answers){
                choices.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${currentQuestion.answers[letter].ctg}">
                        <img src=${currentQuestion.answers[letter].src}>
                        <div>${currentQuestion.answers[letter].text}</div>
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${choices.join('')} </div>`
            );
        } 
    );
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let luigi_norman = 0;
    let cyprien_cortex = 0;
    let corres_song = 0;
    myQuestions.forEach((currentQuestion, questionNumber)=>{
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === "luigi_norman"){
            luigi_norman++;
        }else if(userAnswer === "cyprien_cortex"){
            cyprien_cortex++;
        }
        if(luigi_norman>cyprien_cortex){
          corres_song = "luigi_norman";
        }else if(cyprien_cortex>luigi_norman){
          corres_song = "cyprien_cortex";
        }
    });
    resultsContainer.innerHTML = `tu corresponds à ${corres_song}`;
}

buildQuiz();

submitButton.addEventListener('click',showResults);