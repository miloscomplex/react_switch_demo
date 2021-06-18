import './App.css'
import React, { useState } from 'react'

function App() {
  const [mood, changeMood] = useState('happy')
  const [moods, setMoods] = useState(['happy','sad','angry','scared'])
  
  return (
    <div className="App">
      {(() => {
        switch ({mood}) {
          case 'happy':
            return <Happy />
          case 'sad':
            return <Sad />
          case 'angry':
            return <Angry />
          case 'scared':
            return <Scared />
        }
      })()}

    </div>
  );
}

export default App;
