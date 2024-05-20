import { Sidebar } from "@/components/sidebar";
import Image from "next/image";
import MobileNav from "@/components/mobile-nav";

interface IDashboardLayout {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayout) {
  return (
    <main className="flex flex-col md:flex-row h-screen w-full font-inter">
      <Sidebar />
      <div
        className="flex h-16 items-center justify-between p-5  sm:p-8 md:hidden border-b  drop-shadow shadow-sm
         "
      >
        <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
        <div>
          <MobileNav />
        </div>
      </div>
      <section className="page ">
        <div className="page-content invert-0 ">{children}</div>
      </section>
    </main>
  );
}
