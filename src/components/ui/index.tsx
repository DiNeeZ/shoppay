import React from "react";
import Link from "next/link";
import { FaCaretRight } from "react-icons/fa";
import styles from "./styles.module.scss";

export function BannerButton({ children }: { children: React.ReactNode }) {
  return (
    <Link href="/browse" className={styles.bannerButton}>
      <span>{children}</span>
      <FaCaretRight />
    </Link>
  );
}
