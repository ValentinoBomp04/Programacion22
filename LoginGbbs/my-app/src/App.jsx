import React from 'react';
import Login from './components/Login'
import {
    BrowserRouter as Router, 
    Routes, 
    Route, 
     
} from 'react-router-dom'




function App() {
  return (
      <div className='container'>
      <Router>
        
        <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes>
      </Router>
      </div>
      
  );
}

export default App;