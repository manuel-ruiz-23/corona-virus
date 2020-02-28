import React, { useState } from 'react';
import './App.css';
import Holder from './Holder'
import RazaSana from './RazaSana'

const initialState = [
  {name: 'many', status: 'infected'},
  {name: 'Franco', status: 'sano'},
  {name: 'carlos', status: 'sana', sexualidad: 'gei'},

]

function App() {
  const [hermosillo, setHermosillo] = useState(initialState)

  function handleContagio(name) {
    // hermosillo[0].status = infected
    setHermosillo([...hermosillo.map(p => {
      if (p.name === name) {
        return {...p, status: 'infected'}
      }
      return p
    })])
  }

  function handleMuerte(name) {
    setHermosillo([...hermosillo.map(p => {
      if (p.name === name) {
        return {...p, status: 'dead'}
      }
      return p
    })])
  }

  return (
    <div className="App">
      {hermosillo.map(p => {
        // eslint-disable-next-line array-callback-return
        if(p.status === 'dead') return 
        if(p.status === 'infected') return <Holder muerte={handleMuerte} key={p.name} name={p.name}/>
        return <RazaSana contagio={handleContagio} key={p.name} name={p.name}/>
      })}
    </div>
  );
}

export default App;
