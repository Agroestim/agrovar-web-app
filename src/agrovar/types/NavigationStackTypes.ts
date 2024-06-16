export type StackPropsType = {
  suscriber?: () => void;
  children: React.ReactNode;
};

export type ScreenPropsType = {
  name: string;
  component: React.ReactElement;
};
