export interface DomPickerProps {
  children: React.ReactNode
  onPick: (selectedElements: Element[]) => void
  showSelectionArea?: boolean
  requiresShiftKey?: boolean
  selectOnMouseUp?: boolean
}

export interface DomRect {
  x: number
  y: number
  width: number
  height: number
}
