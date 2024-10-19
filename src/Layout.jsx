import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Sideheader } from "../src/components/header/sideheader/Sideheader";

const Layout = () => {
  return (
    <main className="main_wrapper main_block">
      <section className="left_block">
        <Header />
      </section>
      <section className="right_block">
        <Sideheader />
        <div className="content_block">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Layout;
