import React from "react";
import styles from "./styles.module.scss";
import Ad from "./ad";

export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
    </header>
  );
}
