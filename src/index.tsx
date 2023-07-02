import React from 'react'

export interface ButtonProps {
  text: string
  onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}
