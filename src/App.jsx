import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SlideInMenu from './components/SlideInMenu'
import LandingPage from './pages/LandingPage'  
import ChooseYourCake from './pages/ChooseYourCake' 
import FormWrapper from './components/formWrapper'
import ScrollToTop from './components/ScrollToTop'


function App() {
 return(
  <>
  <ScrollToTop />
  <Header />
  <SlideInMenu />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path='/choose' element={<ChooseYourCake />} />
    <Route path ='/contact' element={<FormWrapper />} />
    <Route path='/login' element={<FormWrapper />}/>
    <Route path='/signeup' element={<FormWrapper />}/>
    
  </Routes>
  <Footer />

  </>
 )
  
}

export default App
