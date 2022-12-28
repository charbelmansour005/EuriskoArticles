export interface FunctionProps {
  hideModal?: () => void
  testToast?: () => void
}
export interface Props extends FunctionProps {
  chosenRippleColor?: string
  isVisible?: boolean
}
