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
export class DBUserCl extends DBManagerCl {
  // --- Constructor -----------------------------------------------------------
  constructor(item) {
    super(item);
  }

  // --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item, itemInnerHTML) {
    // Popup to confirm
    let text = " تأكيد ";
    if (confirm(text) == true) {
      text = "You pressed OK!";
      // Update Status in DB
      var itemPath = DBUserCl.headPathDB + item.user_id;
      var itemRef = ref(DBUserCl.database, itemPath);

      update(itemRef, { name: itemInnerHTML });
    } else {
      text = "You canceled!";
    }
  }
}
//-------------------------------------------------------------------------------
// GUI Class
//-------------------------------------------------------------------------------
export class GuiUserCl extends GUIManagerCl {
  constructor(item, oDBUser) {
    super(item);
    this.oDBUser = oDBUser;
    this.tBtnEl.addEventListener("click", this.onClickBtn.bind(this));
  }

  addToTable(item) {
    super.addToTable(item);
    this.tdRowEl.innerHTML = this.item.name;
    this.tdRowEl.contentEditable = "true";
  }

  onClickBtn() {
    this.oDBUser.updateInDB(this.item, this.tdRowEl.innerHTML);
  }
  changeColor(user) {}

  // // //     // ---------------------------------------------------------------------------------------------
  // // //     //      PAI
  // // //     // ---------------------------------------------------------------------------------------------

  // // //     // --- on Searching ----------------------------------------------------------------------------
  // // //     search(user) {
  // // //         var lo_Row = this

  // // //         RowCl.searchEl.addEventListener("keyup", function () {
  // // //             // console.log(user)
  // // //             lo_Row.filter()
  // // //         })
  // // //     }

  // // //     // --- Filter users based on the search --------------------------------------------------------
  // // //     filter() {
  // // //         var filter, txtValue;
  // // //         filter = RowCl.searchEl.value.toUpperCase();

  // // //         txtValue = this.tdRowEl.textContent || this.tdRowEl.innerText;

  // // //         if (txtValue.toUpperCase().indexOf(filter) > -1) {
  // // //             this.tRowEl.style.display = "";
  // // //         } else {
  // // //             this.tRowEl.style.display = "none";
  // // //         }

  // // //     }

  // // // }
}
