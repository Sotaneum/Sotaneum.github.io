import { DefaultProps } from "@/app/types";
import Keywords from "@/components/Keywords";
import Comments from "@/components/Comments";
import Title from "@/components/Title";

export default function PostLayout({ children }: DefaultProps) {
  return (
    <div>
      <Title />
      {children}
      <Keywords />
      <Comments />
    </div>
  );
}
