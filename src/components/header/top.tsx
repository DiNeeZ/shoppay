import React from "react";

import { LiaFlagUsaSolid } from "react-icons/lia";
import { MdOutlineSecurity, MdHelpCenter } from "react-icons/md";
import {
  RiServiceFill,
  RiAccountCircleFill,
  RiArrowDropDownLine,
} from "react-icons/ri";
import { IoHeartCircleSharp } from "react-icons/io5";

import styles from "./styles.module.scss";
import Link from "next/link";

export default function Top() {
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.top__content}>
          <div></div>
          <ul className={styles.top__list}>
            <li className={styles.top__item}>
              <LiaFlagUsaSolid className={styles.top__icon} />
              <span>United States / USD</span>
            </li>
            <li className={styles.top__item}>
              <MdOutlineSecurity className={styles.top__icon} />
              <span>Buyer Protection</span>
            </li>
            <li className={styles.top__item}>
              <RiServiceFill className={styles.top__icon} />
              <span>Customer Service</span>
            </li>
            <li className={styles.top__item}>
              <MdHelpCenter className={styles.top__icon} />
              <span>Help</span>
            </li>
            <li className={styles.top__item}>
              <IoHeartCircleSharp className={styles.top__icon} />
              <Link href="/profile/wishlist" className={styles.top__link}>
                <span>WishList</span>
              </Link>
            </li>
            <li className={styles.top__item}>
              <RiAccountCircleFill className={styles.top__icon} />
              <span>Account</span>
              <button className={styles.top__dropdownBtn}>
                <RiArrowDropDownLine className={styles.top__icon} />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
