import Image from "next/image";

interface TitleProps {
  title: string;
  coverImage?: string;
}

export default function Title({ coverImage, title }: TitleProps) {
  return (
    <>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      {coverImage && (
        <div className="mb-8 md:mb-8 sm:mx-0">
          <div className="sm:mx-0">
            <Image
              src={coverImage}
              alt={`Cover Image for ${title}`}
              className="shadow-sm w-full bg-[url('/assets/error.jpg')]"
              width={1300}
              height={630}
            />
          </div>
        </div>
      )}
    </>
  );
}
