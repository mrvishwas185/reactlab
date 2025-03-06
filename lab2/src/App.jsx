import { useState } from 'react'

const App = () => {
  const[text,setText]=useState('')
  return (
    <div 
    classname="input">
      <input 
      type="text" 
      placehoder="Type something......"
      value={text}
      onChange={(e)=>
        {setText(e.target.value)
      }
    }
      />
    <h1>{text}</h1>
    <p>Character count:{text.length}</p>  
    </div>
  )
}

export default App
