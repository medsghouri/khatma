import {
  getDatabase,
  ref,
  update,
  onValue,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// ---------------------------------------------------------------------------------------------
// User
// ---------------------------------------------------------------------------------------------

export class DBManagerCl {
  static aObjects = [];
  static initializeDB(app, headPathDB) {
    this.database = getDatabase(app);
    this.headPathDB = headPathDB; //"/khatma2/432/khatma/"; // later: "/khatamat/432/khatma/"
    this.headRef = ref(this.database, this.headPathDB);
  }
  static setArray(aItems) {
    this.aItems = aItems;
  }

  constructor(item, sPath) {
    this.item = item;
    // this.constructor = Using it helps avoid using hard-coded 'DBManagerCl' and enables inheritance.
    this.itemPath = this.constructor.headPathDB + sPath;
    console.log(this.itemPath);
    this.itemRef = ref(this.constructor.database, this.itemPath);
    this.constructor.aObjects.push(this);
  }

  // --- Udate Khatma Status in DB ---------------------------------------------------------
  updateInDB(item) {}
}
