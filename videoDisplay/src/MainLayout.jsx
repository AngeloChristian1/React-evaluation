import Sidebar from "./Sidebar.jsx";
import "./All.css";

function MainLayout({ children }) {
  return (
    <>
      <div className="nav">
        <Sidebar />
      </div>
      <div className="container">{children}</div>
      {/* <div className="mainContent"></div> */}
    </>
  );
}

export default MainLayout;
