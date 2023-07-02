import React, { useState, useRef, useEffect } from 'react'
import { type DomPickerProps, type DomRect } from './types'

const LOG = '[DOM PICKER LOG]'

const DomPicker: React.FC<DomPickerProps> = ({ children, onPick }) => {
  const [selection, setSelection] = useState<DomRect | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseUp = (): void => {
      setSelection(null)
      selectElements()
    }

    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    const { clientX, clientY } = event
    setSelection({ x: clientX, y: clientY, width: 0, height: 0 })
  }

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>): void => {
    if (selection != null) {
      const { clientX, clientY } = event
      const { x, y } = selection
      setSelection({
        x,
        y,
        width: clientX - x,
        height: clientY - y
      })
      selectElements()
    }
  }

  const selectElements = (): void => {
    if (containerRef.current == null || selection == null) return

    const container = containerRef.current
    const elements = container.querySelectorAll('.selectable')

    const selectedElements: Element[] = []
    elements.forEach((element) => {
      const rect = element.getBoundingClientRect()
      if (isWithinSelection(rect)) {
        selectedElements.push(element)
      }
    })

    onPick(selectedElements)
  }

  const isWithinSelection = (rect: DomRect): boolean => {
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
      onMouseMove={handleMouseMove}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    >
      {children}
    </div>
  )
}

export default DomPicker
