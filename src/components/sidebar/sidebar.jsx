import Logo from "../logo/logo";
import { FaAngleDoubleLeft } from "react-icons/fa";

import "./sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="close-btn" onClick={() => {}}>
        <FaAngleDoubleLeft />
      </div>
      <Logo />
    </div>
  );
};

export default Sidebar;
