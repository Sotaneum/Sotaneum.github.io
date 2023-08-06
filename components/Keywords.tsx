import classNames from "classnames";
import Link from "next/link";
import { ChildrenProps, ClassNameProps } from "@/types/props";
import { Fragment } from "react";

interface KeywordsProps extends ChildrenProps, ClassNameProps {
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
          <Fragment key={key}>
            <Link
              href={`/posts#${isOnlyAdd || !select ? "add" : "remove"}-${key}`}
              className={classNames(
                "rounded-lg text-white	p-1 m-1 text-sm bg-black",
                {
                  "opacity-50": !select,
                },
              )}
            >
              {key}
            </Link>
            {idx !== keywords.length - 1 && <span>,</span>}
          </Fragment>
        );
      })}
      {children}
    </div>
  );
}
