import BlogIndexView from "@/app/components/blog/BlogIndexView";
import { posts } from "./posts";

/* 博客列表页使用新的研究站视图组件。 */
export default function BlogPage() {
  return <BlogIndexView posts={posts} />;
}
