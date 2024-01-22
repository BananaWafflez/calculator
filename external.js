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
    if(buttonelem.innerHTML == "+" || buttonelem.innerHTML == "-" || buttonelem.innerHTML == "/" || buttonelem.innerHTML == "*" ){
        num = Number(numberline.innerHTML);
        numarray.push(num);
        numarray.push(buttonelem.innerHTML);
        numberline.innerHTML = "";
        if(index < 2){
            index++;
        }else{
            var num1 = numarray[0];
            var num2 = numarray[2];
            var operation = numarray[1];
            console.log(num1);
            console.log(num2);
            numberline.innerHTML = operate(num1, num2, operation);
            
        }
        return;
    } 
    if(buttonelem.innerHTML == "clear"){
        numberline.innerHTML = "";
        return;
    }
    else if(buttonelem.innerHTML == "="){
        return;
    }
    numberline.innerHTML += buttonelem.innerHTML;
}

const numberline = document.querySelector(".numberinput");
const buttons = document.querySelectorAll("button");
var numarray = []
var index = 1;
for(i = 0; i < 15; i++){
    buttons[i].addEventListener('click', changenumberline);
}
