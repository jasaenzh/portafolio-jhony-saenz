import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="container py-4">{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
