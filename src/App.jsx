//import { useState } from 'react'
import Home from './pages/home';'./pages/home';
import Auth from './pages/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
 

function App() {
  

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="auth" element={<Auth/>} />
        </Routes>
      </main>
    </BrowserRouter>
    )

}

export default App
