import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import List from './Pages/List';
import Catalog from './Pages/Catalog'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </div>
  );
}

export default App;
