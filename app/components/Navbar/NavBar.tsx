"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
//import Icon:

import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
//Internal import
import { Discover } from ".";
import images from "@/public/images";
import styles from "./Navbar.module.scss";
import { Suspense } from "react";
const NavBar = () => {
  return (
    <div className={styles.container_navbar}>
      <nav className={`navbar navbar-light bg-light navbar-expand-lg `}>
        <div className={`container-fluid ${styles.navbar_container_fluid}`}>
        <Link href="/" className="navbar-brand">
            <Image src={images.Logo} width={300} height={80} alt="DeMarket" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Discover />
        </div>
      </nav>
    </div>
    );
};

export default NavBar;
