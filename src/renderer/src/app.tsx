import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import About from './about'

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  )
}

export default App
