// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE66Ku2N63rWCUzqy1obJ6cCEnupBmDBg",
  authDomain: "x-clone-28951.firebaseapp.com",
  projectId: "x-clone-28951",
  storageBucket: "x-clone-28951.appspot.com",
  messagingSenderId: "949396977934",
  appId: "1:949396977934:web:e1540b071774ba39917f5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//! yetkilendirme kurulumu
export const auth = getAuth(app);

// google sağlayıcısı kurulum
export const provider = new GoogleAuthProvider();

// veritabanının referansını alama
export const db = getFirestore(app);

// medya'ları depolayıcğımız yer
export const storage = getStorage(app);