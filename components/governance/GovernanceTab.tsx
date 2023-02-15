"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const GovernanceTab = () => {
  const menu = [
    { title: "Bbaby", url: "/governance/bbaby", url2: "/governance" },
    { title: "Twitter", url: "/governance/twitter" },
    { title: "BBCNews", url: "/governance/news" },
    { title: "Reddit", url: "/governance/reddit" },
    { title: "TikTak", url: "/governance/tiktak" },
  ];
  const pathname = usePathname();

  return (
    <div className="mb-3 overflow-hidden rounded-[6px] border border-reddit_border bg-reddit_dark-brighter text-[14px]">
      <div className="flex w-full items-center justify-center">
        {menu.map((m, index) => (
          <Link
            key={index}
            href={m.url}
            shallow={true}
            className={`${pathname === m.url || pathname === m.url2 ? "font-extrabold text-reddit_text" : "text-reddit_text-darker"}`}
          >
            <p className={`mx-3 py-3`}>{m.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GovernanceTab;
