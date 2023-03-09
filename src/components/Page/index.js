import React, { useState, useEffect } from "react";
import DripReverse from "../DripReverse";
import styles from "./Page.module.sass";
import Footer from "../Footer";
import Navbar from "../Header/Navbar";
import cn from "classnames";

const Page = ({ children }) => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const autoCloseNavbarDesktop = () => {
      if (navbar === true) {
        setNavbar(false);
        console.log("rasd");
      }
    };
    window.addEventListener("resize", autoCloseNavbarDesktop);
    return () => {
      window.removeEventListener("resize", autoCloseNavbarDesktop);
    };
  }, [navbar]);

  return (
    <div className={styles.page}>
      <Navbar navbar={navbar} setNavbar={(navbar) => setNavbar(navbar)} />
      <div className={cn(navbar && styles.hidden, styles.container)}>
        <div className={styles.inner}>{children}</div>
        <DripReverse />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
