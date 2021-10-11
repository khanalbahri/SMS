// import { firebase } from "firebase";
import { firebase } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBCSCKNIgZw3f4ijNsJnWRby3CrQKEHV-c",
    authDomain: "olxreactnative-fcadc.firebaseapp.com",
    projectId: "olxreactnative-fcadc",
    storageBucket: "olxreactnative-fcadc.appspot.com",
    messagingSenderId: "449784665498",
    appId: "1:449784665498:web:30e327d6420ef80ab6d623",
    measurementId: "G-NS4V6PKECP"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
export default firebase;