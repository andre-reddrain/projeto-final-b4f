import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login'
import Signup from './Pages/Signup';
import List from './Pages/List';
import Catalog from './Pages/Catalog';
import Progress from './Pages/Progress';
import Content from './Pages/Content';
import User from './Pages/User'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/list" element={<List />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/content/:id" element={<Content />} />
        <Route path="/list/progress/:id" element={<Progress />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
