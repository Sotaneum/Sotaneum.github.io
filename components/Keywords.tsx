import classNames from "classnames";

interface KeywordsProps {
  keywords?: string[];
  selected?: string[];
}

export default function Keywords({
  keywords = [],
  selected = [],
}: KeywordsProps) {
  return (
    <div>
      {keywords.map((key) => (
        <span
          key={key}
          className={classNames(
            "rounded-lg bg-amber-500 text-white	p-1 m-1 text-sm",
            { "opacity-50": !selected.includes(key) },
          )}
        >
          {key}
        </span>
      ))}
    </div>
  );
}
