
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
  static setDB(database, headPathDB) {
    this.database = database;
    this.headPathDB = headPathDB;
    console.log(headPathDB);
  }

  static selectFromDB(app, headPathDB) {
    const database = getDatabase(app);
    const headPathDB = this.headPathDB //"/khatma2/432/khatma/"; // later: "/khatamat/432/khatma/"
    const headRef = ref(database, headPathDB);

    const dbRef = ref(getDatabase());

    onValue(headRef, function (snapshot) {
      main(snapshot);
    });
  }
  static main(snapshot) {}

  constructor(item) {
    this.item;
  }

  // --- Udate Khatma Status in DB ---------------------------------------------------------
  updateInDB(item) {
    // Popup to confirm
    // let text = " تأكيد قراءة الحزب ";
    // if (confirm(text) == true) {
    //     text = "You pressed OK!";
    //     // Update Status in DB
    //     var khatmaRowPath = UserCl.khatmaPathDB + user.hizbId
    //     console.log(user.hizbId)
    //     var khatmaRowRef = ref(UserCl.database, khatmaRowPath);
    //     if (user.status == '') {
    //         update(khatmaRowRef, { 'status': 'X' })
    //     }
    //     else {
    //         update(khatmaRowRef, { 'status': '' })
    //     }
    // } else {
    //     text = "You canceled!";
    // }
  }
}
