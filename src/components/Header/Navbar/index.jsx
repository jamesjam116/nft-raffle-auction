import React, { useState, useEffect } from "react";
import { Logo } from "../Logo";
import Navlink from "../Navlink/Navlink";
import NavLinkMobile from "../Navlink/NavlinkMobile";
import cn from "classnames";
import styles from "./Navbar.module.css";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { adminValidate } from "../../../contexts/transaction-raffle";
import { useWallet } from "@solana/wallet-adapter-react";

const navLinks = [
  {
    name: "stake",
    path: "https://monkainft.com/stake",
    title: "STAKING",
  },
  {
    name: "create",
    path: "/create",
    title: "Create",
    admin: true,
  },
  {
    name: "raffle",
    path: "/raffle",
    title: "RAFFLE",
  },
  {
    name: "auction",
    path: "/auction",
    title: "AUCTION",
  },
  {
    name: "walletconnect",
    path: "#",
    title: "Connect Wallet",
    mobile: (
      <WalletModalProvider>
        <WalletMultiButton />
      </WalletModalProvider>
    ),
  },
];

export default function Navbar({ navbar, setNavbar }) {
  const wallet = useWallet();
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (wallet.publicKey !== null) {
      const admin = adminValidate(wallet);
      setIsAdmin(admin);
    }
    // eslint-disable-next-line
  }, [wallet.connected]);

  const handleNavbar = (e, navLink) => {
    e?.stopPropagation();
    if (navLink != "#") {
      setNavbar(!navbar)
    };
  };

  return (
    <div className={cn(styles.navbarContainer)}>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <div className={styles.logo} onClick={() => navbar && handleNavbar()}>
            <Logo />
          </div>
        </div>
        <div className={styles.itemsDesktop}>
          <ul className={styles.itemsListDesktop}>
            {navLinks.map((navLink) => {
              if (navLink.admin != !isAdmin) {
                return (
                  <li
                    key={navLink.name}
                    className={navLink.mobile ? styles.mobile : styles.desktop}
                  >
                    <Navlink {...navLink} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className={styles.register}>
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div>
        <div className={styles.itemsMobile} onClick={() => handleNavbar()}>
          <div className={styles.hamburgerLines}>
            <span
              className={cn(
                styles.line,
                styles.line1,
                navbar && styles.checked
              )}
            ></span>
            <span
              className={cn(
                styles.line,
                styles.line2,
                navbar && styles.checked
              )}
            ></span>
            <span
              className={cn(
                styles.line,
                styles.line3,
                navbar && styles.checked
              )}
            ></span>
          </div>
        </div>
        <div
          className={cn(styles.hamburgerMenu, !navbar && styles.hidden)}
        >
          <ul
            className={cn(
              styles.navMobile,
              "flex",
              "absolute",
              "top-24",
              "right-0",
              "bottom-0",
              "w-full",
              "z-50",
              "flex-col",
              navbar ? styles.fromLeft : styles.left
            )}
          >
            {navLinks.map((navLink) => {
              if (navLink.admin != !isAdmin) {
                return (
                  <li key={navLink.name} 
                    onClick={(e) => handleNavbar(e, navLink.path)}>
                    <NavLinkMobile {...navLink} />
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
