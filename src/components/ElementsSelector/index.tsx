import React, { useRef, useState } from 'react'
import { type ElementsSelectorProps, type DomRect } from './types'

const ElementsSelector: React.FC<ElementsSelectorProps> = ({
  children,
  onSelect,
  showSelectionArea = true,
  requiresShiftKey = false,
  selectOnMouseUp = false
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [selectedRect, setSelectedRect] = useState<DomRect | null>(null)

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    event.preventDefault()
    if (requiresShiftKey && !event.shiftKey) return

    const { clientX, clientY } = event
    let currentSelection = { x: clientX, y: clientY, width: 0, height: 0 }

    const handleMouseUp = (): void => {
      selectElements(currentSelection)
      setSelectedRect(null)

      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleMouseMove = (event: MouseEvent): void => {
      if (requiresShiftKey && !event.shiftKey) return

      if (currentSelection != null) {
        const { clientX, clientY } = event
        const { x, y } = currentSelection
        currentSelection = {
          x,
          y,
          width: clientX - x,
          height: clientY - y
        }
        setSelectedRect(currentSelection)
        if (!selectOnMouseUp) selectElements(currentSelection)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
  }

  const selectElements = (selection: DomRect): void => {
    if (containerRef.current == null || selection == null) return

    const container = containerRef.current
    const elements = container.querySelectorAll('.selectable')

    const selectedElements: Element[] = []
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (isWithinSelection(rect, selection)) {
        selectedElements.push(element)
      }
    })

    onSelect(selectedElements)
  }

  const isWithinSelection = (rect: DomRect, selection: DomRect): boolean => {
    if (selection == null) return false

    const { x, y, width, height } = rect
    const { x: selX, y: selY, width: selWidth, height: selHeight } = selection

    return (
      x >= selX &&
      y >= selY &&
      x + width <= selX + selWidth &&
      y + height <= selY + selHeight
    )
  }

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
      {showSelectionArea && (
        <div
          style={{
            position: 'fixed',
            top: selectedRect?.y,
            left: selectedRect?.x,
            width: selectedRect?.width,
            height: selectedRect?.height,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255,255,255,0.25)'
          }}
        />
      )}
    </div>
  )
}

export default ElementsSelector
