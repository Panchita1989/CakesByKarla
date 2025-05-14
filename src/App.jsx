import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SlideInMenu from './components/SlideInMenu'
import LandingPage from './pages/LandingPage'  
import ChooseYourCake from './pages/ChooseYourCake' 
import Contact from './pages/Contact'
import Login from './pages/LogIn'
import Signeup from './pages/SigneUp'
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
    <Route path ='/contact' element={<Contact />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/signeup' element={<Signeup />}/>
    
  </Routes>
  <Footer />

  </>
 )
  
}

export default App
