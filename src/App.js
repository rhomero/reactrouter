import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chips from './Chips'
import Soda from './soda'
import Honeybuns from './honeybuns'
import VendingMachine from './VendingMachine';

function App() {
    return (
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/Soda" element={<Soda/>} />
              <Route path="/Chips" element={<Chips/>} />
              <Route path="/" element={<VendingMachine/>} />
            </Routes>
          </BrowserRouter>
        </div>
      );
}

export default App