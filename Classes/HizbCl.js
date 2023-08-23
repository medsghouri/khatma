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
export class DBHizbCl extends DBManagerCl {
  constructor(item) {
    let sPath = item.hizb_id;
    super(item, sPath);
  }

  // --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item) {
    // Popup to confirm
    let text = " تأكيد ";
    if (confirm(text) == true) {
      text = "You pressed OK!";

      // Update in DB
      update(this.itemRef, { valid: "X" });
    } else {
      text = "You canceled!";
    }
  }
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiHizbCl extends GUIManagerCl {
  constructor(item, oDBHizb) {
    super(item);

    this.oDBHizb = oDBHizb;

    // this.iLeftEl = document.createElement('i')
    // this.divRightEl = document.createElement('div')
  }

  addToTable() {
    // add
    super.addToTable(this.item);
    this.tdRowEl.innerHTML = this.item.hizb_id;
  }

  onClickRow() {
    this.oDBHizb.updateInDB(this.item);
  }
}
