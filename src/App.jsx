import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import {Navbar} from './components/Navbar';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title={'Weast Coast'}/>
      <div className="text-box">
        <h1>Weast Coast</h1>
      </div>
      
    </>

  )
}

export default App
