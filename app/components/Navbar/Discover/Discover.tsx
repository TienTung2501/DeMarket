'use client'
import React from "react";
import Link from "next/link";

import styles from './Discover.module.scss'
import { BsSearch } from "react-icons/bs";
import More from "./More/More";
import { Notifycation, User, SideBar, Search } from "../index";
const WalletButton = React.lazy(() => import("../Wallet/Wallet"));
const Discover = () => {
  return (
     <div className={`collapse navbar-collapse `} id="navbarScroll">
     <Search title="Search">
       <BsSearch />
     </Search>
     <ul className={`navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll ${styles.discover_menu_container}`}>
       <li className="nav-item">
         <Link className="nav-link active" aria-current="page" href="#">
           Explore
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" href="#">
           Market
         </Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" href="#">
           Contact
         </Link>
       </li>
       <More />
     </ul>
     <div className={styles.auth_container}>
     <Notifycation  />
     <User />
     <WalletButton />
     </div>
   </div>
  );
};

export default Discover;
