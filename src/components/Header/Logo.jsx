import React from "react";
import cn from "classnames";
import styles from "./Logo.module.css";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" passHref>
      <div className={cn(styles.buttonContainer, styles.alternate)}>
        <h2>MONKAI</h2>
      </div>
    </Link>
  );
};
