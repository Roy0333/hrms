import { Branding } from "./branding/Branding";
import { Navbar } from "./navbar/Navbar";
import "./header.scss";

export const Header = () => {
  return (
    <header className="header_wrap">
      <div className="header_cont">
        <Branding />
        <Navbar />
      </div>
    </header>
  );
};
