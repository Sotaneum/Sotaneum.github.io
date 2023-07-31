import TopPost from "@/components/TopPost";
import ShortPost from "@/components/ShortPost";

export default function RootPage() {
  const minimalPosts: {
    url: string;
    title: string;
    desc: string;
    date: string;
    imageUrl: string;
  }[] = [
    {
      url: "/posts/123",
      title: "1",
      date: "2023-07-23T09:00",
      desc: "테스트",
      imageUrl: "/posts/20230731T0900/new.jpg",
    },
    {
      url: "/posts/123",
      title: "2",
      date: "2023-07-24T09:00",
      desc: "테스트1",
      imageUrl: "/posts/20230731T0900/new.jpg",
    },
    {
      url: "/posts/123",
      title: "3",
      date: "2023-07-25T09:00",
      desc: "테스트2",
      imageUrl: "/posts/20230731T0900/new.jpg",
    },
  ];

  const [top, ...shorts] = minimalPosts;

  return (
    <main>
      <TopPost
        url={top.url}
        title={top.title}
        desc={top.desc}
        date={new Date(top.date)}
        imageUrl={top.imageUrl}
      />
      <section>
        <h4 className="mb-8 text-1xl md:text-3xl font-bold tracking-tighter leading-tight">
          다른 게시글
        </h4>
        <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
          {shorts.map((post) => (
            <ShortPost
              key={post.title}
              url={post.url}
              title={post.title}
              desc={post.desc}
              date={new Date(top.date)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
