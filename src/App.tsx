import { useState } from 'react'
import '@mantine/core/styles.css'
import './App.css'
import { createTheme, MantineProvider, Slider } from '@mantine/core'
import HomePage from './Pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  const theme = createTheme({
    colors:{
      'bright-sun': [
           '#fffbeb',
           '#fff3c6',
           '#ffe588',
           '#ffd149',
           '#ffbd20',
           '#f99b07',
           '#dd7302',
           '#b75006',
           '#943c0c',
           '#7a330d',
           '#461902',
      ],
      'mine-shaft': [
           '#f6f6f6',
           '#e7e7e7',
           '#d1d1d1',
           '#b0b0b0',
           '#888888',
           '#6d6d6d',
           '#5d5d5d',
           '#4f4f4f',
           '#454545',
           '#3d3d3d',
           '#2d2d2d',
      ]
    }
  })
  return (
    <div>
      <MantineProvider theme={theme}> 
        <BrowserRouter>
        <Routes>
          <Route path='*' element={<HomePage/>}/>
        
        </Routes>
        
        </BrowserRouter>
        
      </MantineProvider>
    </div>
  )
}

export default App
