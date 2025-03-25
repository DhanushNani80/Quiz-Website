const quizData=[
    {
        question:"What is the capital city of Japan?",
        options:["Beijing","Seoul","Tokyo","Manila"],
        correctAnswer:"Tokyo"
    },
    {
        question:"Who is known as the 'Father of Modern Physics'?",
        options:["Isaac Newton","Albert Einstein","Nikola Tesla","Galileo Galilie"],
        correctAnswer:"Albert Einstein"
    },
    {
        question:"Which of the following is the longest river in the world?",
        options:["Amazon River","Nile River","Yangtze River","Mississippi River"],
        correctAnswer:"Nile River"
    },
    {
        question:"Who wrote the famous novel '1984'?",
        options:["Aldous Huxley","George Orwell","Ernest Hemingway","J.K. Rowling"],
        correctAnswer:" George Orwell"
    },
    {
        question:"What is the chemical symbol for gold?",
        options:["Ag","Au","Fe","Pb"],
        correctAnswer:"Au"
    },
    {
        question:"Which planet is closest to the Sun?",
        options:["Earth","Mars","Mercury","Venus"],
        correctAnswer:"Mercury"
    },
    {
        question:"Which of these animals is known for being the fastest on land?",
        options:["Cheetah","Lion","Gazelle","Elephant"],
        correctAnswer:"Cheetah"
    },
    {
        question:"Who invented the telephone?",
        options:["Thomas Edison"," Nikola Tesla","Alexander Graham Bell","Benjamin Franklin"],
        correctAnswer:"Alexander Graham Bell"
    },
    {
        question:" What is the largest desert in the world?",
        options:[" Sahara Desert","Arabian Desert"," Gobi Desert","Antarctica"],
        correctAnswer:"Antarctica"
    },
    
    {
        question:"Which country is known as the 'Land of the Midnight Sun'?",
        options:["Finland","Norway","Canada","Sweden"],
        correctAnswer:"Norway"
    },
    {
        question:"What is the currency of the United Kingdom?",
        options:["Euro","Dollar","Pound","Franc"],
        correctAnswer:"Pound"
    },
    {
        question:"What is the smallest planet in our solar system?",
        options:["Mars","Mercury","Venus","Neptune"],
        correctAnswer:"Mercury"
    },
    {
        question:"Which of these countries does not have a coastline?",
        options:["Bolivia","Chile","Peru","Ecuador"],
        correctAnswer:"Bolivia"
    },
    {
        question:"Who was the first woman to fly solo across the Atlantic Ocean?",
        options:["Amelia Earhart"," Sally Ride","Valentina Tereshkova","Bessie Coleman"],
        correctAnswer:"Amelia Earhart"
    },
    {
        question:"In what year did the Titanic sink?",
        options:["1905","1910","1912","1920"],
        correctAnswer:"1912"
    },
    {
        question:"What is the national flower of Japan?",
        options:["Lotus","Rose","Orchid","Cherry Blossom"],
        correctAnswer:"Cherry Blossom"
    },
    {
        question:"In which country did the sport of boxing originate?",
        options:["Greece","Egypt","China","United States"],
        correctAnswer:"Greece"
    },
    {
        question:"What is the hardest natural substance on Earth?",
        options:["Iron","Gold","Diamond","Graphene"],
        correctAnswer:"Diamond"
    },
    {
        question:"Who is known as the 'King of Pop'?",
        options:["Elvis Presley"," Michael Jackson","Prince","Justin Timberlake"],
        correctAnswer:"Michael Jackson"
    },
    {
        question:"Which ocean is the largest?",
        options:["Atlantic Ocean","Indian Ocean","Pacific Ocean","Arctic Ocean"],
        correctAnswer:"Pacific Ocean"
    }
];
let score=0;
function displayQuiz() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    quizData.forEach((question, index) => {
        const questionCard = `
            <div class="card">
                <div class="card-body">
                    <h5>${index + 1}. ${question.question}</h5>
                    ${question.options.map((option, i) => `
                        <div>
                            <input type="radio" name="question${index}" value="${option}" id="option${index}-${i}">
                            <label for="option${index}-${i}">${option}</label>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        questionContainer.innerHTML += questionCard;
    });
}
function submitQuiz() {
    score = 0;
    quizData.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === question.correctAnswer) {
            score++;
        }
    });
    showResult();
}
function showResult(){
    document.getElementById("finalScore").innerHTML=score;
    document.getElementById("resultModal").style.display="flex";

}
document.getElementById('closeModalBtn').addEventListener('click', () => {
    document.getElementById('resultModal').style.display = "none";
});
document.getElementById("submitBtn").addEventListener('click',submitQuiz);
displayQuiz();