
import React from "react";
import styles from '../public/styles/homepage.module.scss'
import BackGround from "./components/BackGround/BackGround";
import images from "@/public/images";
import ContainerList from "./components/ContainerList/ContainerList";

export default function HomePage() {
  return (
    <div className={styles.main_home}>
      <BackGround image_src={images.BG_1} image_width={1500} image_height={640} image_alt="BackGround" title="Examples For Creating Solid UX Design"
      description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts." name_Bg_Page="Home"/>
      <ContainerList title="New Item" description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."/>
      <ContainerList title="Selling Item" description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."/>
    
    </div>
    
  );
}
