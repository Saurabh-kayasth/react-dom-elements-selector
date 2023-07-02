import React from 'react'
import styles from './styles.module.css'
import { ConfigProps, IConfig } from '../../types'

interface CardProps {
  title: string
  isOn: boolean
  onChange: (isOn: boolean) => void
}

function Card({ title, isOn, onChange }: CardProps) {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{title}</h5>
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
