import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import Admin from './routes/Admin';
import User from './routes/User';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
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
        <ToastContainer position='bottom-right'/>
    </>
  );
}

export default App;
