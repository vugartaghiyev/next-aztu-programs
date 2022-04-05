import React from "react";
import Link from "next/link";
import { useState } from "react";
import styles from "./Modules.module.css";
import Image from "next/image";

const Modules = () => {
  const [modules, setModules] = useState([
    {
      _id: 0,
      title: "Nəqliyyat və logistika",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/logistics.png",
    },
    {
      _id: 1,
      title: "Energetika və avtomatika",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/energy.png",
    },
    {
      _id: 2,
      title: "Metallurgiya və materialşünaslıq",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/metallurgy.png",
    },
    {
      _id: 3,
      title: "Maşınqayırma və robototexnika",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/robotics.png",
    },
    {
      _id: 4,
      title: "İnformasiya və telekommunikasiya texnologiyaları",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/it.png",
    },
    {
      _id: 5,
      title: "Xüsusi texnika və texnologiya",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/techniques.png",
    },
    {
      _id: 6,
      title: "İqtisadiyyat və idarəetmə",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      img: "/images/economy.png",
    },
  ]);

  return (
    <div className={styles.modules}>
      {modules.map((item) => (
        <Link href="/module" key={item._id}>
          <a className={styles.item}>
            <div className={styles.itemImage}>
              <Image src={item.img} layout="fill" />
            </div>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.itemDesc}>{item.desc}</p>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Modules;
