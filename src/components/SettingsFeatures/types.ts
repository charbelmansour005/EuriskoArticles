export interface FunctionProps {
  hideModal?: () => void
  testToast?: () => void
}
export interface SettingsFeaturesProps extends FunctionProps {
  chosenRippleColor?: string
  isVisible?: boolean
}
