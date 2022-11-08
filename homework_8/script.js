'use strict';

function calc() {
    const firstOperand = Number(document.forms['calc'].elements['firstOperand'].value);
    const secondOperand = Number(document.forms['calc'].elements['secondOperand'].value);
    const operator = document.forms['calc'].elements['operator'].value;

    if (firstOperand !== Number) {
        alert('Не введено первое число');
    } else if (secondOperand !== Number) {
        alert('Не введено второе число');
    } else switch (operator) {
        case '-':
            alert(`Ответ: ${firstOperand - secondOperand}`);
            break;

        case '+':
            alert(`Ответ: ${firstOperand + secondOperand}`);
            break;

        case '/':
            alert(`Ответ: ${firstOperand / secondOperand}`);
            break;

        case '*':
            alert(`Ответ: ${firstOperand * secondOperand}`);
            break;
            
        default:
            alert('Не знаю, что вы от меня хотите');
    };
}

