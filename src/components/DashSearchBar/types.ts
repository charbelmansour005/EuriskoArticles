export type SearchBarFunctionProps = {
  onChangeText: (arg?: any) => void
  onPressClear: () => void
}

export type DashSearchBarProps = SearchBarFunctionProps & {
  search: string
  language: any
}
