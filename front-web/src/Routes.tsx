import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Records from './pages/Records';


const Rotas = () => (
        <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/records" element={<Records />}/>
        </Routes>

)

export default Rotas;