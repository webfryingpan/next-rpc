import "./css/footer.css";

interface FooterProps {
  controls?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = ({ controls }) => {
  return (
    <footer className="footer">
      <p className="creditals">developed by: webfryingpan</p>
      {controls}
    </footer>
  );
};

export default Footer;
