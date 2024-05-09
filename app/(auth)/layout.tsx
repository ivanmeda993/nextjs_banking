interface IAuthLayout {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: IAuthLayout) {
  return <main className="flex h-screen w-full font-inter">{children}</main>;
}
