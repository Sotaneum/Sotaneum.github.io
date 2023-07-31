import Image from "next/image";

export default function Header() {
  return (
    <div className="md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
      <a href="/" className="inline-flex items-center">
        <span className="text-4xl pl-2 select-none">Blog</span>
        <Image
          className="w-16 h-16 select-none"
          src={"/favicon.ico"}
          alt={"icon"}
          width={18}
          height={18}
        />
      </a>
      <span className="text-sm whitespace-nowrap">
        이것저것 해보는 블로그입니다.
      </span>
    </div>
  );
}
