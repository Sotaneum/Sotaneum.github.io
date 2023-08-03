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
  className = "",
  keywords = [],
  selected = [],
  isOnlyAdd = false,
}: KeywordsProps) {
  return (
    <div className={classNames(className)}>
      {keywords.sort().map((key, idx) => {
        const select = selected.includes(key);

        return (
          <>
            <Link
              href={`/posts#${isOnlyAdd || !select ? "add" : "remove"}-${key}`}
              key={key}
              className={classNames(
                "rounded-lg text-white	p-1 m-1 text-sm bg-black",
                {
                  "opacity-50": !select,
                },
              )}
            >
              {key}
            </Link>
            {idx !== keywords.length - 1 && <span key={`${key},`}>,</span>}
          </>
        );
      })}
      {children}
    </div>
  );
}
