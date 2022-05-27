import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
