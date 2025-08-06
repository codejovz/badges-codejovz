import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Centro } from './components/Centro.jsx';
import  {Faq}  from './pages/Faq.jsx';
import { SpecialThanks } from './pages/SpecialThanks.jsx';
import { NotFound } from './pages/NotFound.jsx';
import './App.css';

export default function App() {
    return (
      <BrowserRouter basename="/badges">
        <Routes>
          <Route path="/" element={<Centro />} />
          <Route path="/Faq" element={<Faq/>} />
          <Route path="/SpecialThanks" element={<SpecialThanks/>} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
    )
}