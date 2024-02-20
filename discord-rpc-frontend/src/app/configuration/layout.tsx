import Header from "@components/ui/header";
import Footer from "@components/ui/footer";
import Controls from "@components/ui/controls";

export const metadata = {
  title: "RPC configuration",
  description: "Discord RPC configuration page.",
};

interface ConfigurationLayoutProps {
  children: React.ReactNode;
}

const ConfigurationLayout: React.FC<ConfigurationLayoutProps> = ({
  children,
}) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer controls={<Controls />} />
      </body>
    </html>
  );
};

export default ConfigurationLayout;
