import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  update,
  onValue,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { RowCl } from "./Classes/RowCl.js";
import { UserCl } from "./Classes/UserCl.js";

import { GUIManagerCl } from "./Classes/GUIManagerCl.js";
import { GuiUserCl } from "./Classes/User1Cl.js";
import { GuiKhatmaCl } from "./Classes/KhatmaCl.js";

const appSettings = {
  databaseURL:
    "https://read-the-quran-default-rtdb.europe-west1.firebasedatabase.app/",
};

// ---------------------------------------------------------------------------------------------
// Snapshot
// ---------------------------------------------------------------------------------------------
// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const khatmaPathDB = "/khatma2/432/khatma/"  // later: "/khatamat/432/khatma/"
// const khatmaRef = ref(database, khatmaPathDB)

// const dbRef = ref(getDatabase());
// get(child(dbRef, `/user`)).then((snapshot) => {
//     var ssUsers = snapshot

//     onValue(khatmaRef, function (snapshot) {
//         var ssKhatma = snapshot
//         // Main
//         //main(ssUsers, ssKhatma, database, khatmaPathDB)

//     })

// }).catch((error) => {
//     console.error(error);
// });

// ---------------------------------------------------------------------------------------------
// Tabstrips
// ---------------------------------------------------------------------------------------------
var homeTab = document.getElementById("homeTab");
var userTab = document.getElementById("userTab");
var bookTab = document.getElementById("bookTab");

const app = initializeApp(appSettings);
const database = getDatabase(app);
const khatmaPathDB = "/khatma2/432/khatma/"; // later: "/khatamat/432/khatma/"
const khatmaRef = ref(database, khatmaPathDB);

const dbRef = ref(getDatabase());

//// Beginn

// ---------------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------------
homeTab.addEventListener("click", function () {
  alert("homeee");
  main(ssUsers, ssKhatma, database, khatmaPathDB);
});

// ---------------------------------------------------------------------------------
// User
// ---------------------------------------------------------------------------------
userTab.addEventListener("click", function () {
  alert("user");
  user(ssUsers, database);
});

// ---------------------------------------------------------------------------------
// Book
// ---------------------------------------------------------------------------------
bookTab.addEventListener("click", function () {
  alert("book");
  book(ssKhatma, database);
});

//// End

// --------------------------------------------------------------------------------------------------------------------------------------{
// get(child(dbRef, `/user`))
//   .then((snapshot) => {
//     var ssUsers = snapshot;

//     onValue(khatmaRef, function (snapshot) {
//       var ssKhatma = snapshot;

//       //   // ---------------------------------------------------------------------------------
//       //   // Home
//       //   // ---------------------------------------------------------------------------------
//       //   homeTab.addEventListener("click", function () {
//       //     alert("home");
//       //     main(ssUsers, ssKhatma, database, khatmaPathDB);
//       //   });

//       //   // ---------------------------------------------------------------------------------
//       //   // User
//       //   // ---------------------------------------------------------------------------------
//       //   userTab.addEventListener("click", function () {
//       //     alert("user");
//       //     user(ssUsers, database);
//       //   });

//       //   // ---------------------------------------------------------------------------------
//       //   // Book
//       //   // ---------------------------------------------------------------------------------
//       //   bookTab.addEventListener("click", function () {
//       //     alert("book");
//       //     book(ssKhatma, database);
//       //   });
//     });
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// // })

// // ---------------------------------------------------------------------------------------------
// // Main
// // ---------------------------------------------------------------------------------------------
// function main(ssUsers, ssKhatma, database, khatmaPathDB) {
//   let aKhatma = Object.values(ssKhatma.val()); // Change JSON format to Array format
//   let aUser = Object.values(ssUsers.val()); // Change JSON format to Array format

//   RowCl.clearUserTbodyEl();
//   UserCl.setDB(database, khatmaPathDB);

//   for (let i = 0; i < aUser.length; i++) {
//     // Join
//     var currentUser = aUser.find((obj) => {
//       return obj.user_id === aKhatma[i].user_id;
//     });
//     //
//     // Initiate Objects
//     var newUser = new UserCl(
//       aKhatma[i].hizb_id,
//       aKhatma[i].user_id,
//       currentUser.name,
//       //result.name, // aUser[aKhatma[i].user_id-1].name, // join user and khatma
//       aKhatma[i].status
//     );

//     var Row = new RowCl(newUser);

//     // Call Methods
//     Row.addToTable(newUser);
//     Row.changeColor(newUser);
//     Row.search(newUser);
//   }
// }

// // ---------------------------------------------------------------------------------------------
// // User
// // ---------------------------------------------------------------------------------------------
// function user(ssUsers, database) {
//   const userPathDB = "/user/"; // later: "/khatamat/432/khatma/"
//   const userRef = ref(database, userPathDB);

//   GuiUserCl.setDB(database, userPathDB);
//   let aUser = Object.values(ssUsers.val()); // Change JSON format to Array format

//   for (let i = 0; i < aUser.length; i++) {
//     // Initiate Objects
//     var oUser1 = new GuiUserCl(aUser[i]);
//     var oGuiItem = new GUIManagerCl(aUser[i]);

//     // Call Methods
//     oUser1.addToTable(oUser1);
//     // Row.changeColor(newUser)
//     // Row.search(newUser)
//   }
// }

// // ---------------------------------------------------------------------------------------------
// // Book
// // ---------------------------------------------------------------------------------------------
// function book(ssKhatma, database) {
//   const khatmaPathDB = "/khatma2/"; // later: "/khatamat/432/khatma/"
//   const khatmaRef = ref(database, khatmaPathDB);

//   GuiKhatmaCl.setDB(database, khatmaPathDB);
//   let aKhatma = Object.values(ssKhatma.val()); // Change JSON format to Array format

//   for (let i = 0; i < aKhatma.length; i++) {
//     // Initiate Objects
//     console.log(aKhatma[i]);
//     var oKhatma = new GuiKhatmaCl(aKhatma[i]);
//     var oGuiItem = new GUIManagerCl(aKhatma[i]);

//     // Call Methods
//     oKhatma.addToTable(oKhatma);
//     // Row.changeColor(newUser)
//     // Row.search(newUser)
//   }
// }


//-------------------------------------------------------------------------------------