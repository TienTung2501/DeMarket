import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import images from "@/public/images";
import Button from "../Button/Button";
interface BackGroundProps {
  image_width: number;
  image_height: number;
  title: string;
  image_alt: string;
  description: string;
  image_src: StaticImageData;
  name_Bg_Page: string;
}
import styles from "./Background.module.scss";
const BackGround = ({
  image_width,
  image_height,
  title,
  image_alt,
  description,
  image_src,
  name_Bg_Page,
  ...propagateServerField
}: BackGroundProps) => {
  return (
    <div className={styles.background_container}>
      <div className={styles.background_container_header}>
        <div className={styles.background_container_image}>
          <Image
            src={image_src}
            width={image_width}
            height={image_height}
            alt={image_alt}
            layout="responsive"
          />
        </div>
        <div className={styles.background_content_container}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.background_content_button_container}>
            <Link href="#">
              <Button className="btn_config_purple">Explore</Button>
            </Link>
            <Link href="#">
              <Button className="btn_config_purple">GettingStated</Button>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.background_container_bottom}>
        <h4>{name_Bg_Page}</h4>
      </div>
    </div>
  );
};

export default BackGround;
