import Link from "next/link";
import Image from "next/image";
import { sidebarLinks } from "@/constants";
import { SidebarItem } from "@/components/sidebar-item";

export const Sidebar = () => {
  return (
    <aside className="sidebar drop-shadow-xl">
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="mb-12 items-center gap-2">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={35}
            height={35}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>
        {sidebarLinks.map((item) => (
          <SidebarItem item={item} key={item.label} />
        ))}
      </nav>
    </aside>
  );
};
