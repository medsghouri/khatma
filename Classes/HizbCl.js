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

  //   --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item) {
    //     // Popup to confirm
    //     let text = " تأكيد ";
    //     if (confirm(text) == true) {
    //       text = "You pressed OK!";
    //       // Update in DB
    //       update(this.itemRef, { valid: "X" });
    //     } else {
    //       text = "You canceled!";
    //     }
  }
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiHizbCl extends GUIManagerCl {
  constructor(item, oDBHizb, oDBUser) {
    super(item);

    this.oDBHizb = oDBHizb;
    this.oDBUser = oDBUser;

    // this.iLeftEl = document.createElement('i')
    // this.divRightEl = document.createElement('div')
  }

  addToTable() {
    // add
    super.addToTable(this.item);
    console.log(this.oDBUser);

    // Maybe consider writing it this way in Example below ???
    // const obj1 = { foo: 'bar', x: 42 };
    //const obj2 = { foo: 'baz', y: 5 };
    // const mergedObj = { ...obj1, ...obj2 }; // { foo: "baz", x: 42, y: 5 }
    this.tdRowEl.innerHTML =
      ` الحزب ` + this.item.hizb_id + ` - ` + this.oDBUser.item.name;
  }

  onClickRow() {
    // this.oDBHizb.updateInDB(this.item);
  }
}
