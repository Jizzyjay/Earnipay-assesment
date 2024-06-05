
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6kiKMixAmRpMGvKVK6rLmfKIJkgOHIBE",
  authDomain: "earnipay-f9075.firebaseapp.com",
  //  authDomain: "https://earnipay-assesment.vercel.app/",
  projectId: "earnipay-f9075",
  storageBucket: "earnipay-f9075.appspot.com",
  messagingSenderId: "448920952285",
  appId: "1:448920952285:web:213c3938cb76efdbefaa34"
};

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID 
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}