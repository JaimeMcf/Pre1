import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"; 
import Footer from "./footer"; 

const Layout = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <main style={{ padding: "30px", flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

