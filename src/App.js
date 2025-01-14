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
import Contact from './components/Contact';
import Login from './components/Login';
import ContractState from './context/contract/ContractState';
import Contract from './components/Contract';
import Portal from './components/Portal';
import ProjectEdit from './components/ProjectEdit';
import ChangePass from './components/ChangePass';
import ProjectState from './context/project/ProjectState';
import AddProject from './components/AddProject';
import Project from './pages/Project';
import Popular from './components/Popular';
import ProjectCollection from './components/ProjectCollection';
import RelatedProjects from './components/RelatedProjects';
import CarouselItem from './components/CarouselItem';
// import Signup from './components/Signup';

function App() {

  return (
    <>
      <ContractState>
        <ProjectState>
          <Router>
            <Navbar />
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/CustomHouseBuilding' element={<CustomHouseBuilding />} />
              <Route exact path='/CommercialConstruction' element={<CommercialConstruction />} />
              <Route exact path='/RenovationsAndRemodeling' element={<RenovationsAndRemodeling />} />
              <Route exact path='/InteriorDesign' element={<InteriorDesign />} />
              <Route exact path='/projectCollection' element={<ProjectCollection />} />
              <Route exact path='/projects' element={<Popular />} />
              <Route exact path='/project/:id' element={<Project />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/login' element={<Login />} />
              {/* <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} /> */}
              <Route exact path='/portal' element={<Portal />} />
              <Route exact path='/contract' element={<Contract />} />
              <Route exact path='/addProject' element={<AddProject />} />
              <Route exact path='/projectEdit' element={<ProjectEdit />} />
              <Route exact path='/changePass' element={<ChangePass />} />
              <Route exact path='/relatedProjects' element={<RelatedProjects />} />
              <Route exact path='/carouselItem' element={<CarouselItem />} />
            </Routes>
            <Footer />
          </Router>

        </ProjectState>
      </ContractState>
      
    </>
  );
}

export default App;
