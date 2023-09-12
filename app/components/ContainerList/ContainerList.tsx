'use client'

import React from "react"
import ListNft from "../ListNft/ListNft"
import styles from './ContainerList.module.scss'
interface ContainerListProps{
    title: string;
    description: string;
}

const ContainerList = ({
    title,
    description}:ContainerListProps) => {
  return (
    <div className={styles.containerList_container}>
      <h1>{title}</h1>
      <p>{description}</p>
      <ListNft/>
    </div>
  )
}

export default ContainerList
