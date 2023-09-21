import BackGround from "@/app/components/BackGround/BackGround";
import styles from "./Marketpalce.module.scss";
import React from "react";
import images from "@/public/images";
import SideBarLeft from "@/app/components/SibarLeftUser/SideBarLeft";
import ListNft from "@/app/components/ListNft/ListNft";
import Link from "next/link";
import ListFollower from "@/app/components/ListFollower/ListFollower";
import Pagination from "@/app/components/Pagination/Pagination";

const page = () => {
  return (
    <div className={styles.container}>
      <BackGround
        image_src={images.BG_1}
        image_width={1500}
        image_height={640}
        image_alt="BackGround"
        title="Examples For Creating Solid UX Design"
        description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."
        name_Bg_Page="Home / Marketplace"
        button1_name="Buy"
        button2_name="Sell"
      />
      <div className={styles.container_body}>
        <SideBarLeft sibar_left_user={false} sibar_left_marketpace={true} />
        <div className={styles.container_list}>
          <ListNft /> 
          <Pagination/>
          <div>
          <ListFollower/>
          <Pagination/>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default page;
