import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Programme from './pages/Programme'
import Module from './pages/Module'
import Infos from './pages/Infos'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app-shell">
      <NavBar menuOpen={menuOpen} onToggleMenu={setMenuOpen} />

      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programme" element={<Programme />} />
          <Route path="/module/:id" element={<Module />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
