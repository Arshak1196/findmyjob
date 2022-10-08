import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import Admin from './routes/Admin';
import User from './routes/User';
import './App.css'

function App() {
  return (
    <>
        <CssBaseline>
          <BrowserRouter>
            <Routes>
              <Route path='/*' element={<User />} />
              <Route path='/admin/*' element={<Admin />} />
            </Routes>
          </BrowserRouter>
        </CssBaseline>
    </>
  );
}

export default App;
