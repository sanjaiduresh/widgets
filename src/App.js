import "./App.css"
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Register from './Register';
import Home from "./Home";

function App() {
  
  return (
    <div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='home' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
