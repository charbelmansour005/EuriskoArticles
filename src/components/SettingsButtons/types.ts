export type FunctionProps = {
  askLogout: () => void;
  navigate: (args?: any) => void;
};

export type Props = FunctionProps & {
  chosenRippleColor?: string;
  language?: any;
};
