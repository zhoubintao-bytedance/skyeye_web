import Link from "next/link";
import { posts, categoryColors } from "./posts";

export default function BlogPage() {
  const publishedPosts = posts.filter((p) => p.published);
  const upcomingPosts = posts.filter((p) => !p.published);

  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="hacker-glow text-3xl md:text-4xl mb-3">博客</h1>
        <p className="text-[#888] text-sm mb-2">
          技术探索、策略研究、团队故事 —— 来自天眼投资的一手分享
        </p>
        <p className="text-[#555] text-xs">
          共 {publishedPosts.length} 篇文章{upcomingPosts.length > 0 ? `，${upcomingPosts.length} 篇即将发布` : ""}
        </p>
      </div>

      {/* Published Posts */}
      <div className="space-y-6 mb-12">
        {publishedPosts.map((post) => {
          const color = categoryColors[post.category] || "#b5e853";
          return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block no-underline group"
              aria-label={post.title}
            >
              <article className="hacker-card relative overflow-hidden">
                {/* Top bar */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xs font-bold px-2 py-0.5 border border-dashed rounded"
                      style={{ color, borderColor: color }}
                    >
                      {post.category}
                    </span>
                    <span className="text-[#555] text-xs">{post.date}</span>
                  </div>
                  <span className="text-[#555] text-xs">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-xl text-[#eaeaea] mb-2 group-hover:text-[#b5e853] transition-colors duration-300 m-0">
                  {post.title}
                </h2>

                {/* Quote */}
                <p className="text-[#d4a853] text-sm mb-3 italic">
                  &ldquo;{post.quote}&rdquo;
                </p>

                {/* Tags + Read more */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 text-[#aa759f] border border-dashed border-[#aa759f] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#b5e853] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    cat article.md &rarr;
                  </span>
                </div>
              </article>
            </Link>
          );
        })}
      </div>

      {/* Upcoming Posts */}
      {upcomingPosts.length > 0 && (
        <div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="hacker-glow text-xl m-0">即将发布</h2>
            <span className="text-[#555] text-xs">// coming soon</span>
          </div>
          <div className="space-y-4">
            {upcomingPosts.map((post) => {
              const color = categoryColors[post.category] || "#b5e853";
              return (
                <div
                  key={post.slug}
                  className="terminal-block p-4 opacity-50 cursor-default"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold px-2 py-0.5 border border-dashed rounded"
                        style={{ color, borderColor: color }}
                      >
                        {post.category}
                      </span>
                      <span className="text-[#555] text-xs">
                        预计 {post.date}
                      </span>
                    </div>
                    <span className="text-[#555] text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-base text-[#eaeaea] mb-1 m-0">
                    {post.title}
                  </h3>
                  <p className="text-[#666] text-sm m-0">{post.excerpt}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Footer prompt */}
      <div className="mt-12 text-center">
        <Link
          href="/"
          className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline transition-colors"
        >
          <span className="text-[#555]">$</span> cd ~/ &larr; 返回首页
        </Link>
      </div>
    </div>
  );
}
