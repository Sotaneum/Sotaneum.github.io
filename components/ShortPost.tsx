import Link from "next/link";

interface ShortPostProps {
  url: string;
  date: Date;
  desc?: string;
  title: string;
}
export default function ShortPost({ url, date, desc, title }: ShortPostProps) {
  return (
    <div>
      <h3 className="mb-4 text-3xl lg:text-4xl leading-tight">
        <Link className="hover:underline" href={url}>
          {title}
        </Link>
      </h3>
      <div className="mb-4 md:mb-0 text-lg">
        <time dateTime={date.toISOString()}>{date.toISOString()}</time>
      </div>
      {desc && <p className="text-lg leading-relaxed mb-4">{desc}</p>}
    </div>
  );
}
