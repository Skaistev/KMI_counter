const weightDOM = document.getElementById("input-value2")
const heightDOM = document.getElementById("input-value1")
const btnCountDOM = document.getElementById("count")
const answerRowDOM = document.querySelector(".answer-row")
const answerDOM = document.querySelector(".answer")

console.log(answerDOM);


function kmiCount (){

const kmi = ((weightDOM.value/((heightDOM.value)/100)))/(heightDOM.value/100);

let ats= ""

if(kmi<=18.5){
   ats = "Your weigth is poor. Go eat something!"
  
}else
if(kmi>18.5<=24.9){
    ats = "Your weigth is perfect. Keep going!"
} else
if(kmi>=25<=29.9){
    ats = "Your weigth is rather big... Go do some sport activities and eat more vegetables!"
} else
if(kmi>=30){
    ats = "Don't panic! Your weight is too big for human being. Try change your habits and hit into healhier way of living."
}


return answerRowDOM.innerHTML = `<p class="answer">Your KMI is ${kmi.toFixed(2)}. ${ats}</p>
<button id="clear" class="btn">Clear</button>`


}

btnCountDOM.addEventListener("click", kmiCount)