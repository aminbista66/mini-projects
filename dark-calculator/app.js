class Calculator {
    constructor(currentElement, previousElement, displayOperator){
        this.currentElement = currentElement;
        this.previousELement = previousElement;
        this.displayOperator = displayOperator;
        this.operator = "";
        this.current = "";
        this.previous = ""
    }

    clear(){
        this.current = "";
        this.previous = "";
        this.operator = "";
    }

    appendNumber(number){
        if (number==="." && this.current.includes(".")) return 
        this.current = this.current.toString() + number;
    }

    appendOperator(operator){
        if(this.operator.length !== 0){
            this.calculate();
        }
        switch (operator){
            case "%":
                this.current = parseFloat(this.current) / 100;
                break;
            case "+/-":
                this.current = parseFloat(this.current) * -1;
                break;
            default:
                this.operator = operator
                this.previous = this.current
                this.current = "";    
        } 
    }
    

    calculate(){
        if(this.operator.length === 0 || (this.previous.length === 0 || this.previous.length === 0)) return 
        switch (this.operator){
            case "x":
                this.current = parseFloat(this.previous) * parseFloat(this.current);
                this.previous = ""
                this.operator = ""
                break;
            case "+":
                this.current =  parseFloat(this.previous) + parseFloat(this.current);
                this.previous = ""
                this.operator = ""
                break;
            case "-":
                this.current =  parseFloat(this.previous) - parseFloat(this.current);
                this.previous = ""
                this.operator = ""
                break;
            case "/":
                this.current = parseFloat(this.previous) / parseFloat(this.current);
                this.previous = ""
                this.operator = ""
                break;  
            default:
                this.current = "unknown operation";
        }

    }

	deleteOperation(){
		if(this.current.length === 0) return;	
		this.current = this.current.slice(0, -1)
	}
    updateScreen(){
        this.currentElement.innerText = this.current;
        this.previousELement.innerText = this.previous;
        this.displayOperator.innerText = this.operator;
    }

}


const numberButtons = document.querySelectorAll("[data-element-numbers]")
const operatorButtons = document.querySelectorAll("[data-element-operator]")
const clearButton = document.querySelector("[data-element-clear]")
const equalsButton = document.querySelector("[data-element-equals")
const currentElement = document.querySelector("[data-element-current]")
const previousElement = document.querySelector("[data-element-previous]")
const displayOperator = document.querySelector("[data-operator]")
const delButton = document.querySelector("[data-element-del]");

const calculator = new Calculator(currentElement, previousElement, displayOperator);

numberButtons.forEach((button) => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateScreen();
    })
})

clearButton.addEventListener('click', ()=>{
    calculator.clear();
    calculator.updateScreen();
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", ()=> {
        calculator.appendOperator(button.innerText);
        calculator.updateScreen();
    })
})

equalsButton.addEventListener("click", ()=> {
    calculator.calculate();
    calculator.updateScreen();
})

delButton.addEventListener("click", ()=> {
	calculator.deleteOperation();
	calculator.updateScreen();
})
