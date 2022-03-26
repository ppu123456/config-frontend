
import { initializeApp } from "firebase/app"
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBrkOAHQa25E7pQXzlen90uDToq7vi-xY",
  authDomain: "project-psi-7fdf9.firebaseapp.com",
// databaseURL: "https://project-psi-7fdf9-default-rtdb.firebaseio.com",
  projectId: "project-psi-7fdf9",
  storageBucket: "project-psi-7fdf9.appspot.com",
  messagingSenderId: "18672571756",
  appId: "1:18672571756:web:daed25b581bac2c16b4f49"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const onChanged = onAuthStateChanged
