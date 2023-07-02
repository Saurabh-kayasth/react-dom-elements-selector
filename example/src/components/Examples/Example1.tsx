import React, { useState } from 'react'
import { ElementsSelector } from 'react-elements-selector'
import styles from './styles.module.css'
import { CARDS } from '../../utils/ExampleUtils'
import { ConfigProps } from '../../types'

function Example1({
  showSelectionArea,
  requiresShiftKey,
  selectOnMouseUp
}: ConfigProps) {
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([])

  const onSelect = (elements: Element[]) => {
    const elementIds = elements.map((e) => e.id)
    setSelectedCardIds(elementIds)
  }

  const isHighlighted = (id: string) => {
    return selectedCardIds.includes(id)
  }

  return (
    <ElementsSelector
      onSelect={onSelect}
      showSelectionArea={showSelectionArea}
      requiresShiftKey={requiresShiftKey}
      selectOnMouseUp={selectOnMouseUp}
    >
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
    </ElementsSelector>
  )
}

export default Example1
