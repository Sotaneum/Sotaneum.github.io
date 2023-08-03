interface ListLayoutProps {
  children: React.ReactNode;
}
export default function ListLayout({ children }: ListLayoutProps) {
  return <main style={{ minHeight: "calc(100vh - 12rem)" }}>{children}</main>;
}
