import React from "react";

import Ad from "./ad";
import Top from "./top";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
    </header>
  );
}
