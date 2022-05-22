import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Dashboard from './views/dashboard';
import Detail from './views/detail';
import Home from './views/home';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />}>
      <Route index element={<Dashboard />} />
      <Route path="/detail/:exchangeid" element={<Detail />} />
    </Route>
  </Routes>
);

export default App;
