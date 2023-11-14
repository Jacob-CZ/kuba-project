import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {initializeApp} from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


  export default function Auth() {
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
    const auth = getAuth(app);
    let [signed, setSigned] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    
    function createUser() {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      
      // Signed up 
    setSigned(true);
    // ...
    
  }
    )
    .catch((error) => {
    
      const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    
    // ..
    });
  }
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    }
    const [jmeno,setJmeno] = useState("");
    const [prijmeni,setPrijmeni] = useState("");
    const [email,setEmail] = useState("");
    const [telefon,setTelefon] = useState("");
    const [zprava,setZprava] = useState("");
    return (
      <div className='bg-green-800 h-screen w-screen' >
        <button onClick={() => addData(jmeno, prijmeni, email, telefon, zprava)}>hello</button>
        <input type="text" onChange={(e) => setJmeno(e.target.value)} placeholder='jmeno'/>
        <input type="text" onChange={(e) => setPrijmeni(e.target.value)} placeholder='prijmeni'/>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
        <input type="number" onChange={(e) => setTelefon(e.target.value)} placeholder='telefon'/>
        <input type="text" onChange={(e) => setZprava(e.target.value)} placeholder='zprava'/>
      </div>
    );
  } 