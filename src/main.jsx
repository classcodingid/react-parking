import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import App from './App.jsx'
import Home from './views/Home.jsx'
import Register from './views/auth/Register.jsx'
import VehiclesList from './views/vehicles/VehiclesList.jsx'
import '@/assets/main.css' //tailwind
import { route } from './routes/index.jsx'

window.axios = axios;

// kebijakan cors
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
// axios mengirim cookie
window.axios.defaults.withCredentials = true;
// jalur api server
window.axios.defaults.baseURL = "http://api-bkbnf.test/api/v1";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={route('home')} element={<App />}>
          <Route index element={<Home />} />
          <Route path={route('register')} element={<Register />} />
          <Route path={route('vehicles.index')} element={<VehiclesList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
