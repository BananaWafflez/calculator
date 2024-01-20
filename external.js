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
            add(num1,num2);
            break;
        case("-"):
            subtract(num1,num2);
            break;
        case("x"):
            multiply(num1,num2);
        case("/"):
            divide(num1,num2);
    }
}
function changenumberline(numbutton){
    const buttonelem = numbutton.target;
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
for(i = 0; i < 15; i++){
    buttons[i].addEventListener('click', changenumberline);
}
