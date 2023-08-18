
import { getDatabase, ref, update, onValue, get, child } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// ---------------------------------------------------------------------------------------------
// User
// ---------------------------------------------------------------------------------------------

export class UserCl {
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


}

