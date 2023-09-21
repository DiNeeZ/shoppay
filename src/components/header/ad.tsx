import React from "react";
import styles from "./styles.module.scss";
import { BannerButton } from "../ui";

export default function Ad() {
  return (
    <div className={styles.add}>
      <div className={styles.container}>
        <div className={styles.add__content}>
          <div className={`${styles.add__text} ${styles.add__orange}`}>
            Ready-to-use Cupons
          </div>
          <div className={styles.add__text}>Save 200$ bonus cupon</div>
          <BannerButton>shop now</BannerButton>
        </div>
      </div>
    </div>
  );
}
