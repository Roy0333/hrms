import "./sideheader.scss";
// import { useNavigate } from "react-router-dom";

export const Sideheader = () => {
  //   const nevigate = useNavigate();
  function logout() {
    localStorage.clear();
    // nevigate("/login");
    window.location.reload();
  }
  return (
    <section className="sideHeader_wrap">
      <div className="sideheader_cont">
        <h1>Component Name</h1>
        <div className="login_info">
          <button onClick={logout} className="short_name">
            AR
          </button>
        </div>
      </div>
    </section>
  );
};
