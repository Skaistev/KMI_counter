const weightDOM = document.getElementById("input-value2")
const heightDOM = document.getElementById("input-value1")
const btnCountDOM = document.getElementById("count")
const answerRowDOM = document.querySelector(".answer-row")
const answerDOM = document.querySelector(".answer")
const btnClearDOM = document.getElementById("clear")




function kmiCount (){

const kmi = ((weightDOM.value/((heightDOM.value)/100)))/(heightDOM.value/100);

let ats = ''
if (kmi===Infinity){
    btnClearDOM.style = "display:inline"
    return answerRowDOM.innerHTML = `<p class="answer">Ivalid data/no data entered</p>`

}
if (weightDOM.value>250||weightDOM.value<1){
    btnClearDOM.style = "display:inline"
    return answerRowDOM.innerHTML = `<p class="answer">Ivalid data/no data entered</p>`

}
if (heightDOM.value>260||heightDOM.value<1){
    btnClearDOM.style = "display:inline"
    return answerRowDOM.innerHTML = `<p class="answer">Ivalid data/no data entered</p>`

}


if(kmi<=18.5){

  ats = "Your weigth is poor. Go eat something!"
   answerRowDOM.classList.add('yellow');

}else 
if (kmi>18.5 && kmi<=24.9){
    ats = "Your weigth is perfect. Keep going!"
    answerRowDOM.classList.add('green');

}else 
if(kmi>=25&&kmi<29.9){
    ats = "Your weigth is rather big... Go do some sport activities and eat more vegetables!"
    answerRowDOM.classList.add('orange');

}else
if (kmi>=30){
    ats = "Don't panic! Your weight is too big for human being. Try change your habits and hit into healther way of living."
    answerRowDOM.classList.add('red');
}

answerRowDOM.innerHTML = `<p class="answer">Your KMI is ${kmi.toFixed(2)}. ${ats}</p>`
btnClearDOM.style = "display:inline"



}
  
function clearButton () {
    answerRowDOM.innerHTML = `<div></div>`
    btnClearDOM.style = "display:none"
    weightDOM.value = '';
    heightDOM.value = '';
}

btnCountDOM.addEventListener("click", kmiCount);
btnClearDOM.addEventListener("click", clearButton);