import { useState } from 'react'
import '@mantine/core/styles.css'
import './App.css'
import { MantineProvider, Slider } from '@mantine/core'
import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MantineProvider> 
        
      <HomePage/>
        
      </MantineProvider>
    </div>
  )
}

export default App
