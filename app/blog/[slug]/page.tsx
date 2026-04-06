import BlogPostView from "@/app/components/blog/BlogPostView";
import { posts, getPostBySlug } from "../posts";
import { notFound } from "next/navigation";

/* 静态导出时只为已发布文章生成路径。 */
export function generateStaticParams() {
  return posts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}
/* 文章详情页只负责路由取数与 404 判断，视图交给统一组件。 */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return <BlogPostView post={post} />;
}
