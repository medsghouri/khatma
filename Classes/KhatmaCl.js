import {
  getDatabase,
  ref,
  update,
  onValue,
  set,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

import { GUIManagerCl } from "./GUIManagerCl.js";
import { DBManagerCl } from "./DBManagerCl.js";

//-------------------------------------------------------------------------------
// DB Class
//-------------------------------------------------------------------------------
export class DBKhatmaCl extends DBManagerCl {
  static addHizbSnapshotArray(hizbSnapshot, hizbSnapshotArray) {
    this.hizbSnapshot = hizbSnapshot;
    this.hizbSnapshotArray = hizbSnapshotArray;
  }

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
      });

      // Update in DB
      update(this.itemRef, { valid: "X" });
    } else {
      text = "You canceled!";
    }
  }
  // --- Create new Khatma ----------------------------------------------
  static addKhatmaInDB() {
    // Get Last Khatmahead and hizb
    this.getLastKhatma();

    // fill khatmahead and update in DB
    this.createNewKhatma();
    // rotate hizb_id and update in db (this must be implemented in hizb class)
  }

  static getLastKhatma() {
    [this.lastKhatma] = this.aSnapshot.slice(-1); // <To-Do> May be we should use snapshot.val instead</To-Do>
    // the following statemunt must be in hizb class
    [this.lastKhatmaHizbs] = this.hizbSnapshotArray.slice(-1); // <To-Do> May be we should use snapshot.val instead</To-Do>
  }

  static createNewKhatma() {
    // parse date and add one week
    const lastDateFrom = new Date(this.lastKhatma.dateFrom);
    const lastDateTo = new Date(this.lastKhatma.dateTo);

    this.oNewDBKhatma = new DBKhatmaCl({
      no: this.lastKhatma.no + 1,
      dateFrom: new Date(lastDateFrom).setDate(lastDateFrom.getDate() + 7),
      dateTo: new Date(lastDateTo).setDate(lastDateTo.getDate() + 7),
      valid: "",
    });

    console.log(this.oNewDBKhatma.formatDate(this.oNewDBKhatma.item.dateTo));
    console.log(this.oNewDBKhatma.itemPath);
    const oItem = this.oNewDBKhatma;

    // update(this.oNewDBKhatma.itemRef, { no: oItem.no });
    // Specify the location where you want to add the new item
    // const newItemRef = this.database.ref("khatmaHead").child("436"); // Use the new item's key
    const newItemRef = ref(this.database, "khatmaHead");

    // New item data to add
    const newItemData = {
      no: 436,
      valid: true,
    };

    // Add the new item data using set()
    update(newItemRef, newItemData).then(() => {
      console.log("New item added successfully.");
    });
  }
  formatDate(date) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Intl.DateTimeFormat("de-DE", options).format(date);
  }
  static getCurrentKhatmaNo() {
    let sCurrentKhatmaNo;
    DBKhatmaCl.aSnapshot.forEach((item) => {
      if (item.valid === "X") {
        sCurrentKhatmaNo = item.no;
      }
    });
    return sCurrentKhatmaNo;
  }
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
    // let aLastItem = DBKhatmaCl.aItems[DBKhatmaCl.aItems.length - 1];
    DBKhatmaCl.addKhatmaInDB();
  }
}
