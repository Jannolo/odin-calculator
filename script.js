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
            return add(parseFloat(a), parseFloat(b));
            break;
        case '-':
            return subtract(parseFloat(a), parseFloat(b));
            break;
        case '*':
            console.log('I get to operate mul.');
            return mul(parseFloat(a), parseFloat(b));
            break;
        case '/':
            return div(parseFloat(a), parseFloat(b));
            break;
    }
}

function calculateArray(array) {
    //let orderedCalcs = [];
    let thisArray = array;
    while (thisArray.some((element) => element == '*')) {
        let num = thisArray.findIndex((element) => element == '*');
        let thisOperation = thisArray.slice(num-1, 3);
        console.log(thisOperation);
        thisArray.splice(num-1, 3, (operate(thisOperation[1], thisOperation[0], thisOperation[2])));
        //orderedCalcs = orderedCalcs.concat(array.splice(num-1, 2));
        console.log('Array: ' + thisArray);
    }

    while (thisArray.some((element) => element == '/')) {
        let num = thisArray.findIndex((element) => element == '/');
        let thisOperation = thisArray.slice(num-1, 3);
        thisArray.splice(num-1, 3, (operate(thisOperation[1], thisOperation[0], thisOperation[2])));
        //orderedCalcs = orderedCalcs.concat(array.splice(num-1, 2));
        console.log('array: ' + thisArray);
    }

    while (thisArray.some((element) => element == '+')) {
        let num = thisArray.findIndex((element) => element == '+');
        let thisOperation = thisArray.slice(num-1, 3);
        thisArray.splice(num-1, 3, (operate(thisOperation[1], thisOperation[0], thisOperation[2])));
        //orderedCalcs = orderedCalcs.concat(array.splice(num-1, 2));
        console.log('array: ' + thisArray);
    }

    while (thisArray.some((element) => element == '-')) {
        let num = thisArray.findIndex((element) => element == '-');
        let thisOperation = thisArray.slice(num-1, 3);
        thisArray.splice(num-1, 3, (operate(thisOperation[1], thisOperation[0], thisOperation[2])));
        //orderedCalcs = orderedCalcs.concat(array.splice(num-1, 2));
        console.log('array: ' + thisArray);
    }
    // console.log('array: ' + thisArray);
}


let buttons = document.querySelectorAll('button');
let display = document.querySelector('#display');
let displayString = '';
let calcArray = [];
let equal = false;

buttons.forEach(button => button.addEventListener('click', function (e) {
    console.log(calcArray);
    console.log('displayString = ' + displayString);
    if (equal && (parseFloat(button.textContent))) {
        a = '';
        b = '';
        operand = '';
        displayString = '';
        equal = false;
    }

    if (button.textContent == '=') {
        calcArray.push(parseFloat(displayString));
        console.log('Array right before calculation: ' + calcArray);
        let res = calculateArray(calcArray);
        //displayString = res % 2 == 0 ? res : res.toFixed(2);
        displayRefresh();
        equal = true;
    } else if (button.textContent == '.') {
        displayString = displayString.concat('.');
        displayRefresh();
    } else if (equal && (!parseFloat(button.textContent))) {
        
        calcArray.push(parseFloat(displayString));
        calcArray.push(button.textContent);
        displayString = '';
        equal = false;
    } else if (!parseFloat(button.textContent) && button.textContent != '0') {
        
        calcArray.push(parseFloat(displayString));
        calcArray.push(button.textContent);
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