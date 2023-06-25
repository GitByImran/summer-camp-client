import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDggyXkqcOj__uxhdqTinWyqNwBO6kRplc",
  authDomain: "summer-camp-f78c5.firebaseapp.com",
  projectId: "summer-camp-f78c5",
  storageBucket: "summer-camp-f78c5.appspot.com",
  messagingSenderId: "509358784048",
  appId: "1:509358784048:web:0ba19401e14d5ed67d37f5",
  measurementId: "G-W6BMP1RFVM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
