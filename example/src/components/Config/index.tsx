import React from 'react'
import styles from './styles.module.css'
import { IConfig } from '../../types'

interface CardProps {
  title: string
  description: string
  isOn: boolean
  onChange: (isOn: boolean) => void
}

function Card({ title, description, isOn, onChange }: CardProps) {
  return (
    <div className={styles.card}>
      <div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={isOn}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  )
}

function Config({ config, setConfig }: IConfig) {
  return (
    <div className={styles.config__container}>
      <Card
        title="Show Selection Area"
        description="Draws rectangle on selected area"
        isOn={config.showSelectionArea}
        onChange={(isOn) =>
          setConfig({
            ...config,
            showSelectionArea: isOn
          })
        }
      />
      <Card
        title="Requires Shift Key"
        description="Press shift and then drag using mouse to select elements"
        isOn={config.requiresShiftKey}
        onChange={(isOn) =>
          setConfig({
            ...config,
            requiresShiftKey: isOn
          })
        }
      />
      <Card
        title="Select On Mouse Up"
        description="onSelect will be called only when the mouseup event triggers"
        isOn={config.selectOnMouseUp}
        onChange={(isOn) =>
          setConfig({
            ...config,
            selectOnMouseUp: isOn
          })
        }
      />
    </div>
  )
}

export default Config
