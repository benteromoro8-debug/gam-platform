// GAM Platform - Firebase Configuration

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyB_Hd_LkXjPKMyUJUD-ob2m4rOFepm9niU",
    authDomain: "gam-platform-59f1c.firebaseapp.com",
    projectId: "gam-platform-59f1c",
    storageBucket: "gam-platform-59f1c.firebasestorage.app",
    messagingSenderId: "423635446027",
    appId: "1:423635446027:web:7b42cd097b928ed7671a0e"
};

const app = initializeApp(firebaseConfig);

export { app };
