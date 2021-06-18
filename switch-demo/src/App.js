import './App.css'
import React, { useState } from 'react'
import Lost from './components/Lost.js'
import Playing from './components/Playing.js'
import Start from './components/Start.js'
import Won from './components/Won.js'

function App() {
  const [game, setGame] = useState('start')

  const handleClick = (gameState) => {
    setGame(gameState)
  }

  return (
    <div className="App">

      {(() => {
        switch (game) {
          case 'start':
            return <Start handleClick={handleClick} />
          case 'playing':
            return <Playing handleClick={handleClick} />
          case 'won':
            return <Won handleClick={handleClick} />
          case 'lost':
            return <Lost  handleClick={handleClick} />
          default:
            return null
        }
      })()}

    </div>
  );
}

export default App;
