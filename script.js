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
    // if (equal && (parseInt(button.textContent))) {
    //     a = '';
    //     b = '';
    //     operand = '';
    //     displayString = '';
    //     equal = false;
    // } else 
    if (equal && (!parseInt(button.textContent))) {
        b = '';
        operand = button.textContent;
        displayString = '';
        equal = false;
        console.log('I get here');
    }

    if (button.textContent == '=') {
        b = displayString
        console.log(operand + a + b);
        displayString = operate(operand, a, b);
        a = displayString;
        displayRefresh();
        equal = true;
    } else if (!parseInt(button.textContent)) {
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