class CalcController {

    constructor() {
        this._operation = [];
        this._displayCalc = document.getElementById("display");
        this.dateEl = document.getElementById("data");
        this.timeEl = document.getElementById("hora");

        this._currentDate;
        this._currentTime;
        this.initialize();
        this.initButtonsEvents();

    }


    initialize() {

        this.setDisplayDateTime();
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);

        this.setLastNumberToDisplay();

    }


    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        })

    }


    clearAll() {
        this._operation = [];
        this.setLastNumberToDisplay();
    }

    clearyEntry() {
        this._operation.pop();
        this.setLastNumberToDisplay();
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
    }

    pushOperation(value) {
        this._operation.push(value);

        if (this._operation.length > 3) {

            this.calc();
            console.log(this._operation);
        }
    }

    calc() {
        let last = this._operation.pop();

        let result = eval(this._operation.join(""));

        if (last == '%') {

            result /= 100;

            this._operation = [result];

        } else {

            this._operation = [result, last];
        }

        this.setLastNumberToDisplay();
    }

    setLastNumberToDisplay() {
        let lastNumber;

        for (let i = this._operation.length - 1; i >= 0; i--) {

            if (!this.isOperator(this._operation[i])) {
                lastNumber = this._operation[i];
                break;
            }
        }

        if (!lastNumber) {
            lastNumber = 0
        }

        this.displayCalc = lastNumber;
    }

    addOperation(value) {

        if (isNaN(this.getLastOperation())) {

            if (this.isOperator(value)) {

                this.setLastOperation(value);

            } else if (isNaN(value)) {

                console.log('Outra coisa');

            }
            else {

                this.pushOperation(value);

                this.setLastNumberToDisplay();

            }
        } else {

            if (this.isOperator(value)) {

                this.pushOperation(value);

            }
            else {

                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.setLastNumberToDisplay();

            }
        }
    }

    setError() {
        this.displayCalc = "Error";
    }

    execBtn(value) {

        switch (value) {
            case "ac":
                this.clearAll();
                break;
            case 'ce':
                this.clearyEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':
                this.addOperation('=');
                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
        }
    }

    initButtonsEvents() {
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', (e) => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);

            })

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', (e) => {

                btn.style.cursor = 'pointer';

            })

        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate;
        this.displayTime = this.currentTime;
    }

    get displayTime() {
        return this.timeEl.innerHTML;
    }

    set displayTime(value) {
        this.timeEl.innerHTML = value;
    }

    get displayDate() {
        return this.dateEl.innerHTML;
    }

    set displayDate(value) {
        this.dateEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalc.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalc.innerHTML = value;
    }

    get currentDate() {
        return new Date().toLocaleDateString('pt-BR');
    }

    set currentDate(value) {
        this.currentDate = value;
    }

    get currentTime() {
        return new Date().toLocaleTimeString('pt-BR');
    }

    set currentTime(value) {
        this.currentTime = value;
    }
}