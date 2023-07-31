export interface DefaultProps {
  children: React.ReactNode;
}

export interface DynamicProps<T> extends DefaultProps {
  params: T;
}
