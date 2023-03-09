import React from "react";
import cn from "classnames";
import styles from "./Navlink.module.css";
import Link from "next/link";

export default function Navlink({ title, path }) {
  return (
    <Link href={path} passHref >
      <div className={cn(styles.cNavItem, styles.cursorPpointer)}>
        <div className={cn(styles.cNavQ, styles.cursorPointer)}>
          <div className={styles.cNavQText}>
            <div className={styles.navQText} >{title}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
