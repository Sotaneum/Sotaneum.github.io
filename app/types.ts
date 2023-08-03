export interface DefaultProps {
  children?: React.ReactNode;
  className?: string;
}

export interface DynamicProps<T> extends DefaultProps {
  params: T;
}
