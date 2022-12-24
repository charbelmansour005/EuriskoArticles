export type SearchBarFunctionProps = {
  onChangeText: (arg?: any) => void;
  onPressClear: () => void;
};

export type SearchBarProps = SearchBarFunctionProps & {
  search: string;
};
