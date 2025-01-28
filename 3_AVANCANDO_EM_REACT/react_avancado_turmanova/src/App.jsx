import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Data from './components/Data'

import './App.css'



import night from './assets/night.jpg'



function App() {

  return (
  <div>
    <h1>avancando em react</h1>
      <img src="/img.jpg" alt="Alguma Imagem" />
      <img src={night} alt="Outra Imagem" />
      <Data/>
  </div>
  )
}

export default App
