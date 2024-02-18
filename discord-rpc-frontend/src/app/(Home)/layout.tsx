import Header from "@components/ui/header";

export const metadata = {
  title: "Discord RPC",
  description: "Discord RPC homepage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <footer>Footer. Not implemented.</footer>
      </body>
    </html>
  );
}
