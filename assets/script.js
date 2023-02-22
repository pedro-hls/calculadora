const previousOperatorText = document.querySelector('.previousOperator')
const currentOperatorText = document.querySelector('.currentOperator')

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[data-reset]')

class Calculator {
    constructor(previousOperatorText, currentOperatorText){
        this.previousOperatorText = previousOperatorText;
        this.currentOperatorText = currentOperatorText;
        this.reset()
    }

    calculate(){

        let result;

        const _previousOperandNumber = Number(this.previousOperator)
        const _currentOperandNumber = Number(this.currentOperator)

        if (isNaN(_previousOperandNumber) || isNaN(_currentOperandNumber) || this.previousOperator == '') return;

        switch (this.operation) {
            case '+':
                result = _previousOperandNumber + _currentOperandNumber
            break
            case '-':
                result = _previousOperandNumber - _currentOperandNumber
            break
            case 'x':
                result = _previousOperandNumber * _currentOperandNumber
            break
            case '÷':
                result = _previousOperandNumber / _currentOperandNumber
            break
        }

        this.currentOperator = result;
        this.operation = undefined
        this.previousOperator = ''

    }

    appendNumber(number) {

        if (this.currentOperator.includes('.') && number === '.') {
            return }
        if (this.currentOperator == '' && number === '.') {
            this.currentOperator = `${0}`
        }
        if (this.currentOperator.length >= 18) {
            return }
        this.currentOperator = `${this.currentOperator}${number.toString()}`

    }

    chooseOperation(operation) {

        if (this.currentOperator == '') return

        if (this.previousOperator !== '') {
            this.calculate()
        }

        this.operation = operation;

        this.previousOperator = this.currentOperator;
        this.currentOperator = '';

    }

    reset() {

        this.currentOperator = '';
        this.previousOperator = '';
        this.operation = undefined

    }
    
    updateDisplay() {

        this.previousOperatorText.innerText = `${this.previousOperator} ${this.operation || ""}`;
        this.currentOperatorText.innerText = this.currentOperator;

    }

    deleteCurrent() {

        this.currentOperator = this.currentOperator.slice(0, this.currentOperator.length-1);


    }
}

const calculator = new Calculator( previousOperatorText, currentOperatorText)

for (const numberButton of numberButtons) {

    numberButton.addEventListener('click', () => {
        calculator.appendNumber(numberButton.innerText);
        calculator.updateDisplay();

    });
}

for (const operationButton of operationButtons) {

    operationButton.addEventListener('click', () => {
    calculator.chooseOperation(operationButton.innerText);
    calculator.updateDisplay()
    
})
}

resetButton.addEventListener('click', () => {
    calculator.reset();
    calculator.updateDisplay()
})

equalButton.addEventListener('click', () => {
    calculator.calculate();
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', () => {
    calculator.deleteCurrent();
    calculator.updateDisplay()
})


function theme() {

    const buttonsList = document.querySelectorAll('.tinyButton')
    for (let i = 0; i < buttonsList.length; i++) {
        document.querySelectorAll('.tinyButton')[i].classList.toggle('lightCalcButtons')
    }

    const coloredButtonsList = document.querySelectorAll('.coloredButtons')
    for (let c = 0; c < coloredButtonsList.length; c++) {
        document.querySelectorAll('.coloredButtons')[c].classList.toggle('lightColoredButtons')
    }

    document.querySelector('.equalButton').classList.toggle('lightEqualButton')
    document.querySelector('.buttonsContainer').classList.toggle('lightBackground')
    document.querySelector('.pageContainer').classList.toggle('lightPageContainer')
    document.querySelector('.operators').classList.toggle('lightDisplay')
    document.querySelector('.previousOperator').classList.toggle('lightPreviousOperator')
    document.querySelector('.title').classList.toggle('lightTitle')
    document.querySelector('.credits').classList.toggle('lightCredits')

    const icon = document.querySelector('.icon')
    if (icon.classList.contains('fa-sun')){
        icon.classList.remove('fa-sun')
        icon.classList.add('fa-moon')
    } else {
        icon.classList.add('fa-sun')
        icon.classList.remove('fa-moon')
    }

}

document.querySelector('.icon').addEventListener('click', theme)