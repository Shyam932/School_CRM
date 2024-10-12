
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "school-management-app-e0441.firebaseapp.com",
  projectId: "school-management-app-e0441",
  storageBucket: "school-management-app-e0441.appspot.com",
  messagingSenderId: "737453720405",
  appId: "1:737453720405:web:ece2a5450c4840ba1e65dc",
  measurementId: "G-N6K9SW1RPJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
