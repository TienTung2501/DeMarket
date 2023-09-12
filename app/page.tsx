
import React from "react";
import styles from '../public/styles/homepage.module.scss'
import BackGround from "./components/BackGround/BackGround";
import images from "@/public/images";
import ContainerList from "./components/ContainerList/ContainerList";
import ListNft from "./components/ListNft/ListNft";
import ListTopNft from "./components/ListTopNFT/ListTopNft";
import ListCollection from "./components/Collection/ListCollection";
export default function HomePage() {
  return (
    <div className={styles.main_home}>
      <BackGround image_src={images.BG_1} image_width={1500} image_height={640} image_alt="BackGround" title="Examples For Creating Solid UX Design"
      description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts." name_Bg_Page="Home"/>
      <ContainerList title="New Item" description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."><ListNft/></ContainerList>
      <ContainerList title="Trending Item" description="Here are the top assets that are currently trending on our exchange, which we evaluate based on the criteria of uniqueness and rarity. "><ListTopNft/></ContainerList>
      <ContainerList title="Selling Item" description="Beginning of the app and website design process, we know it’s tempting to dive right into picking fonts."><ListNft/></ContainerList>
      <ContainerList title="Top Collection" description="Beginning of the app and website design process."><ListCollection/></ContainerList>
    </div>
    
  );
}
