import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/register" element={<Register />} />




      </Routes>
    </div>

  );
}

export default App;
