import React from 'react'
import Registration from './Component/Registration'
import Header from './Component/Header'
import Footer from './Component/Footer'

const App = () => {
  return (
      <>
      <Header/>
      <div className="h-[70vh] lg:h-[70vh]">
      <Registration/>
      </div>
      <Footer/>
      </>
  )
}

export default App