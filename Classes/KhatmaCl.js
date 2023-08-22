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
    let sPath = item.no;
    super(item, sPath);
  }

  // --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item) {
    // Popup to confirm
    let text = " تأكيد ";
    if (confirm(text) == true) {
      text = "You pressed OK!";

      // clear all flieds "valid"
      DBKhatmaCl.aObjects.forEach((obj) => {
        update(obj.itemRef, { valid: "" });
        console.log(obj.itemPath);
      });

      // Update in DB
      update(this.itemRef, { valid: "X" });
    } else {
      text = "You canceled!";
    }
  }
  // --- Create new Khatma ----------------------------------------------
  createNewInDB() {}
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiKhatmaCl extends GUIManagerCl {
  constructor(item, oDBKhatma) {
    super(item);

    this.oDBKhatma = oDBKhatma;

    // this.iLeftEl = document.createElement('i')
    // this.divRightEl = document.createElement('div')
  }

  addToTable() {
    // add
    super.addToTable(this.item);
    this.tdRowEl.innerHTML = this.item.no;

    // hide
    this.tBtnEl.hidden = "true";
  }

  onClickRow() {
    this.oDBKhatma.updateInDB(this.item);
  }

  // --- Nicht vererbte Methoden
  static addKhatmaBtn() {
    GuiKhatmaCl.addKhatmaBtnEl = document.createElement("button");
    GuiKhatmaCl.addKhatmaBtnEl.innerText = "Create New";
    this.tBodyEl.appendChild(GuiKhatmaCl.addKhatmaBtnEl);
    // Click evetns
    GuiKhatmaCl.addKhatmaBtnEl.addEventListener(
      "click",
      GuiKhatmaCl.onAddKhatma.bind(this)
    );
  }

  static onAddKhatma() {
    let aLastItem = DBKhatmaCl.aItems[DBKhatmaCl.aItems.length - 1];
  }
}
