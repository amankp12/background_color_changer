import { useState } from 'react'
import './App.css'

function ColorPicker() {
  const [background, setBackground] = useState('#000000')
  const [selectedColor, setSelectedColor] = useState('#000000')

  function handleChange(event){
    setSelectedColor(event.target.value);
  }

  function applyColor(){
    setBackground(selectedColor);
  }

  return (
    <div className = "button" style={{backgroundColor : background, height:'100vh', width:'100vw'}}>
        <input className = "chooseColor" type="color" value={selectedColor} onChange={handleChange}/>
        <button onClick={applyColor}>Change</button>
    </div>
  )
}

export default ColorPicker