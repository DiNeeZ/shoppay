import React from "react";
import styles from "./styles.module.scss";
import { BannerButton } from "../ui";
import Image from "next/image";

export default function Ad() {
  return (
    <div className={styles.add}>
      <Image
        src="/images/main-banner-bg.jpg"
        alt="banner"
        width={970}
        height={90}
        className={styles.addBackground}
      />
      <div className={styles.container}>
        <div className={styles.yellow}>Ready-to-use Cupons</div>
        <div className={styles.white}>Save 200$ bonus cupon</div>
        <BannerButton>shop now</BannerButton>
      </div>
    </div>
  );
}
