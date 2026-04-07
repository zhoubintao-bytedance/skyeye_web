import Link from "next/link";
import { BlogPost, getHomeResearchPosts, getPublishedPosts } from "@/app/blog/posts";

/* 博客索引页作为唯一文章入口，继续保留主文章加列表的承载结构。 */
export default function BlogIndexView({ posts }: { posts: BlogPost[] }) {
  const publishedPosts = getPublishedPosts(posts);
  const { featured, secondary } = getHomeResearchPosts(posts);
  const remainingPosts = publishedPosts.filter(
    (post) =>
      post.slug !== featured?.slug && !secondary.some((item) => item.slug === post.slug),
  );

  return (
    <main className="bg-black py-14 text-white md:py-18">
      <div className="mx-auto w-[92%] max-w-[1200px]">
        <div className="max-w-3xl">
          <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#76b900]">
            博客
          </p>
          <h1 className="m-0 text-4xl font-bold leading-[1.1] text-white">博客</h1>
          <p className="mt-4 text-sm leading-[1.8] text-[#a7a7a7]">
            集中查看 Skyeye 的研究文章、产品进展和技术记录。
          </p>
        </div>

        {featured ? (
          <div className="mt-10 grid gap-5 xl:grid-cols-[1.35fr_0.85fr]">
            <Link
              href={`/blog/${featured.slug}`}
              className="block border border-[rgba(118,185,0,0.45)] bg-[#070707] p-6 text-white no-underline transition-colors hover:border-[#76b900]"
            >
              <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#76b900]">
                Featured
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.15] text-white">{featured.title}</h2>
              <p className="mt-4 text-base italic text-[#d8d8d8]">&ldquo;{featured.quote}&rdquo;</p>
              <p className="mt-6 text-sm leading-[1.8] text-[#a7a7a7]">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#898989]">
                <span>{featured.date}</span>
                <span>{featured.readTime}</span>
              </div>
            </Link>

            <div className="grid gap-5">
              {secondary.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-[rgba(94,94,94,0.95)] bg-[#070707] p-5 text-white no-underline transition-colors hover:border-[#76b900]"
                >
                  <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#898989]">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-[1.2] text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#a7a7a7]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
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

        {remainingPosts.length > 0 ? (
          <div className="mt-12 border-t border-[rgba(94,94,94,0.95)] pt-8">
            <h2 className="text-2xl font-bold leading-[1.2] text-white">More Research</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {remainingPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-[rgba(94,94,94,0.95)] bg-[#050505] p-5 text-white no-underline transition-colors hover:border-[#76b900]"
                >
                  <p className="m-0 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#898989]">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-xl font-bold leading-[1.2] text-white">{post.title}</h3>
                  <p className="mt-3 text-sm leading-[1.8] text-[#a7a7a7]">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}
