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
  static initializeDB(app, headPathDB) {
    this.database = getDatabase(app);
    this.headPathDB = headPathDB; //"/khatma2/432/khatma/"; // later: "/khatamat/432/khatma/"
    this.headRef = ref(this.database, this.headPathDB);
  }

  constructor(item) {
    this.item = item;
  }

  // --- Udate Khatma Status in DB ---------------------------------------------------------
  updateInDB(item) {

  }
}
