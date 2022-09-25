import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";


import "./styles/App.scss"
import Layout from "./components/layout";
import About from "./pages/about";

import Contact from "./pages/contact";
import Projects from "./pages/projects";

const App = ()=>{
  return (

    <Router basename="/New-Portfolio/"> 
    
      
      <Layout>
      
      <Routes>
          
          <Route path='/about' element={<About/>} />
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>

      </Routes>
      
      </Layout>
      
    </Router>
    
    
  )
}
export default App;

