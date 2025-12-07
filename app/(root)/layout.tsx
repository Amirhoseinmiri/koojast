import type { Metadata } from "next";
import Header from "../../components/header";

export const metadata: Metadata = {
  title: "main page",
  description: "test description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
