import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Resumo from './Resumo.jsx';
import Personagens from './Personagens.jsx';
import Autor from './Autor.jsx';
import Equipe from './Equipe.jsx';
import Extras from './extras.jsx';
import Carta from './carta.jsx';

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
        <Route path="/Extras" element={<Extras/>}/>
        <Route path="/Carta" element={<Carta/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
