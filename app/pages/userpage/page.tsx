
import React from 'react'
import styles from './User.module.scss'
import images from '@/public/images'
import  {InfoBg}  from '@/app/components/User/InfoUser'
import SideBarLeft from '@/app/components/SibarLeftUser/SideBarLeft'
import TagUser from '@/app/components/User/TagUser/TagUser'
const UserPage = () => {
  const userInfo={
    image_bg:images.BG_1,
    image_av:images.NFT_16,
    user_name:"TienTung",
    sologan:"Nguyen Tien Tung",
    link_face:"/facebook.com",
    link_twitter:"/twitter.com"
  };
  
  return (
    <div className={styles.container}>
      <InfoBg user={userInfo}/>
      <div className={styles.container_body}>
        <SideBarLeft sibar_left_user={true} sibar_left_marketpace={false}/>
        <TagUser/>
      </div>
      
    </div>
  )
}

export default UserPage
