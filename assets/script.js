const previousOperatorText = document.querySelector('.previousOperator')
const currentOperatorText = document.querySelector('.currentOperator')

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalButton = document.querySelector('[data-equal]')
const deleteButton = document.querySelector('[data-delete]')
const resetButton = document.querySelector('[reset-delete]')

class Calculator {
    constructor(previousOperatorText, currentOperatorText){
        this.previousOperatorText = previousOperatorText;
        this.currentOperatorText = currentOperatorText;
    }
}