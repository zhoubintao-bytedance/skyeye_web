import { companyProfile, homepageNavItems } from "@/app/content/homepage";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/* 页脚集中放置公司主体、主导航和联系信息，作为站点可信度收口。 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(94,94,94,0.85)] bg-black text-white">
      <div className="mx-auto grid w-[92%] max-w-[1200px] gap-10 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#76b900]">
            SKYEYE RESEARCH
          </p>
          <h2 className="m-0 text-2xl font-bold leading-[1.08] tracking-[-0.03em] text-white">
            {companyProfile.name}
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-[1.7] text-[#a7a7a7]">
            {companyProfile.description}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#76b900]">
            导航
          </h3>
          <div className="space-y-3">
            {homepageNavItems.map((item) => (
              <a
                key={item.id}
                href={`${basePath}/${item.href}`}
                className="block text-sm font-bold tracking-[0.04em] text-white no-underline transition-colors hover:text-[#76b900]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#76b900]">
            联系
          </h3>
          <div className="space-y-3 text-sm text-[#a7a7a7]">
            <p className="m-0">{companyProfile.address}</p>
            <a
              href={`mailto:${companyProfile.email}`}
              className="block text-sm font-bold tracking-[0.04em] text-white no-underline transition-colors hover:text-[#76b900]"
            >
              {companyProfile.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
