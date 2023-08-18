import { GUIManagerCl } from "./GUIManagerCl.js";
export class GuiUserCl extends  GUIManagerCl {

    constructor(item) {
        super(item)
    }
    
    addToTable(item) {
        super.addToTable(item)
        this.tdRowEl.innerHTML = this.item.name
    }

    changeColor(user) {

    }













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