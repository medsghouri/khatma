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
// DB
//-------------------------------------------------------------------------------
export class DBUserCl extends DBManagerCl {
  //------  Main  ---------------------------------------------------------------
  static main(app, headPathDB) {
    super.initializeDB(app, headPathDB);
    let headRef = this.headRef;
    onValue(headRef, function (snapshot) {
      let aItems = Object.values(snapshot.val()); // Change JSON format to Array format

      for (let i = 0; i < aItems.length; i++) {
        // Initiate Objects
        var oGuiItem = new GuiUserCl(aItems[i]);

        // Call Methods
        oGuiItem.addToTable(oGuiItem);
        // Row.changeColor(newUser)
        // Row.search(newUser)
      }
    });
  }
  // --- Constructor -----------------------------------------------------------
  constructor(item) {
    this.item;
  }
  // --- Udate Khatma Status in DB ----------------------------------------------
  updateInDB(item) {
    
  }
}
//-------------------------------------------------------------------------------
// GUI
//-------------------------------------------------------------------------------
export class GuiUserCl extends GUIManagerCl {
  constructor(item) {
    super(item);
  }

  addToTable(item) {
    super.addToTable(item);
    this.tdRowEl.innerHTML = this.item.name;
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
