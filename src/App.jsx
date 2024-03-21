import { useState } from 'react'

import './App.css'
import { Header } from './Common/Header/Header'
import { Body } from './pages/body/Body'
import { Footer } from './Common/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

export default App
