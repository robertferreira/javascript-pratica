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
    }


    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach((event) => {
            element.addEventListener(event, fn, false);
        })

    }


    clearAll() {
        this._operation = [];
    }

    clearyEntry() {
        this._operation.pop();
    }

    getLastOperation(){
        return this._operation[this._operation.length-1];
    }

    addOperation(value) {
        this._operation.push(value);
        console.log(this._operation);
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

                break;
            case 'subtracao':

                break;
            case 'divisao':

                break;
            case 'multiplicacao':

                break;
            case 'porcento':

                break;
            case 'igual':

                break;
            case 'ponto':

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