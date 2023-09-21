'use client'
import React from 'react'

import CardNFT from './CardNFT/CardNft'
import styles from './ListNft.module.scss'
import images from '@/public/images'
import Link from "next/link";
import {GrFormNextLink} from 'react-icons/gr'
const ListNft = () => {
    const NFTs=[
        {
          id:0,
          image_nft:images.NFT_1,
          image_user:images.User_1,
          name_nft:"NFT 1",
          name_user:"User 1",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:1,
          image_nft:images.NFT_2,
          image_user:images.User_2,
          name_nft:"NFT 2",
          name_user:"User 2",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:2,
          image_nft:images.NFT_3,
          image_user:images.User_3,
          name_nft:"NFT 3",
          name_user:"User 3",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:3,
          image_nft:images.NFT_4,
          image_user:images.User_4,
          name_nft:"NFT 4",
          name_user:"User 4",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:4,
          image_nft:images.NFT_5,
          image_user:images.User_5,
          name_nft:"NFT 5",
          name_user:"User 5",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:5,
          image_nft:images.NFT_6,
          image_user:images.User_6,
          name_nft:"NFT 6",
          name_user:"User 6",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:6,
          image_nft:images.NFT_7,
          image_user:images.User_7,
          name_nft:"NFT 7",
          name_user:"User 7",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
        {
          id:7,
          image_nft:images.NFT_7,
          image_user:images.User_7,
          name_nft:"NFT 7",
          name_user:"User 7",
          metadatatype:"Gift",
          price_nft:90,
          policyid:"qhut0...hfteh45"
        },
      ]
  return (
    <div className={styles.listnft_container_box}>
        {NFTs.map((NFT)=>{
            return<CardNFT key={NFT.id} id_nft={NFT.id} image_nft={NFT.image_nft}
            image_user={NFT.image_user}
            name_nft={`${NFT.name_nft}`}
            name_user={`${NFT.name_user}`}
            metadatatype={`${NFT.metadatatype}`}
            price_nft={NFT.price_nft}
            policyid={`${NFT.policyid}`} />
        })}

    </div>
  )
}

export default ListNft
