import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTYtFURoPDLRlBJzLcfk4zpo1Imd20J6c",
  authDomain: "house-marketplace-app-f8372.firebaseapp.com",
  projectId: "house-marketplace-app-f8372",
  storageBucket: "house-marketplace-app-f8372.appspot.com",
  messagingSenderId: "748520992546",
  appId: "1:748520992546:web:21fe0e54fde7b9f5b4bf7b"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();