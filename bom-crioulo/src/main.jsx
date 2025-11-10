import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Resumo from './Resumo.jsx';
import Personagens from './Personagens.jsx';
import Autor from './Autor.jsx';
import Equipe from './Equipe.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resumo" element={<Resumo />} />
        <Route path="/Personagens" element={<Personagens/>} />
        <Route path="/Autor" element={<Autor/>} />
        <Route path="/Equipe" element={<Equipe/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
