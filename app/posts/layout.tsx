import { ChildrenProps } from "@/types/props";

export default function ListLayout({ children }: ChildrenProps) {
  return <main style={{ minHeight: "calc(100vh - 12rem)" }}>{children}</main>;
}
