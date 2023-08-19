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
    this.item;
  }

  // --- Udate Khatma Status in DB ---------------------------------------------------------
  updateInDB(item) {
    // Popup to confirm
    let text = " تأكيد قراءة الحزب ";
    if (confirm(text) == true) {
      text = "You pressed OK!";
      // Update Status in DB
      var khatmaRowPath = UserCl.khatmaPathDB + user.hizbId;
      
      var khatmaRowRef = ref(UserCl.database, khatmaRowPath);
      if (user.status == "") {
        update(khatmaRowRef, { status: "X" });
      } else {
        update(khatmaRowRef, { status: "" });
      }
    } else {
      text = "You canceled!";
    }
  }
}
