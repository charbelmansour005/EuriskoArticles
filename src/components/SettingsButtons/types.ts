export type FunctionProps = {
  askLogout: () => void
  navigate: (args?: any) => void
}

export type SettingsButtonsProps = FunctionProps & {
  chosenRippleColor?: string
  language?: any
}
