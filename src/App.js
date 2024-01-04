// import logo from './logo.svg';
// import './App.css';

// import HomePage from "./Components/HomePage";
// import Login from "./Components/Login";
import About from "./Components/About";
import Contact from "./Components/Contact";
import HomePage from "./Components/HomePage";
import Login from "./Components/Login";
import Products from "./Components/Products";
import Register from "./Components/Register";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
