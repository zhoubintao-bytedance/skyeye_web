import Link from "next/link";
import { BlogPost, BlogPostSection, categoryColors } from "@/app/blog/posts";
import AgentsMarkdownCopyPanel from "@/app/components/blog/AgentsMarkdownCopyPanel";
import { recommendedAgentsMarkdown } from "@/app/blog/recommendedAgentsMarkdown";

/* 诗歌文章正文继续保留特殊排版，只是换到新的站点视觉外壳里。 */
function PoemPost() {
  const stanzas = [
    { label: "壹", lines: ["大厂精英键盘响", "欲驭Opus写华章", "怎奈Anthropic设天堑", "中国IP一律凉"] },
    { label: "贰", lines: ["破局先从身份起", "VPN一开换国籍", "Outlook新号白如雪", "数字世界隐匿迹"] },
    { label: "叁", lines: ["美区Apple玩得转", "小红书里翻攻略", "免税州址信手填", "社工能力满级已"] },
    { label: "肆", lines: ["闲鱼拍下二十刀", "礼品卡兑Pro套餐", "别人还在苦寻路", "我已登堂抢先机"] },
    { label: "伍", lines: ["宝贝好坨来助阵", "美区账号一手办", "闺蜜七七手更巧", "冰雪聪明解难关"], variant: "warm" as const },
    { label: "陆", lines: ["芝加哥租一小鸡", "专为隐匿真IP", "不装Node.js不装Caddy", "只开SSH作桥基"] },
    { label: "柒", lines: ["SOCKS5隧道穿山海", "proxychains静默开", "字节代理一声unset", "两套网络互不碍"] },
    { label: "捌", lines: ["autossh守护连", "systemd自复原", "脚本三行拨千斤", "断网重启皆无感"] },
    { label: "玖", lines: ["架构精妙在分离", "中转只过流量去", "本地编码本地跑", "一核一G恰够力"] },
    { label: "拾", lines: ["从此终端一声令", "最强模型任我驱", "同事犹循古法写", "我已上线新功能"] },
    { label: "拾壹", lines: ["自研天眼待雕琢", "量化交易梦未落", "Opus在手如虎翼", "来日神功惊四座"], variant: "vision" as const },
  ];

  const finale = ["回首八步皆等闲", "天堑飞渡只半天", "而今Opus随指令", "敢教乾坤换新天"];

  return (
    <div className="poem-poster mt-10">
      <div className="poem-noise" />
      <div className="poem-side-left" />
      <div className="poem-side-right" />

      <div className="relative z-[2] mb-12 text-center">
        <p className="mb-6 font-mono text-xs tracking-[4px] text-[#5b9bd5] opacity-50">~/claude.sh</p>
        <h2 className="poem-title">智取Claude记</h2>
        <p className="mt-4 font-mono text-[11px] tracking-[2px] text-[rgba(235,230,220,0.4)]">
          {"// a developer's journey through the Great Firewall"}
        </p>
      </div>

      <div className="relative z-[2] mb-10 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.4)] to-transparent" />
        <div className="h-[3px] w-[3px] rounded-full bg-[#d4a853] opacity-25" />
        <div className="h-[6px] w-[6px] rotate-45 bg-[#d4a853] opacity-40" />
        <div className="h-[3px] w-[3px] rounded-full bg-[#d4a853] opacity-25" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.4)] to-transparent" />
      </div>

      <div className="relative z-[2] flex flex-col items-center gap-2">
        {stanzas.map((stanza, index) => {
          const variantClass =
            stanza.variant === "warm"
              ? "poem-stanza-warm"
              : stanza.variant === "vision"
                ? "poem-stanza-vision"
                : "";

          return (
            <div key={stanza.label}>
              {index === 5 ? (
                <div className="mx-auto my-3 h-px w-[30px] bg-[rgba(212,168,83,0.4)]" />
              ) : null}
              <div className={["poem-stanza", variantClass].join(" ")}>
                <div className="poem-stanza-label">{stanza.label}</div>
                {stanza.lines.map((line) => (
                  <div key={line} className="poem-verse">
                    {line}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="mx-auto my-3 h-px w-[30px] bg-[rgba(212,168,83,0.4)]" />

        <div className="poem-stanza poem-stanza-finale relative mt-2 px-10 pt-5">
          <div className="absolute top-0 left-1/2 h-px w-[60px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          {finale.map((line) => (
            <div key={line} className="poem-verse-finale">
              {line}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-[2] mt-12 flex items-end justify-between border-t border-[rgba(212,168,83,0.06)] pt-6">
        <div className="font-mono text-[10px] leading-[2] text-[rgba(235,230,220,0.12)]">
          <span className="text-[rgba(91,155,213,0.2)]">$</span> proxychains4 -q claude
          <br />
          <span className="text-[rgba(91,155,213,0.2)]">&#x2713;</span> Connected via Chicago relay
          <br />
          <span className="text-[rgba(91,155,213,0.2)]">&#x2713;</span> Opus 4.6 &middot; Pro Plan
        </div>
        <div className="text-right">
          <div className="font-serif text-xs tracking-[3px] text-[rgba(212,168,83,0.4)]">
            天眼投资CEO出品
          </div>
        </div>
      </div>
    </div>
  );
}

/* 通用正文按分节数据渲染，避免未来文章只能展示头部信息。 */
function GenericPostBody({
  sections,
  wideHeading,
}: {
  sections: BlogPostSection[];
  wideHeading?: boolean;
}) {
  /* 通用文章按“索引列 + 内容列”组织，强化工业化阅读节奏。 */
  return (
    <div className="mt-10 space-y-5">
      {sections.map((section, index) => (
        <article
          key={`${section.heading}-${index}`}
          className="blog-article-panel p-6 md:p-7"
        >
          <div
            className={[
              "grid gap-6",
              wideHeading ? "md:grid-cols-[15rem_minmax(0,1fr)]" : "md:grid-cols-[11rem_minmax(0,1fr)]",
            ].join(" ")}
          >
            <div className="md:border-r md:border-[rgba(118,185,0,0.18)] md:pr-6">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#76b900]">
                Module {String(index + 1).padStart(2, "0")}
              </p>
              <h2
                className={[
                  "mt-3 font-bold leading-[1.1] text-white",
                  wideHeading ? "text-[1.6rem] md:whitespace-nowrap" : "text-[1.85rem]",
                ].join(" ")}
              >
                {section.heading}
              </h2>
            </div>

            <div>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-sm leading-[1.95] text-[#c9c9c9]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.bullets?.length ? (
                <ul className="mt-5 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border border-[rgba(118,185,0,0.2)] bg-[rgba(118,185,0,0.05)] px-4 py-3 text-sm leading-[1.8] text-[#d8d8d8]"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

/* 文章头部统一承载元信息、摘要和高亮要点，通用文章在这里体现新的设计语言。 */
function PostHero({
  post,
  color,
  isPoemPost,
}: {
  post: BlogPost;
  color: string;
  isPoemPost: boolean;
}) {
  /* 诗歌文章头部不展示长摘要，避免在正文前提前剧透。 */
  const shouldShowExcerpt = !isPoemPost;

  return (
    <section className="blog-article-hero mt-10 p-6 md:p-8">
      <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.16em] text-[#898989]">
        <span className="border px-2 py-1 font-bold" style={{ borderColor: color, color }}>
          {post.category}
        </span>
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>

      <div className="mt-8 grid gap-8">
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-[#76b900]">
            {isPoemPost ? "Story Archive" : "Research Note"}
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] text-white md:text-[3.4rem]">
            {post.title}
          </h1>
          {shouldShowExcerpt ? (
            <p className="mt-5 max-w-3xl text-base leading-[1.9] text-[#d8d8d8]">{post.excerpt}</p>
          ) : null}

          <div className="mt-7 border-l-2 border-[#76b900] pl-5">
            <p className="m-0 text-lg italic leading-[1.9] text-[#f1f1f1]">&ldquo;{post.quote}&rdquo;</p>
            {post.intro ? (
              <p className="mt-4 text-sm leading-[1.85] text-[#a7a7a7]">{post.intro}</p>
            ) : null}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-[rgba(94,94,94,0.95)] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#a7a7a7]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* 文章详情页统一输出新的研究站外壳，并根据 slug 渲染正文内容。 */
export default function BlogPostView({ post }: { post: BlogPost }) {
  const color = categoryColors[post.category] || "#76b900";
  const isPoemPost = post.slug === "claude-code-setup-story";
  const isAgentsPost = post.slug === "recommended-agents-md";

  return (
    <main className="bg-black py-14 text-white md:py-18">
      <div className="blog-article-shell mx-auto w-[92%] max-w-[980px]">
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border-2 border-[#76b900] px-4 py-3 text-[0.82rem] font-bold tracking-[0.12em] text-white no-underline transition-colors hover:bg-[#76b900] hover:text-black"
          >
            博客列表
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[rgba(94,94,94,0.95)] px-4 py-3 text-[0.82rem] font-bold tracking-[0.12em] text-white no-underline transition-colors hover:border-[#76b900] hover:text-[#76b900]"
          >
            返回首页
          </Link>
        </div>

        <PostHero post={post} color={color} isPoemPost={isPoemPost} />

        {isPoemPost ? <PoemPost /> : null}
        {!isPoemPost && post.body?.length ? (
          <GenericPostBody sections={post.body} wideHeading={isAgentsPost} />
        ) : null}
        {isAgentsPost ? <AgentsMarkdownCopyPanel markdown={recommendedAgentsMarkdown} /> : null}
      </div>
    </main>
  );
}
