import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";



const firebaseConfig = {
    apiKey: "AIzaSyB-KWok6Vkk56rjVyLgosWDrLagwfoA8BE",
    authDomain: "push-notification-c037d.firebaseapp.com",
    projectId: "push-notification-c037d",
    storageBucket: "push-notification-c037d.appspot.com",
    messagingSenderId: "501866431327",
    appId: "1:501866431327:web:dfad5184d0fad606e0acea",
    measurementId: "G-189RXGXGV7"
  };


  export const app = initializeApp(firebaseConfig);
  export const messaging = getMessaging(app);