import React, { useState } from 'react'
import { DomPicker } from 'react-dom-picker'
import styles from './styles.module.css'
import { CARDS } from '../../utils/ExampleUtils'

function Example3() {
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([])

  const onPick = (elements: Element[]) => {
    console.log('LOG', elements)
    const elementIds = elements.map((e) => e.id)
    setSelectedCardIds(elementIds)
  }

  const isHighlighted = (id: string) => {
    return selectedCardIds.includes(id)
  }

  return (
    <DomPicker onPick={onPick}>
      <div
        className={`${styles.example__container} ${styles.example1__card_container}`}
      >
        {CARDS.map((card) => {
          return (
            <div
              key={card.id}
              id={card.id}
              className={`selectable ${styles.card} ${
                isHighlighted(card.id) && styles.highlight
              }`}
            >
              <h5 className={styles.title}>{card.title}</h5>
              <p className={styles.description}>{card.description}</p>
            </div>
          )
        })}
      </div>
    </DomPicker>
  )
}

export default Example3
