import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Page1 from './component/page1.jsx'
import Page2 from './component/page2.jsx'
import Navrouter from './component/Navrouter.jsx'
import CardGrid from './component/cardgrid.jsx'

function App() {
  return (
    <BrowserRouter>

      <Navrouter /> {/* this is navbar component */}


      <Routes>
        <Route path="/"      element={<CardGrid />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
