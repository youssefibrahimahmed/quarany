import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import { useState } from 'react'
import { SuwarApi } from './API/SuwarApi'

function App() {

  const [currentSurah, setCurrentSurah] = useState<any>(null);
  const { isLoading: SuwarLoading, error: SuwarError, data: SuwarData } = SuwarApi()

  return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home
            currentSurah={currentSurah}
            setCurrentSurah={setCurrentSurah}
            SuwarData={SuwarData}
            isLoading={SuwarLoading}
            error={SuwarError}
          />} />
        </Routes>
        <Footer currentSurah={currentSurah}
         SuwarData={SuwarData}
         setCurrentSurah={setCurrentSurah} />
      </BrowserRouter>

  )
}

export default App
