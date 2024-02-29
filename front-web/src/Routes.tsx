import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Records from './pages/Records';
import Charts from './pages/Charts';


const Rotas = () => (
        <Routes>
            <Route path ="/" element={<Home />}/>
            <Route path ="/records" element={<Records />}/>
            <Route path ="/charts" element={<Charts />}/>
        </Routes>

)

export default Rotas;