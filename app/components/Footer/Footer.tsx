'use client'
import Link from "next/link";
import React from "react";

import { BsSearch } from "react-icons/bs";
import styles from "./Footer.module.scss";
import Image from "next/image";
import images from "@/public/images";
import  Search  from "../NavBar/Search/Search";
const Footer = () => {
  return (
    <div className="d-flex flex-column h-100 bg-light">
      <footer className="w-100 py-4 flex-shrink-0 border-top border-secondary">
        <div className="container py-4">
          <div className="row gy-4 gx-5">
            <div className="col-lg-4 col-md-6">
              <Link href="/" className="navbar-brand">
                <Image
                  src={images.Logo}
                  width={300}
                  height={80}
                  alt="DeMarket"
                />
              </Link>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
                <Link className={styles.text_special} href="#">
                  DeMarket.com
                </Link>
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-muted mb-2">Main Page</h5>
              <ul className={`list-unstyled text-muted ${styles.container_box_menu}`}>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">Explore</Link>
                </li>
                <li>
                  <Link href="#">Create</Link>
                </li>
                <li>
                  <Link href="#">Collection</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-muted mb-2">Useful Page</h5>
              <ul className={`list-unstyled text-muted ${styles.container_box_menu}`}>
                <li>
                  <Link href="#">About</Link>
                </li>
                <li>
                  <Link href="#">Guide</Link>
                </li>
                <li>
                  <Link href="#">New</Link>
                </li>
                <li>
                  <Link href="#">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-muted mb-3">Newsletter</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <Search title="Your Feed Back">
                <span className={styles.sendfeedback_footer}>Send</span>
              </Search>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
