import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./css/header.css";
import Link from "next/link";

interface HeaderProps {
  controls?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ controls }) => {
  return (
    <header className="header">
      <Link href="/">
        <h1 className="heading">Discord RPC</h1>
      </Link>
      {controls || <></>}
      <Link href="https://github.com/webfryingpan/next-rpc">
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </Link>
    </header>
  );
};

export default Header;
