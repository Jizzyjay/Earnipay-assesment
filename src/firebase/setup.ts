
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC6kiKMixAmRpMGvKVK6rLmfKIJkgOHIBE",
  authDomain: "earnipay-f9075.firebaseapp.com",
  projectId: "earnipay-f9075",
  storageBucket: "earnipay-f9075.appspot.com",
  messagingSenderId: "448920952285",
  appId: "1:448920952285:web:213c3938cb76efdbefaa34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);