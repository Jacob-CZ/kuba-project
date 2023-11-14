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
    return (
      <div>
      {(signed) && <div>signed in</div>}
      <div>
        <input type="text" className='email' onChange={handleEmailChange}/>
      </div>
      <div>
        <input type="password" className='password' onChange={handlePasswordChange}/>
      </div>
      <div>
        <button onClick={createUser}>cvjhgjfhgjfgjhfghjfgh</button>
        {email}
      </div>
      </div>
    );
  } 