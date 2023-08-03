import classNames from "classnames";
import Link from "next/link";
import { DefaultProps } from "@/app/types";

interface KeywordsProps extends DefaultProps {
  color?: string;
  keywords?: string[];
  selected?: string[];
  isOnlyAdd?: boolean;
}

export default function Keywords({
  children,
  color = "bg-amber-500",
  keywords = [],
  selected = [],
  isOnlyAdd = false,
}: KeywordsProps) {
  return (
    <div>
      {keywords.sort().map((key) => {
        const select = selected.includes(key);

        return (
          <Link
            href={`/posts#${isOnlyAdd || !select ? "add" : "remove"}-${key}`}
            key={key}
            className={classNames(
              color,
              "rounded-lg text-white	p-1 m-1 text-sm",
              {
                "opacity-50": !select,
              },
            )}
          >
            {key}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
