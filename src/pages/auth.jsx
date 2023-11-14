import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import addData from './database';




  export default function Auth() {
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