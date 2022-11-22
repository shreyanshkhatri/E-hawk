import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home  from './components/Home';

import LoginHawker from './components/LoginHawker';
import Alert from './components/Alert';
import { useState } from 'react';
import RegisterHawker from './components/RegisterHawker';


function App() {
  const [alert,setAlert] =useState(null)
  const showAlert = ( type,message)=>{
    setAlert({
      
      type: type,
      message: message,
    })
    setTimeout(() => {
        setAlert(null);
    }, 5000);
}
  return (
    < >
    {/* <header className="section-header"> */}
    <Router>
    <Navbar/>
    
    {/* <Alert alert={alert} /> */}

    <div className='container-2'>
    <Routes>
        
          <Route path="/" element={<Home showAlert={showAlert}/>} />
        
      
              
              <Route path="/login" element={<Login showAlert={showAlert}/>} />

              <Route path="/signup" element={<Signup showAlert={showAlert}/>} />

              <Route path="/registerhawker" element={<RegisterHawker showAlert={showAlert}/>} />

              <Route path="/loginhawker" element={<LoginHawker showAlert={showAlert}/>} />

        </Routes>
        </div>
     
        </Router>
        {/* </header> */}
    </>
  );
}

export default App;
