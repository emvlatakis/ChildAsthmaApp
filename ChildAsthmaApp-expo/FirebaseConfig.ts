// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXS9HGCQOM4mLJ9Lp4rTaNbXziuoAgR_0",
    authDomain: "childasthmaapp.firebaseapp.com",
    projectId: "childasthmaapp",
    storageBucket: "childasthmaapp.firebasestorage.app",
    messagingSenderId: "465254539425",
    appId: "1:465254539425:web:da840f91ed7a3107fc1w0e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);