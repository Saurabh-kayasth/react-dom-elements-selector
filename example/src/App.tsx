import React from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Example1 from './components/Examples/Example1'
import Example2 from './components/Examples/Example2'
import Example3 from './components/Examples/Example3'

function App() {
  return (
    <div className="app">
      <Header />
      <Body>
        <Example1 />
        <Example2 />
        <Example3 />
      </Body>
    </div>
  )
}

export default App
