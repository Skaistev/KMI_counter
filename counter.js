const weightDOM = document.getElementById("input-value1")
const heightDOM = document.getElementById("input-value2")
const btnCountDOM = document.getElementById("count")
const answerRowDOM = document.querySelector(".answer-row")

console.log(answerRowDOM);


function kmiCount (){

const x = weightDOM.value*heightDOM.value;



answerRowDOM.innerHTML = `<p class="answer">Your KMI is ${x}.</p>
<button id="clear" class="btn">Clear</button>`


}

btnCountDOM.addEventListener("click", kmiCount)