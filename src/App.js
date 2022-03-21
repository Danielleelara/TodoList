import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';

function App() {

  return (
    <>
      <Router>     
      <Routes >
        <Route path='/' element={<Home/>}/>
      </Routes >
      <Routes >
        <Route path='/:id/tasks' element={<Tasks/>}/>
      </Routes >
    </Router>
    </>
  )
}

export default App;
