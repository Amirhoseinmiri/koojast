import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "main page",
  description: "test description",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      <div className="">{children}</div>
    </main>
  );
}
