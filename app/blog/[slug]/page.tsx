import Link from "next/link";
import { posts, getPostBySlug, categoryColors } from "../posts";
import { notFound } from "next/navigation";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function generateStaticParams() {
  return posts
    .filter((p) => p.published)
    .map((p) => ({ slug: p.slug }));
}

/* ── Poem: 智取Claude记 ── */
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
    <div className="poem-poster">
      {/* Noise overlay */}
      <div className="poem-noise" />
      <div className="poem-side-left" />
      <div className="poem-side-right" />

      {/* Header */}
      <div className="text-center mb-12 relative z-[2]">
        <p className="font-mono text-xs text-[#5b9bd5] opacity-50 tracking-[4px] mb-6">
          ~/claude.sh
        </p>
        <h2 className="poem-title">智取Claude记</h2>
        <p className="font-mono text-[11px] text-[rgba(235,230,220,0.4)] mt-4 tracking-[2px]">
          // a developer&apos;s journey through the Great Firewall
        </p>
      </div>

      {/* Ornament divider */}
      <div className="flex items-center justify-center gap-4 mb-10 relative z-[2]">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.4)] to-transparent" />
        <div className="w-[3px] h-[3px] rounded-full bg-[#d4a853] opacity-25" />
        <div className="w-[6px] h-[6px] bg-[#d4a853] opacity-40 rotate-45" />
        <div className="w-[3px] h-[3px] rounded-full bg-[#d4a853] opacity-25" />
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[rgba(212,168,83,0.4)] to-transparent" />
      </div>

      {/* Stanzas */}
      <div className="flex flex-col items-center gap-2 relative z-[2]">
        {stanzas.map((stanza, i) => {
          const variantClass = stanza.variant === "warm"
            ? "poem-stanza-warm"
            : stanza.variant === "vision"
            ? "poem-stanza-vision"
            : "";

          return (
            <div key={stanza.label}>
              {/* Mini divider before stanza 6 (after "伍") */}
              {i === 5 && (
                <div className="w-[30px] h-px bg-[rgba(212,168,83,0.4)] mx-auto my-3" />
              )}
              <div className={["poem-stanza", variantClass].join(" ")}>
                <div className="poem-stanza-label">{stanza.label}</div>
                {stanza.lines.map((line) => (
                  <div key={line} className="poem-verse">{line}</div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Mini divider before finale */}
        <div className="w-[30px] h-px bg-[rgba(212,168,83,0.4)] mx-auto my-3" />

        {/* Finale */}
        <div className="poem-stanza poem-stanza-finale relative mt-2 pt-5 px-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60px] h-px bg-gradient-to-r from-transparent via-[#d4a853] to-transparent" />
          {finale.map((line) => (
            <div key={line} className="poem-verse-finale">{line}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-[2] mt-12 pt-6 flex justify-between items-end border-t border-[rgba(212,168,83,0.06)]">
        <div className="font-mono text-[10px] text-[rgba(235,230,220,0.12)] leading-[2]">
          <span className="text-[rgba(91,155,213,0.2)]">$</span> proxychains4 -q claude<br />
          <span className="text-[rgba(91,155,213,0.2)]">&#x2713;</span> Connected via Chicago relay<br />
          <span className="text-[rgba(91,155,213,0.2)]">&#x2713;</span> Opus 4.6 &middot; Pro Plan
        </div>
        <div className="text-right">
          <div className="font-serif text-xs text-[rgba(212,168,83,0.4)] tracking-[3px]">
            天眼投资CEO出品
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main page component ── */
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

  const color = categoryColors[post.category] || "#b5e853";

  return (
    <div className="py-12">
      {/* Back link */}
      <div className="mb-8">
        <Link
          href={`${basePath}/blog`}
          className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline transition-colors"
        >
          <span className="text-[#555]">$</span> cd ../blog/ &larr; 返回博客
        </Link>
      </div>

      {/* Post header */}
      <div className="terminal-block p-4 mb-8">
        <p className="text-[#666] text-sm m-0 mb-2">
          <span className="text-[#b5e853]">$</span> cat {post.slug}.md
        </p>
        <div className="flex items-center gap-3 mb-2">
          <span
            className="text-xs font-bold px-2 py-0.5 border border-dashed rounded"
            style={{ color, borderColor: color }}
          >
            {post.category}
          </span>
          <span className="text-[#555] text-xs">{post.date}</span>
          <span className="text-[#555] text-xs">{post.readTime}</span>
        </div>
        <h1 className="hacker-glow text-2xl md:text-3xl m-0 mb-2">
          {post.title}
        </h1>
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
      </div>

      {/* Quote + intro */}
      <div className="mb-8 px-4 py-4 border-l-2 border-[#d4a853]">
        <p className="text-[#d4a853] text-base italic m-0 mb-3">
          &ldquo;{post.quote}&rdquo;
        </p>
        {post.intro && (
          <p className="text-[#999] text-sm m-0 leading-relaxed">
            {post.intro}
          </p>
        )}
      </div>

      {/* Post content — each slug maps to its own renderer */}
      {slug === "claude-code-setup-story" && <PoemPost />}
      {/* Add new post renderers here: {slug === "xxx" && <XxxPost />} */}

      {/* Bottom nav */}
      <div className="mt-12 flex items-center gap-6">
        <Link
          href={`${basePath}/blog`}
          className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline transition-colors"
        >
          &larr; 所有文章
        </Link>
        <Link
          href={`${basePath}/`}
          className="text-[#63c0f5] hover:text-[#b5e853] text-sm no-underline transition-colors"
        >
          &larr; 首页
        </Link>
      </div>
    </div>
  );
}
