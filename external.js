function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    if(num2 == 0){
        return "undefined"
    }
    return num1 / num2;
}



function operate(num1, num2, operation){
    switch(operation){
        case("+"):
            return add(num1,num2);
        case("-"):
            return subtract(num1,num2);
            
        case("x"):
            return multiply(num1,num2);
            
        case("/"):
            return divide(num1,num2);
            
    }
}
function changenumberline(numbutton){
    const buttonelem = numbutton.target;
    if(buttonelem.innerHTML == "+" || buttonelem.innerHTML == "-" || buttonelem.innerHTML == "/" || buttonelem.innerHTML == "x" ){
        currentnum = Number(numberline.innerHTML);
        operation = buttonelem.innerHTML;
        if(previousnum == 0){
            numberline.innerHTML = "";
            previousnum = currentnum;
            return;
        }else if(previousnum != 0){
            numberline.innerHTML = "";
            var result = operate(previousnum, currentnum, operation);
            numberline.innerHTML = result;
            previousnum = result;
            return;
        }
       return;
        
    } 
    if(buttonelem.innerHTML == "clear"){
        numberline.innerHTML = "";
        previousnum = 0;
        currentnum = 0;
        operation = "";
        return;
    }
    else if(buttonelem.innerHTML == "="){
        return;
    }
    numberline.innerHTML += buttonelem.innerHTML;
}

const numberline = document.querySelector(".numberinput");
const buttons = document.querySelectorAll("button");
var currentnum = 0;
var previousnum = 0;
var operation = ''
var index = 1;
for(i = 0; i < 15; i++){
    buttons[i].addEventListener('click', changenumberline);
}
