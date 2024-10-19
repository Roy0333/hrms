import { Link } from "react-router-dom";
import "./branding.scss";

export const Branding = () => {
  return (
    <Link to="/" className="branding_logo">
      <img src="../../src/assets/images/A.png"></img>
    </Link>
  );
};
