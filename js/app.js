const questions =[
    {
        'que':'Which of the following is a markup language?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'What  year was JavaScript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'none of the above',
        'correct':'b'   
    },
    {
        'que':'What does CSS Stands for?',
        'a':'Hypertext Markup Language',
        'b':'Cascading Style Sheet',
        'c':'Jason Object Notation',
        'd':'Helicopters Terminals Motorboats Lamborginis',
        'correct':'b'
    }
]

let index=0;
let right=0,wrong=0;
let total=questions.length;
const questionbox=document.getElementById('questionbox');
const optionInput=document.querySelectorAll('.option');

const loadQuestion=()=>{
    if(index==total){
        return endQuiz();
    }
    reset();
    const data =questions[index];
    console.log(data);
    questionbox.innerText=`${index+1} ) ${data.que}`;
    optionInput[0].nextElementSibling.innerText=data.a;
    optionInput[1].nextElementSibling.innerText=data.b;
    optionInput[2].nextElementSibling.innerText=data.c;
    optionInput[3].nextElementSibling.innerText=data.d;
}

const nextQuestion=()=>{
    const data =questions[index];
    let ans=getAnswer();
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    // console.log(ans);
    index++;
    loadQuestion();
}
function getAnswer(){
    let ans;
    optionInput.forEach(input => {
        if(input.checked){
            ans = input.value;
        }
    });
    return ans;
}
const reset=()=>{
    optionInput.forEach(input=>{
        input.checked=false;
    })
}
function endQuiz(){
    document.getElementById('box').innerHTML=`<h3>Thanks For Playing the Quiz</h3> <h2>${right}/${total} are Correct</h2>`;
}
loadQuestion();