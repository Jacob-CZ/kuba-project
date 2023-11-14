import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtyOkN3RQ1_fJJtgbVVe-dcacLUAsWK30",
    authDomain: "planetayurveda-1847d.firebaseapp.com",
    databaseURL: "https://planetayurveda-1847d-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "planetayurveda-1847d",
    storageBucket: "planetayurveda-1847d.appspot.com",
    messagingSenderId: "418900908753",
    appId: "1:418900908753:web:2598f36008d2de639e03f0",
    measurementId: "G-B0PXPMJXY7"
  };
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export default async function addData(jmeno, prijmeni, email, telefon, zprava) {
    
    try {
        const docRef = await addDoc(collection(db, "produkty"), {
          first: jmeno,
          last: prijmeni,
          email: email,
          telefon: telefon,
          zprava: zprava,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }

