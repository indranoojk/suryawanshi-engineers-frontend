import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import CustomHouseBuilding from './components/CustomHouseBuilding';
import Navbar from './components/Navbar';
import CommercialConstruction from './components/CommercialConstruction';
import RenovationsAndRemodeling from './components/RenovationsAndRemodeling';
import InteriorDesign from './components/InteriorDesign';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Login from './components/Login';
import ContractState from './context/contract/ContractState';
import Contract from './components/Contract';
// import Signup from './components/Signup';

function App() {

  return (
    <>
      <ContractState>
        <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/CustomHouseBuilding' element={<CustomHouseBuilding />} />
              <Route exact path='/CommercialConstruction' element={<CommercialConstruction />} />
              <Route exact path='/RenovationsAndRemodeling' element={<RenovationsAndRemodeling />} />
              <Route exact path='/InteriorDesign' element={<InteriorDesign />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/login' element={<Login />} />
              {/* <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
              <Route exact path='/contract' element={<Contract />} />
            </Routes>
            <Footer />
        </Router>

        {/* <Contract /> */}

      </ContractState>
      
    </>
  );
}

export default App;
