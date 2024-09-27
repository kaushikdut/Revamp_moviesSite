import { Link } from "react-router-dom";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h1>
          Movies<span className="logo-span">FLIX</span>
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
