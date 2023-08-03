import { DefaultProps } from "@/app/types";

export default function ListLayout({ children }: DefaultProps) {
  return <main style={{ minHeight: "calc(100vh - 12rem)" }}>{children}</main>;
}
