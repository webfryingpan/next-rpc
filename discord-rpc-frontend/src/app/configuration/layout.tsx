import Header from "@components/ui/header";
import "../global.css";

export const metadata = {
  title: "RPC configuration",
  description: "Discord RPC configuration page.",
};

export default function ConfigrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer>Footer. Not implemented.</footer>
      </body>
    </html>
  );
}
