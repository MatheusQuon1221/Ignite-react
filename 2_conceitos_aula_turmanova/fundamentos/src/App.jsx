import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import FirstComponent from './components/FirstComponent'

import TemplateExpression from './components/TemplateExpression'



import MyComponent from './components/MyComponents'



import Event from './components/Event'

import './App.css'

function App() {
return(<div className = "App">
  <h1>Fundamentos do React</h1>
  <FirstComponent/>
  <TemplateExpression/>
  <MyComponent/>
  <Event/>
</div>

  )
}

export default App
