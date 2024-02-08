import { Route, Routes } from 'react-router'

import Home from './pages/Home';
import Header from './components/Header';
import About from './pages/About';

import './App.css'

function App() {
  return (
    <Routes>
      <Route element={ <Header /> }>
        <Route path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> } />
      </Route>
    </Routes>
  )
}

export default App;
