
// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// // var khatmaNoEl = document.getElementById("khatmaNo").value


// const urlParams = new URLSearchParams(window.location.search);
// // console.log(urlParams.toString());
// const no = urlParams.get('no');

// var hizbPathInDB = "quran/" + no
// const hizbInDB = ref(database, hizbPathInDB)


// onValue(hizbInDB, function(snapshot) {
//     let hizbArray = Object.values(snapshot.val())   // Change JSON format to Array format
//     let hizb = snapshot.val()
    

//     document.getElementById("basmala").innerHTML = hizb.basmala
//     document.getElementById("hizbtext").innerHTML = hizb.hizbtext
//     // console.log(document.getElementById("basmala").innerHTML)

// })


//------------------------------------


// Get from Firebase Storage


// import { initializeApp } from "firebase/app";
// import { getStorage } from "firebase/storage";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   storageBucket: 'gs://read-the-quran.appspot.com'
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// console.log(app)

// // Initialize Cloud Storage and get a reference to the service
// const storage = getStorage(app);


//------------------

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getStorage, ref,getDownloadURL  } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js"

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDfT-HD5QDLx2wbT8Mc8ZYW63MWo7noT98",
    authDomain: "read-the-quran.firebaseapp.com",
    databaseURL: "https://read-the-quran-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "read-the-quran",
    storageBucket: "read-the-quran.appspot.com",
    messagingSenderId: "987026379254",
    appId: "1:987026379254:web:d4d2f9842240e5262477d7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage()


  // JavaScript code to fetch and read the JSON file from Firebase Storage
  async function fetchJSONFileFromFirebaseStorage() {
    const storageRef = ref(storage, "arab.json");
    // console.log(storageRef)
    const jsonFileRef = storageRef;
    console.log(jsonFileRef)
    
    // const uploadTask = uplodBytesResumable(storageRef,) 
        
    try {
      const url = await getDownloadURL(storageRef);
      console.log(url)
      const response = await fetch(url);
      const data = await response.json();

      // Now you can work with the 'data' object which contains the content of your JSON file.
      console.log(data);
      // Do something with the data
    } catch (error) {
      console.error(error);
    }
  }

  // Call the function to fetch and read the JSON file
  fetchJSONFileFromFirebaseStorage();
