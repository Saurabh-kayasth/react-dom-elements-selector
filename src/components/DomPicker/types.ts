export interface DomPickerProps {
  children: React.ReactNode
  onPick: (selectedElements: Element[]) => void
}

export interface DomRect {
  x: number
  y: number
  width: number
  height: number
}
