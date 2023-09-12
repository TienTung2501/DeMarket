"use client"
import React from 'react'
import styles from './User.module.scss'
import {BiSolidUserCircle} from 'react-icons/bi'
const User = () => {
  return (
    <div className={styles.use_container}>
      <BiSolidUserCircle/>
    </div>
  )
}

export default User
