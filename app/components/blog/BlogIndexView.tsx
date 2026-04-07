import Link from "next/link";
import { BlogPost, getPublishedPosts } from "@/app/blog/posts";

/* 博客索引页作为唯一文章入口，多篇文章统一按单列卡片列表展示。 */
export default function BlogIndexView({ posts }: { posts: BlogPost[] }) {
  const publishedPosts = getPublishedPosts(posts);

  return (
    <main className="bg-black py-14 text-white md:py-18">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <h1 className="inline-flex bg-[#76b900] px-5 py-3 text-4xl font-bold leading-[1] tracking-[-0.03em] text-black">
          博客
        </h1>

        {publishedPosts.length > 0 ? (
          <div className="mt-10 max-w-5xl space-y-5">
            {publishedPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block min-h-[16rem] border border-[rgba(94,94,94,0.95)] bg-[#070707] p-6 text-white no-underline transition-colors hover:border-[#76b900]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#898989]">
                  <span className="border border-[rgba(118,185,0,0.45)] px-2 py-1 font-bold text-[#76b900]">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-5 text-3xl font-bold leading-[1.12] text-white">{post.title}</h2>
                <p className="mt-4 text-base italic leading-[1.8] text-[#d8d8d8]">
                  &ldquo;{post.quote}&rdquo;
                </p>
                <p className="mt-5 max-w-4xl text-sm leading-[1.85] text-[#a7a7a7]">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 border border-[rgba(94,94,94,0.95)] bg-[#070707] p-6">
            <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#76b900]">
              Coming Soon
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.15] text-white">研究内容正在整理中</h2>
            <p className="mt-4 text-sm leading-[1.8] text-[#a7a7a7]">
              新的研究文章、产品进展和技术记录会在准备完成后统一发布。
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
