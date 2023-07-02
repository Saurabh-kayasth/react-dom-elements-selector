import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Example1 from './components/Examples/Example1'
import Config from './components/Config'

function App() {
  const [showSelectionArea, setShowSelectionArea] = useState(true)
  const [requiresShiftKey, setRequiresShiftKey] = useState(false)
  const [selectOnMouseUp, setSelectOnMouseUp] = useState(false)

  return (
    <div className="app">
      <Header />
      <Body>
        <Example1
          showSelectionArea={showSelectionArea}
          requiresShiftKey={requiresShiftKey}
          selectOnMouseUp={selectOnMouseUp}
        />

        <Config
          config={{ selectOnMouseUp, showSelectionArea, requiresShiftKey }}
          setConfig={(config) => {
            setRequiresShiftKey(config.requiresShiftKey)
            setSelectOnMouseUp(config.selectOnMouseUp)
            setShowSelectionArea(config.showSelectionArea)
          }}
        />
      </Body>
    </div>
  )
}

export default App
