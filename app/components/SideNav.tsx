"use client";

import { useEffect, useState } from "react";

const navItems = [
  { id: "home", label: "首页" },
  { id: "advantages", label: "核心优势" },
  { id: "about", label: "关于我们" },
  { id: "products", label: "产品服务" },
  { id: "careers", label: "招贤纳士" },
  { id: "contact", label: "联系我们" },
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const visibleSections = new Map<string, number>();

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(item.id, entry.intersectionRatio);
            } else {
              visibleSections.delete(item.id);
            }

            if (visibleSections.size > 0) {
              let topId = "";
              let topY = Infinity;
              visibleSections.forEach((_, id) => {
                const rect = document.getElementById(id)?.getBoundingClientRect();
                if (rect && Math.abs(rect.top) < topY) {
                  topY = Math.abs(rect.top);
                  topId = id;
                }
              });
              if (topId) setActiveId(topId);
            }
          });
        },
        { threshold: 0, rootMargin: "-96px 0px -50% 0px" }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden xl:block">
      <ul className="list-none p-0 m-0 space-y-1">
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          const linkClass = [
            "sidenav-link group flex items-center no-underline transition-all duration-300",
            "text-sm tracking-wide whitespace-nowrap py-1",
            isActive ? "active" : "",
          ].join(" ");

          const barClass = [
            "inline-block mr-3 rounded-full transition-all duration-300",
            isActive
              ? "w-5 h-[2px] bg-[#b5e853] shadow-[0_0_6px_rgba(181,232,83,0.4)]"
              : "w-2 h-[2px] bg-[#444] group-hover:w-4 group-hover:bg-[#888]",
          ].join(" ");

          return (
            <li key={item.id} className="m-0">
              <a href={`#${item.id}`} className={linkClass}>
                <span className={barClass} />
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
