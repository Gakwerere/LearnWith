import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Courselists from "./components/courses/Courselists";

import LandingPage from './components/UI/LandingPage';

import Login from './components/UI/pagges/Login';

import Signup from "./components/UI/pagges/Signup";

import Footer from './Layout/Footer';

import Header from './Layout/Header';

import Coursedetails from './components/courses/Coursedetails';

function App() {
  return (

<Router>
      <div className="  ">
        {/* //relative */}
        <Header />
        <Routes>
        <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/courselists" element={<Courselists/>} />
          <Route exact path="/Coursedetails/:courseId" element={<Coursedetails/>} />
          <Route> Not Found 404 </Route>
          
          
        </Routes>

        <Footer/>
      </div>
    </Router>





 

   
  );
}

export default App;
