import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCwG1hyeYvP7tRl5sTCma51sodNZbRB97o",
  authDomain: "car-dis.firebaseapp.com",
  projectId: "car-dis",
  storageBucket: "car-dis.firebasestorage.app",
  messagingSenderId: "749916410348",
  appId: "1:749916410348:web:9025735fef2750adecf0c9",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
