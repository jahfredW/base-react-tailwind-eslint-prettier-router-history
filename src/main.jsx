import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import customHistory from '../router/history';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router history={customHistory}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
