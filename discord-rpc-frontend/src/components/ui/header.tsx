import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/header.css";
import Link from "next/link";

export default function Header({
  children,
}: Partial<{ children: React.ReactNode }>) {
  return (
    <header className="home-header">
      <Link href="/">
        <h1 className="heading">Discord RPC</h1>
      </Link>
      {children}
      <Link href="https://github.com/webfryingpan/next-rpc">
        <FontAwesomeIcon icon={faGithub} className="github-icon" color="#fff" />
      </Link>
    </header>
  );
}
