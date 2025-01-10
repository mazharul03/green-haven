
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:import.meta.env.VAITE_APIKEY,
  authDomain:import.meta.env.VAITE_AUTHDOMAIN,
  projectId:import.meta.env.VAITE_PROJECTID,
  storageBucket:import.meta.env.VAITE_STORAGEBUCKET,
  messagingSenderId:import.meta.env.VAITE_MESSAGINGSENDERID,
  appId:import.meta.env.VAITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;