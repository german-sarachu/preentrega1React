import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout--container">
      <div className="header__wrapper">
        <Brand />
        <NavBar />
      </div>
      <main className="main--container"> {children} </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout