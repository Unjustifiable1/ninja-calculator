// SET VARIABLES

const DEFAULT_NUMBER_ONE = "";
const DEFAULT_OPERATOR = "+";
const DEFAULT_NUMBER_TWO = "";
const DEFAULT_SELECTION = "numberOne"

let currentNumberOne = DEFAULT_NUMBER_ONE;
let currentOperator = DEFAULT_OPERATOR;
let currentNumberTwo = DEFAULT_NUMBER_TWO;
let currentSelection = DEFAULT_SELECTION;

const setCurrentNumberOne = (newOne) => currentNumberOne = newOne;
const setCurrentOperator = (newOperator) => currentOperator = newOperator;
const setCurrentNumberTwo = (newTwo) => currentNumberTwo = newTwo;
const setCurrentSelection = (newSelection) => currentSelection = newSelection;


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



// CALCULATOR FUNCTION

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

console.log(calc.operate(`${currentNumberOne} ${currentOperator} ${currentNumberTwo}`));


// CALCULATOR FUNCTIONALITY

const clearCalc = () => {

};


const runOperate = () => {
    calc.operate(`${currentNumberOne} ${currentOperator} ${currentNumberTwo}`);
};


const inputDigit = () => {
    if (currentSelection === "numberOne") {
        currentNumberOne += "619";
        numberOneBtn.textContent = currentNumberOne;

        console.log(this.textContent);
    } else if (currentSelection === "numberTwo") {
        currentNumberTwo += digit;
    }
}


digitBtns.forEach((btn) => {
    btn.addEventListener('click', e => {});
    btn.dispatchEvent(new Event('click'));  
});

