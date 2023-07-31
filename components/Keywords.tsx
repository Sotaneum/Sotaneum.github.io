import classNames from "classnames";

interface KeywordsProps {
  color?: string;
  keywords?: string[];
  selected?: string[];
}

export default function Keywords({
  color = "bg-amber-500",
  keywords = [],
  selected = [],
}: KeywordsProps) {
  return (
    <div>
      {keywords.map((key) => (
        <a
          href={``}
          key={key}
          className={classNames(color, "rounded-lg text-white	p-1 m-1 text-sm", {
            "opacity-50": !selected.includes(key),
          })}
        >
          {key}
        </a>
      ))}
    </div>
  );
}
