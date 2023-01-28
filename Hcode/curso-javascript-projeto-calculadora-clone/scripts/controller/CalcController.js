class CalcController {

    constructor(){

        this.displayCalEl = document.getElementById("display");
        this.dateEl = document.getElementById("data");
        this.timeEl = document.getElementById("hora");

        this._currentDate;
        this._currentTime;
        this.initialize();
        this.initButtonsEvents();

    }


    initialize(){

        this.setDisplayDateTime();
        setInterval( () => {
            this.setDisplayDateTime();
        } , 1000);
    }


    initButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach( (btn, index) => {
            
            btn.addEventListener('click', e => {
                console.log(btn.className.baseVal.replace("btn-", ""));
            })

        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate;
        this.displayTime = this.currentTime;
    }

    get displayTime(){
        return this.timeEl.innerHTML;
    }

    set displayTime(value){
        this.timeEl.innerHTML = value;
    }

    get displayDate(){
        return this.dateEl.innerHTML;
    }

    set displayDate(value){
        this.dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalc.innerHTML = value;
    }

    get currentDate(){
        return new Date().toLocaleDateString('pt-BR');
    }

    set currentDate(value){
        this.currentDate = value;
    }

    get currentTime(){
        return new Date().toLocaleTimeString('pt-BR');
    }

    set currentTime(value){
        this.currentTime = value;
    }
}