function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    console.log('I get to sub function');
    return a - b;
}

function mul(a, b) {
    
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(op, a, b) {
    switch (op) {
        case '+':
            return add(parseInt(a), parseInt(b));
            break;
        case '-':
            return subtract(parseInt(a), parseInt(b));
            break;
        case '*':
            console.log('I get to operate mul.')
            return mul(parseInt(a), parseInt(b));
            break;
        case '/':
            return div(parseInt(a), parseInt(b));
            break;
    }
}

let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let displayString = '';
let operand = '';
let a, b;
let equal = false;

buttons.forEach(button => button.addEventListener('click', function (e) {
    console.log('a = ' +a);
    console.log('displayString = ' + displayString);
    if (equal && (parseInt(button.textContent))) {
        a = '';
        b = '';
        operand = '';
        displayString = '';
        equal = false;
    } 

    if (button.textContent == '=') {
        b = displayString
        console.log(operand + a + b);
        displayString = operate(operand, a, b);
        displayRefresh();
        equal = true;
    } else if (equal && (!parseInt(button.textContent))) {
        a = parseInt(displayString);
        b = '';
        operand = button.textContent;
        displayString = '';
        equal = false;
        console.log('I get here');
    } else if (!parseInt(button.textContent) && button.textContent != '0') {
        operand = button.textContent;
        a = parseInt(displayString);
        displayString = '';
        displayRefresh();
    } else {
        displayString = displayString.concat(button.textContent);
        displayRefresh();
    }
}))

let displayPara = document.createElement('p');

function displayRefresh() {
    
    displayPara.textContent = displayString;

    display.appendChild(displayPara);
}