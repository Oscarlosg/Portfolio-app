import { useState } from 'react'
import SideNav from './components/SideNav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {

//rafce - command to create react component template code
//tutotial time stamp 58:06 - https://www.youtube.com/watch?v=22CxRxryQFE&t=1603

  return (
    <>
     <SideNav />
     <Main />
     <Work />
     <Projects />
     <Contact />
     <Footer />
    </>
  )
}

export default App
