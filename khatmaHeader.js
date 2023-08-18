import { GUIManagerCl } from "./Classes/GUIManagerCl.js";
class DBKhatmaHeaderCl{
    constructor(number, dateFrom, dateTo){
        this.number = number,
        this.dateFrom = dateFrom,
        this.dateTo = dateTo
    }
}

class GuiKhatmaHeaderCl extends GUIManagerCl{
    constructor(DBKhatmaHeader) {

        super(DBKhatmaHeader)
        
        this.radioInputEl = document.createElement('input');
        this.labelEl = document.createElement('label');
        // this.tBtnEl = document.createElement('button') /////
  
        // this.iLeftEl = document.createElement('i')
        // this.divRightEl = document.createElement('div')
    }
    
    addToTable(DBKhatmaHeader){
        
        super.tdRowEl.appendChild(this.radioInputEl)
        super.tdRowEl.appendChild(this.labelEl)
        super(DBKhatmaHeader)
    }
}

