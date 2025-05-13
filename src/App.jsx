import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './styles/App.css'
import './styles/main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SlideInMenu from './components/SlideInMenu'
import LandingPage from './pages/LandingPage'  
import ChooseYourCake from './pages/ChooseYourCake' 


function App() {
 return(
  <>
  <Header />
  <SlideInMenu />
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path='/choose' element={<ChooseYourCake />} />
  </Routes>
  <ChooseYourCake />
  <Footer />
  </>
 )
  
}

export default App
