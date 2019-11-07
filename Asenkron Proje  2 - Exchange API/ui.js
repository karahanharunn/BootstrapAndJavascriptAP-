class UI {

    constructor(firstSelect, secondSelect) {
        this.firstSelected = firstSelect;
        this.secondSelected = secondSelect;
        this.outputFirst = document.querySelector("#outputFirst");
        this.outputSecond = document.querySelector("#outputSecond");
        this.outputResult = document.querySelector("#outputResult");
    }

    changeFirst(){
        this.outputFirst.textContent = this.firstSelected.options[this.firstSelected.selectedIndex].textContent;
    }
    changeSecond(){
        this.outputSecond.textContent = this.secondSelected.options[this.secondSelected.selectedIndex].textContent;
    }
    display(data){
        this.outputResult.value = data ; 
    }
}