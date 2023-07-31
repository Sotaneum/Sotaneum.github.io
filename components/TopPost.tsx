import Image from "next/image";
import ShortPost from "@/components/ShortPost";
import Link from "next/link";

interface TopPostProps {
  url: string;
  date: Date;
  desc: string;
  title: string;
  imageUrl: string;
}

export default function TopPost({
  url,
  date,
  desc,
  title,
  imageUrl,
}: TopPostProps) {
  return (
    <section className="bg-opacity-50 rounded-1xl	shadow-md p-4 mb-20 md:mb-28">
      {imageUrl && (
        <div className="mb-8 md:mb-16">
          <Link href={url}>
            <Image
              className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200"
              src={imageUrl}
              alt={desc}
              width={2000}
              height={1000}
            />
          </Link>
        </div>
      )}
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8">
        <ShortPost url={url} date={date} title={title} />
        <p className="text-lg leading-relaxed mb-4">{desc}</p>
      </div>
    </section>
  );
}
