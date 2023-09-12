'use client'
import React from 'react'
import {MdNotificationsActive} from "react-icons/md";
import styles from'./Notifycation.module.scss'
const Notifycation = () => {
  return (
    <div className={styles.notification_container}>
      <MdNotificationsActive/>
    </div>
  )
}

export default Notifycation
