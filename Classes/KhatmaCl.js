import {
  getDatabase,
  ref,
  update,
  onValue,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import { GUIManagerCl } from "./GUIManagerCl.js";
import { DBManagerCl } from "./DBManagerCl.js";
//-------------------------------------------------------------------------------
// DB Class
//-------------------------------------------------------------------------------
export class DBKhatmaCl extends DBManagerCl {
  constructor(item) {
    super(item);
  }
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiKhatmaCl extends GUIManagerCl {
  constructor(item) {
    super(item);

    this.radioInputEl = document.createElement("input");
    this.labelEl = document.createElement("label");
    // this.tBtnEl = document.createElement('button') /////

    // this.iLeftEl = document.createElement('i')
    // this.divRightEl = document.createElement('div')
  }

  addToTable(item) {}
}
