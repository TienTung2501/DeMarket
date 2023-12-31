"use client";

import React from "react";
import images from "@/public/images";
import styles from "./ListFollower.module.scss";
import Follower from "./Follower/Follower";
interface ListFollowerProps{
}
const ListFollower = ({}:ListFollowerProps) => {
  const Followers = [
    {
      id_user: 0,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 1",
      price: 1327.124,
    },
    {
      id_user: 1,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 1",
      price: 1327.124,
    },
    {
      id_user: 2,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 2",
      price: 1327.124,
    },
    {
      id_user: 3,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 7",
      price: 1327.124,
    },
    {
      id_user: 4,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 7",
      price: 1327.124,
    },
    {
      id_user: 5,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 7",
      price: 1327.124,
    },
    {
      id_user: 6,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 7",
      price: 1327.124,
    },
    {
      id_user: 7,
      image_user: images.User_1,
      image_bg: images.BG_1,
      name_user: "User 7",
      price: 1327.124,
    },
  ];
  return(
    <div className={styles.listnft_container_box}>
        {
            Followers.map((Fol)=>{
                return(
                    <Follower key={Fol.id_user} id_user={Fol.id_user}
                    image_user={Fol.image_user}
                    image_bg={Fol.image_bg}
                    name_user={`${Fol.name_user}`}
                    price={Fol.price}/>
                )
            })
        }
    </div>
  )
};

export default ListFollower;
