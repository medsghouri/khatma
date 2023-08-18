import { GUIManagerCl } from "./GUIManagerCl.js";

export class GuiKhatmaCl extends GUIManagerCl{
    constructor(item) {

        super(item)
        
        this.radioInputEl = document.createElement('input');
        this.labelEl = document.createElement('label');
        // this.tBtnEl = document.createElement('button') /////
  
        // this.iLeftEl = document.createElement('i')
        // this.divRightEl = document.createElement('div')
    }
    
    addToTable(DBKhatmaHeader){

    }
}

