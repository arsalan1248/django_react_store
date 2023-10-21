import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Home from './Register';
import React, {useState} from 'react';
import Login from './Login';
import Register from './Register';
// import Header from './components/Header';
// import Footer from './components/Footer';

function App() {
  const [currentFrom, setCurrentForm] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }
  return (
    // <Router>
      <div className="app">
        {
          currentFrom === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
        }
        
      </div>
    // </Router>
  );
}

export default App;
