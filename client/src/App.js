//import logo from './logo.svg';
import './App.css';
import Register from './Register';
import Login from './Login';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
     <Nav/>
     <Register/>
     <Login/>  
     <Contact/>
    </div>
    
  );
}

export default App;
