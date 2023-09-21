'use client'

import Link from "next/link"
import Image, { StaticImageData } from "next/image"
import styles from './Avatar.module.scss'

interface AvatarProps{
    avatar:StaticImageData,
}
const Avatar=function({avatar}:AvatarProps){
    return(
        <div className={styles.container_avatar}>
            <Image src={avatar} width={150} height={200} alt="Avatar" />
        </div>
    )
}
export default Avatar;