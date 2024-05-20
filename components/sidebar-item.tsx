"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ISidebarItem {
  item: { imgURL: string; label: string; route: string };
}
export const SidebarItem = ({ item }: ISidebarItem) => {
  const pathname = usePathname();
  const isActive =
    pathname === item.route || pathname.startsWith(`${item.route}/`);
  return (
    <Link
      href={item.route}
      key={item.label}
      className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
    >
      <div className="relative size-6">
        <Image
          src={item.imgURL}
          alt={item.label}
          fill
          className={cn({
            "brightness-[3] ": isActive,
          })}
        />
      </div>
      <p className={cn("sidebar-label", { "!text-white": isActive })}>
        {item.label}
      </p>
    </Link>
  );
};
