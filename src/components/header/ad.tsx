import React from "react";
import styles from "./styles.module.scss";
import { BannerButton } from "../ui";

export default function Ad() {
  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <div className={styles.yellow}>Ready-to-use Cupons</div>
        <div className={styles.white}>Save 200$ bonus cupon</div>
        <BannerButton>shop now</BannerButton>
      </div>
    </div>
  );
}
