import Image from "next/image";

export default function Loading() {
  return (
    <div
      className="flex w-full h-full justify-center items-center"
      style={{ backgroundColor: "#F9F7FE", minHeight: "25rem" }}
    >
      <Image
        src="/assets/loading.gif"
        alt="loading..."
        width={48}
        height={48}
        loading="eager"
      />
    </div>
  );
}
