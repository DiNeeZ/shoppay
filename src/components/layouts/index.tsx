import React from "react";
import Header from "../header";
import Footer from "../footer";

import styles from "./styles.module.scss";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
