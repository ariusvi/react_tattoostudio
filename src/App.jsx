import { useState } from 'react'

import './App.css'
import { Header } from './Common/Header/Header'
import { Footer } from './Common/Footer/Footer'
import { Body } from './pages/body/Body'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Header /> */}
      <Body />
      <Footer />
    </>
  )
}

export default App
