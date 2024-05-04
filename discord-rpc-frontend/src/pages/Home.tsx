import Footer from "@components/ui/footer";
import Header from "@components/ui/header";
import "@styles/global.css";
import "@styles/pages/home.css";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="information">
          This Discord RPC GUI is developed by <b>webfryingpan</b>
        </h1>
        <Link className="begin" to="configuration">
          Let`s begin!
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Home;
