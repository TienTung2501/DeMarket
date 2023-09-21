'use client'
import React from 'react'
interface IconComponentProps{
    children :React.ReactNode;
}
import styles from './IconComponent.module.scss'
const IconComponent = ({children}:IconComponentProps) => {
  return (
    <div className={styles.icon_container}>
      {children}
    </div>
  )
}

export default IconComponent
