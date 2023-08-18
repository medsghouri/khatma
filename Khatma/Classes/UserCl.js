
import { getDatabase, ref, update, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// ---------------------------------------------------------------------------------------------
// User
// ---------------------------------------------------------------------------------------------

export class UserCl {
    static searchEl = document.getElementById("search")
    static statusEl = document.getElementById("status")
    static userTbodyEl = document.getElementById('userTbody');

    static setDB(database, khatmaPathDB) {
        this.database = database
        this.khatmaPathDB = khatmaPathDB
        console.log(khatmaPathDB)
    }

    constructor(hizbId, userId, name, status) {
        this.userId = userId
        this.name = name
        this.hizbId = hizbId
        this.status = status
    }


    // --- Udate Khatma Status in DB ---------------------------------------------------------
    updateStatusInDB(user) {
        // Popup to confirm

        let text = " تأكيد قراءة الحزب ";
        if (confirm(text) == true) {
            text = "You pressed OK!";
            // Update Status in DB
          
            var khatmaRowPath = UserCl.khatmaPathDB + user.hizbId
            console.log(user.hizbId)
            
            var khatmaRowRef = ref(UserCl.database, khatmaRowPath);

            if (user.status == '') {
                update(khatmaRowRef, { 'status': 'X' })
            }
            else {
                update(khatmaRowRef, { 'status': '' })
            }
        } else {
            text = "You canceled!";
        }
    }


    // --- Change Color of each Row ----------------------------------------------------------------
    // changeColor() {

    //     var iLeftEl = document.getElementById("iLeft" + this.hizbId)

    //     iLeftEl.style.cssFloat = "left"

    //     if (this.status == 'X') { // Green
    //         // -- Change color of row --
    //         document.getElementById("tdRow" + this.hizbId).style.backgroundColor = '#c7e5c9' //Lightgreen
    //         document.getElementById("tdRow" + this.hizbId).style.borderColor = '#224823' //Darkgreen

    //         // -- change icon of row
    //         iLeftEl.className = "fa fa-check"
    //         iLeftEl.style.fontSize = "30px"
    //         iLeftEl.style.color = '#224823'

    //     }
    //     else { // Red
    //         // -- Change color of row --
    //         document.getElementById("tdRow" + this.hizbId).style.backgroundColor = 'lightred'
    //         document.getElementById("tdRow" + this.hizbId).style.borderColor = '#73000c' //Darkgreen

    //         // -- change icon of row
    //         iLeftEl.className = "fa fa-times"
    //         iLeftEl.style.fontSize = "30px"
    //         iLeftEl.style.color = '#73000c'
    //     }
    // }
}

