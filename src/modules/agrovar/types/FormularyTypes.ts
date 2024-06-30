export type ChildrenCallbackComponent<P = unknown> = (
  props: P
) => React.ReactNode[];

export type FormularySelectorProps = {
  children: ChildrenCallbackComponent;
};
