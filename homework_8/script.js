'use strict';


const button = document.getElementById("button");
    
button.addEventListener("click", (event) => {
    let firstOperand = document.getElementById("first-operand").value;
    const operator = document.getElementById("operator").value;
    let secondOperand = document.getElementById("second-operand").value;
    //let result;
    //let output;
    let c = Number(firstOperand) + Number(secondOperand);
 
    if (firstOperand.trim() === "") {
        alert("Первое число не указано");
        return (output.innerText = "Первое число не указано");
    }
    
    if (secondOperand.trim() === "") {
        alert("Второе число не указано");
        return (output.innerText = "Второе число не указано");
    }
    
    if (isNaN(firstOperand) || isNaN(secondOperand)) {
        alert("Некорректный ввод чисел");
        return (output.innerText = "Некорректный ввод чисел");
    }

    //if (output !== "Программа не поддерживает такую операцию" &&
        //(isNaN(result) || result === Infinity)) { 
        //alert("Операция некорректна");
    //}

    
    switch (operator) {
        case "": {
            alert("Не введён знак");
            break;
          }
        case '-':
            alert(`Ответ: ${firstOperand - secondOperand}`);
            break;

        case '+':
            alert(`Ответ: ${c}`);
            break;

        case '/':
            alert(`Ответ: ${firstOperand / secondOperand}`);
            break;

        case '*':
            alert(`Ответ: ${firstOperand * secondOperand}`);
            break;
            
        default:
            alert('Программа не поддерживает такую операцию');
    };
})

