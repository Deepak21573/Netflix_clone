import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDVpXeNKPZ0Pv6wKpHcnCpLAB2cmcrX3Uw",
  authDomain: "netflix-clone-a8dfa.firebaseapp.com",
  projectId: "netflix-clone-a8dfa",
  storageBucket: "netflix-clone-a8dfa.appspot.com",
  messagingSenderId: "315483588142",
  appId: "1:315483588142:web:2c3fa702da5b1be47481bf",
  measurementId: "G-CYNNM5PJCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);