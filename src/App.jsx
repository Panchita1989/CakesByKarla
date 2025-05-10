import React from 'react'
import './App.css'
import './main.css'
import Header from './components/Header'
import Footer from './components/Footer'
import SlideInMenu from './components/SlideInMenu'
import LandingPage from './pages/LandingPage'   

function App() {
 return(
  <>
  <Header />
  <SlideInMenu />
    <LandingPage />
  <Footer />
  </>
 )
  
}

export default App
