import { useState } from 'react'
import './App.css'

function App() {
  const [background, setBackground] = useState('#000000')

  function change(){
    const random_color = "#" + Math.round(Math.random()*10000000).toString(16);
    setBackground(random_color);
  }

  return (
    <div className = "button" style={{backgroundColor : background, height:'100vh', width:'100vw'}}>
    <button onClick={change}>Change</button>
    </div>
  )
}

export default App