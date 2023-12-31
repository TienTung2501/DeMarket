"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "./ListTopNft.module.scss";
import images from "@/public/images";
import TopNftItem from "./TopNftItem/TopNftItem";

const ListTopNft = () => {
  const list_1 = [
    {
      key: 1,
      src: images.NFT_1,
    },
    {
      key: 2,
      src: images.NFT_2,
    },
    {
      key: 3,
      src: images.NFT_3,
    },
    {
      key: 4,
      src: images.NFT_4,
    },
    {
      key: 5,
      src: images.NFT_5,
    },
    {
      key: 6,
      src: images.NFT_6,
    },
    {
      key: 7,
      src: images.NFT_7,
    },
  ];
  const list_2 = [
    {
      key: 1,
      src: images.NFT_8,
    },
    {
      key: 2,
      src: images.NFT_9,
    },
    {
      key: 3,
      src: images.NFT_10,
    },
    {
      key: 4,
      src: images.NFT_11,
    },
    {
      key: 5,
      src: images.NFT_12,
    },
    {
      key: 6,
      src: images.NFT_13,
    },
    {
      key: 7,
      src: images.NFT_14,
    },
  ];
  const [animation1Enabled, setAnimation1Enabled] = useState(true);
  const [animation2Enabled, setAnimation2Enabled] = useState(true);
  useEffect(() => {
    const interval1 = setInterval(() => {
      setAnimation1Enabled(!animation1Enabled);
    }, 10000); // Kích hoạt animation mỗi 10 giây cho list_1

    const interval2 = setInterval(() => {
      setAnimation2Enabled(!animation2Enabled);
    }, 8000); // Kích hoạt animation mỗi 8 giây cho list_2

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [animation1Enabled, animation2Enabled]);
  return (
    <div className={styles.container_list}>
      <div className={styles.container_list_item}>
        {list_1.map((NFT) => {
          return (
            <TopNftItem key={NFT.key} image={NFT.src} classname="moveRightToLeft"/>
          );
        })}
      </div>

      <div className={styles.container_list_item} >
        {list_2.map((NFT) => {
          return (
            <TopNftItem key={NFT.key} image={NFT.src}  classname="moveLeftToRight"/>
          );
        })}
      </div>
    </div>
  );
};

export default ListTopNft;
// style={{
//   animation: animation1Enabled
//     ? "scrollImages2 8s linear infinite"
//     : "none",
// }}
// style={{
//   animation: animation1Enabled
//     ? "scrollImages1 10s linear infinite"
//     : "none",
// }}
