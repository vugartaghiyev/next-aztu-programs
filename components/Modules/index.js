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
      departments: [
        "Nəqliyyat logistikası və hərəkətin təhlükəsizliyi",
        "Nəqliyyat texnikası və idarəetmə texnologiyaları",
      ],
      img: "/images/logistics.png",
    },
    {
      _id: 1,
      title: "Energetika və avtomatika",
      departments: [
        "Elektrotexnika",
        "Avtomatika və idarəetmə",
        "Enerji effektivliyi və yaşıl enerji texnologiyaları",
        "Mühəndis fizikası və elektronika",
      ],
      img: "/images/energy.png",
    },
    {
      _id: 2,
      title: "Metallurgiya və materialşünaslıq",
      departments: [
        "Metallurgiya və materiallar texnologiyası",
        "Kimya texnologiya, təkrar emal və ekologiya",
      ],
      img: "/images/metallurgy.png",
    },
    {
      _id: 3,
      title: "Maşınqayırma və robototexnika",
      departments: [
        "Maşınqayırma texnologiyası",
        "Mexatronika və maşın dizaynı",
        "Mexanika",
      ],
      img: "/images/robotics.png",
    },
    {
      _id: 4,
      title: "İnformasiya və telekommunikasiya texnologiyaları",
      departments: [
        "Kompüter texnologiyaları və kiber təhlükəsizlik",
        "Mühəndis riyaziyyatı və süni intellekt",
        "Radiotexnika və telekommunikasiya",
      ],
      img: "/images/it.png",
    },
    {
      _id: 5,
      title: "Xüsusi texnika və texnologiya",
      departments: [
        "Xüsusi texnologiyalar və avadanlıqlar",
        "Radioelektron və aerokosmik sistemlər",
        "Xüsusi təyinatlı material və vasitələr",
      ],
      img: "/images/techniques.png",
    },
    {
      _id: 6,
      title: "İqtisadiyyat və idarəetmə",
      departments: [
        "Beynəlxalq ticarət, logistika və marketinq",
        "İqtisadiyyat və statistika",
        "Xarici dillər",
        "Humanitar fənlər",
      ],
      img: "/images/economy.png",
    },
  ]);

  return (
    <div className={styles.modules}>
      {modules.map((item) => (
        <div key={item._id} className={styles.item}>
          <div className={styles.itemImage}>
            <Image src={item.img} layout="fill" />
          </div>
          <Link href="/module">
            <a className={styles.itemTitle}>{item.title}</a>
          </Link>
          <ol className={styles.itemDepartments}>
            {item.departments.map((dept) => (
              <li key={dept}>
                <Link href="/module">
                  <a className={styles.itemLink}>{dept}</a>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  );
};

export default Modules;
