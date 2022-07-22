const questionContainer = document.querySelector(".questionblock");
const btn1 = document.querySelector('#btn1');
const btn2 = document.getElementById('btn2');
const answer1 = document.querySelector("#answer1");
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const answer2 = document.querySelector("#answer2");
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const answer3 = document.querySelector("#answer3");
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const answer4 = document.querySelector("#answer4");
const btn9 = document.getElementById('btn9');
const btn10 = document.getElementById('btn10');
const answer5 = document.querySelector("#answer5");
const btn11 = document.getElementById('btn11');
const btn12 = document.getElementById('btn12');
const answer6 = document.querySelector("#answer6");
const btn13 = document.getElementById('btn13');
const btn14 = document.getElementById('btn14');
const answer7 = document.querySelector("#answer7");
const btn15 = document.getElementById('btn15');
const btn16 = document.getElementById('btn16');
const answer8 = document.querySelector("#answer8");
const btn17 = document.getElementById('btn17');
const btn18 = document.getElementById('btn18');
const answer9 = document.querySelector("#answer9");
const results = document.getElementById('results');
const mark = document.getElementById('mark');
let count = 0;
let isAnswerClicked = [false, false, false, false, false, false, false, false, false];

// function add (number1, number2) {
//     const result = number1 + number2;
//     return result;
// }

// let result1 = add(5, 3);
// console.log(result1);

// function presentation (age, name) {
//     return `Bonjour ${name}, tu as ${age} ans`;
// }

// let test = presentation(27, 'Hugo');
// console.log(test); 

function incrementation () {
    // count++
    count += 1;
    // count = count +1
}

function changeOnClickedAnswer (index) {
    isAnswerClicked[index] = true;
}

btn1.addEventListener("click", () => {
    
    if (isAnswerClicked[0] === false) {
        incrementation(); 
        btn1.classList.add('rightanswer');
        answer1.classList.add('show-answer');
        answer1.style.background = "green";
    }
    changeOnClickedAnswer(0);
});


btn2.addEventListener("click", () => { 
    if (isAnswerClicked[0] === false) {
        btn2.classList.add('wronganswer');
        answer1.classList.add('show-answer');
        answer1.style.background = "red";
    }
    changeOnClickedAnswer(0);
});

btn3.addEventListener("click", () => {
    if (isAnswerClicked[1] === false) {
    btn3.classList.add('wronganswer');
    answer2.classList.add('show-answer');
    answer2.style.background = "red";
    }
    changeOnClickedAnswer(1); 
});

btn4.addEventListener("click", () => {
    if (isAnswerClicked[1] === false) {
        incrementation(); 
        btn4.classList.add('rightanswer');
        answer2.classList.add('show-answer');
        answer2.style.background = "green";
    }
    changeOnClickedAnswer(1);
});

btn5.addEventListener("click", () => {
    if (isAnswerClicked[2] === false) {
        incrementation(); 
        btn5.classList.add('rightanswer');
        answer3.classList.add('show-answer');
        answer3.style.background = "green";
    }
    changeOnClickedAnswer(2); 
});

btn6.addEventListener("click", () => {
    if (isAnswerClicked[2] === false) {
    btn6.classList.add('wronganswer');
    answer3.classList.add('show-answer');
    answer3.style.background = "red";
    }
    changeOnClickedAnswer(2);
});

btn7.addEventListener("click", () => {
    if (isAnswerClicked[3] === false) {
    btn7.classList.add('wronganswer');
    answer4.classList.add('show-answer');
    answer4.style.background = "red";
    }
    changeOnClickedAnswer(3);
});

btn8.addEventListener("click", () => {
    if (isAnswerClicked[3] === false) {
        incrementation(); 
        btn8.classList.add('rightanswer');
        answer4.classList.add('show-answer');
        answer4.style.background = "green";
    }
    changeOnClickedAnswer(3); 
});

btn9.addEventListener("click", () => {
    if (isAnswerClicked[4] === false) {
        incrementation(); 
        btn9.classList.add('rightanswer');
        answer5.classList.add('show-answer');
        answer5.style.background = "green";
    }
    changeOnClickedAnswer(4);
});

btn10.addEventListener("click", () => {
    if (isAnswerClicked[4] === false) {
    btn10.classList.add('wronganswer');
    answer5.classList.add('show-answer');
    answer5.style.background = "red";
    }
    changeOnClickedAnswer(4);
});

btn11.addEventListener("click", () => {
    if (isAnswerClicked[5] === false) {
        incrementation(); 
        btn11.classList.add('rightanswer');
        answer6.classList.add('show-answer');
        answer6.style.background = "green";
    }
    changeOnClickedAnswer(5); 
});

btn12.addEventListener("click", () => {
    if (isAnswerClicked[5] === false) {
    btn12.classList.add('wronganswer');
    answer6.classList.add('show-answer');
    answer6.style.background = "red";
    }
    changeOnClickedAnswer(5);
});

btn13.addEventListener("click", () => {
    if (isAnswerClicked[6] === false) {
        incrementation(); 
        btn13.classList.add('rightanswer');
        answer7.classList.add('show-answer');
        answer7.style.background = "green";
    }
    changeOnClickedAnswer(6); 
});

btn14.addEventListener("click", () => {
    if (isAnswerClicked[6] === false) {
    btn14.classList.add('wronganswer');
    answer7.classList.add('show-answer');
    answer7.style.background = "red";
    }
    changeOnClickedAnswer(6);
});

btn15.addEventListener("click", () => {
    if (isAnswerClicked[7] === false) {
        incrementation(); 
        btn15.classList.add('rightanswer');
        answer8.classList.add('show-answer');
        answer8.style.background = "green";
    }
    changeOnClickedAnswer(7); 
});

btn16.addEventListener("click", () => {
    if (isAnswerClicked[7] === false) {
    btn16.classList.add('wronganswer');
    answer8.classList.add('show-answer');
    answer8.style.background = "red";
    }
    changeOnClickedAnswer(7);
});

btn17.addEventListener("click", () => {
    if (isAnswerClicked[8] === false) {
    btn17.classList.add('wronganswer');
    answer9.classList.add('show-answer');
    answer9.style.background = "red";
    }
    changeOnClickedAnswer(8);
});

btn18.addEventListener("click", () => {
    if (isAnswerClicked[8] === false) {
        incrementation(); 
        btn18.classList.add('rightanswer');
        answer9.classList.add('show-answer');
        answer9.style.background = "green";
    }
    changeOnClickedAnswer(8);
});

results.addEventListener("click", () => {
    mark.innerText = count + " / 9";
})