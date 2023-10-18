// SET VARIABLES

const DEFAULT_NUMBERS = "0";
const DEFAULT_OPERATOR = "+";
const DEFAULT_SELECTION = "numberOne"

let currentNumberOne = DEFAULT_NUMBERS;
let currentOperator = DEFAULT_OPERATOR;
let currentNumberTwo = DEFAULT_NUMBERS;
let currentSelection = DEFAULT_SELECTION;

const setCurrentNumberOne = (newOne) => currentNumberOne = newOne;
const setCurrentOperator = (newOperator) => currentOperator = newOperator;
const setCurrentNumberTwo = (newTwo) => currentNumberTwo = newTwo;


// DOM SELECTORS

const numberOneBtn = document.getElementById('numberOne');
const operator = document.getElementById('operator');
const numberTwoBtn = document.getElementById('numberTwo');
const calcAnswer = document.getElementById('calcAnswer');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');
const calcOperatorBtns = document.querySelectorAll('.calcOperator');
const digitBtns = document.querySelectorAll('.digit');


// DOM INTERACTIONS

numberOneBtn.onclick = () => setCurrentSelection('numberOne');
numberTwoBtn.onclick = () => setCurrentSelection('numberTwo');
clearBtn.onclick = () => clearCalc();
equalsBtn.onclick = () => runOperate();

const setCurrentSelection = (newSelection) => {
    currentSelection = newSelection;
    if (newSelection === 'numberOne') {  //  && numberTwoBtn.className == 'selectedNumber'
        numberOneBtn.classList.add('selectedNumber');
        numberTwoBtn.classList.remove('selectedNumber');
    }
    if (newSelection === 'numberTwo') {  //  && numberOneBtn.className == 'selectedNumber'
        numberTwoBtn.classList.add('selectedNumber');
        numberOneBtn.classList.remove('selectedNumber');
    }
};


// CALCULATOR OPERATOR FUNCTION

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "**": (a, b) => a ** b,
    };
  
    this.operate = function(str) {
  
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];
    
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
    
        return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator;


// CALCULATOR FUNCTIONALITY

const resetCurrent = () => {
    setCurrentNumberOne(DEFAULT_NUMBERS); 
    setCurrentNumberTwo(DEFAULT_NUMBERS);
    setCurrentOperator(DEFAULT_OPERATOR);
    setCurrentSelection(DEFAULT_SELECTION);
};

const clearCalc = () => {
    resetCurrent();
    numberOneBtn.textContent = currentNumberOne;
    operator.textContent = currentOperator;
    numberTwoBtn.textContent = currentNumberTwo;
};


const runOperate = () => {
    calcAnswer.textContent = calc.operate(`${currentNumberOne} ${currentOperator} ${currentNumberTwo}`);
    resetCurrent();
};


const inputDigit = function() {
    if (+currentNumberOne === 0 && +currentNumberTwo === 0) {
        currentNumberOne = "";
        currentNumberTwo = "";
    }
    if (currentSelection === "numberOne") {
        currentNumberOne += this.textContent;
        numberOneBtn.textContent = currentNumberOne;
    } else if (currentSelection === "numberTwo") {
        currentNumberTwo += this.textContent;
        numberTwoBtn.textContent = currentNumberTwo;
    }
}

digitBtns.forEach((btn) => {
    btn.addEventListener('click', inputDigit);
});


const changeOperator = function() {
    currentOperator = this.textContent;
    operator.textContent = currentOperator;
    setCurrentSelection("numberTwo");
}

calcOperatorBtns.forEach((btn) => {
    btn.addEventListener('click', changeOperator);
});