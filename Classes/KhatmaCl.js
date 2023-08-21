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

  // --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item) {
    // Popup to confirm
    let text = " تأكيد ";
    if (confirm(text) == true) {
      text = "You pressed OK!";

      // clear all flieds "valid"
      // console.log(DBKhatmaCl.aItems);
      for (let i = 0; i < DBKhatmaCl.aItems.length; i++) {
        var itemPath =
          DBKhatmaCl.headPathDB + DBKhatmaCl.aItems[i].head.no + "/head/";
        var itemRef = ref(DBKhatmaCl.database, itemPath);

        update(itemRef, { valid: "" });
      }
      // Update in DB
      var itemPath = DBKhatmaCl.headPathDB + this.item.no + "/head/";
      console.log(this.item);

      var itemRef = ref(DBKhatmaCl.database, itemPath);

      update(itemRef, { valid: "X" });
    } else {
      text = "You canceled!";
    }
  }
 // --- Create new Khatma ----------------------------------------------
  createNewInDB(){}
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiKhatmaCl extends GUIManagerCl {
  constructor(item, oDBKhatma) {
    super(item);
    this.oDBKhatma = oDBKhatma;
    // this.tRowEl.addEventListener("click", this.onClickRow.bind(this));
    // this.tBtnEl = document.createElement('button') /////

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
  // onClickBtn() {
  //   console.log("click");
  // }
  onClickRow() {
    this.oDBKhatma.updateInDB(this.item);
  }
}
