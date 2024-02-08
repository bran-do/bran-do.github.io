import { Route, Routes } from 'react-router'

import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css'

function App() {
  return (
    <Routes>
      <Route element={ <Header /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact />} />
      </Route>
    </Routes>
  )
}

export default App;
