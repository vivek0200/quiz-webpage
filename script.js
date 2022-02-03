const quizDB = [
    {
        question:"Q1: what is full form of HTML?",
        a: "Hello to my land",
        b: "Hey text markup language",
        c: "Hyper text makeup language",
        d: "Hyper text markup language",
        ans: "ans4"
    },
    {
        question:"Q2: What does the following C expression do? x = x & (x-1) ",
        a: "Sets all bits as 1",
        b: "Makes x equals to 0",
        c: "Turns of the rightmost set bit",
        d: "Turns of the leftmost set bit",
        ans: "ans3"
    },
    {
        question:"Q3: A program P reads in 500 integers in the range [0..100] exepresenting the scores of 500 students. It then prints the frequency of each score above 50. What would be the best way for P to store the frequencies?",
        a: "An array of 50 numbers",
        b: "An array of 100 numbers",
        c: "An array of 500 numbers",
        d: "A dynamically allocated array of 550 numbers",
        ans: "ans1"

    },
    {
        question:"Q4: A dynamically allocated array of 550 numbers",
        a: "Find the ith largest element",
        b: "Delete an element",
        c: "Find the ith smallest element",
        d: "All of the above",
        ans: "ans2"
    },
    
];

const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
//const submit=document.querySelector('#submit');
let questionCount=0;
let score=0;
const loadQuestion= () => {
    //console.log(quizDB[0]);
    const questionList=quizDB[questionCount];
    question.innerText=questionList.question;
    option1.innerText=questionList.a;
    option2.innerText=questionList.b;
    option3.innerText=questionList.c;
    option4.innerText=questionList.d;
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem)=>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () =>{
     answers.forEach((curAnsElem) => curAnsElem.checked = false)
}

submit.addEventListener('click',()=>{
    const checkedAnswer=getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer==quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();
    if(questionCount<quizDB.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML=`
        <h3>Your score ${score}/${quizDB.length} &#9996</h3>
        <button class="btn" onclick="location.reload()">Play again</button>
        `;
        showScore.classList.remove('scoreArea');
    }
});