interface IDashboardLayout {
  children?: React.ReactNode;
}

export default function DashboardLayout({ children }: IDashboardLayout) {
  return <main className="flex h-screen w-full font-inter">{children}</main>;
}
