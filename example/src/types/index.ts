export type ConfigProps = {
  showSelectionArea: boolean
  requiresShiftKey: boolean
  selectOnMouseUp: boolean
}

export interface IConfig {
  config: ConfigProps
  setConfig: (config: ConfigProps) => void
}
