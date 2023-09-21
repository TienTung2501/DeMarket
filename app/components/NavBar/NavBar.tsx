"use client";

import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Discover, User, Search, Wallet, Notify } from "./index";
import styles from "./NavBar.module.scss";
import images from "@/public/images";
import { BsSearch } from "react-icons/bs";
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import Sidebar from "./Sidebar/Sidebar";
const NavBar = () => {
  const [openSibar, setOpenSibar] = useState(false);

  const handleOpenSibar = function () {
    setOpenSibar(!openSibar);
  };
  return (
    <div className={styles.container_navbar}>
      <div className={styles.container_logo}>
        <Link href={"/"}>
          <Image src={images.Logo} width={300} height={80} alt="Logo" />
        </Link>
      </div>
      <div className={styles.container_search}>
        <Search title="Search">
          <BsSearch />
        </Search>
      </div>
      <div className={styles.container_discover}>
        <Discover />
      </div>

      <div className={styles.container_list}>
        <div className={styles.container_notify}>
          <Notify/>
        </div>
        <div className={styles.container_user}>
          <User />
        </div>
        <div className={styles.container_wallet}>
          <Wallet />
        </div>
      </div>
      { openSibar&&<div className={styles.container_sidebar}>
       <Sidebar/>
      </div>
      }
      <div className={styles.container_button_menu}>
        <button className={styles.button_menu} onClick={handleOpenSibar}>
          <BsFillMenuButtonWideFill />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
