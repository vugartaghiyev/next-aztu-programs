import styles from "./Slider.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [startTurning, setStartTurning] = useState(false);

  const sliderItems = [
    {
      image: "/images/slider1.jpg",
      title: "Slider 1",
      desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      image: "/images/slider2.jpg",
      title: "Slider 2",
      desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use  Lorem Ipsum, you need to be sure there isn't anything embarrassing ",
    },
    {
      image: "/images/slider3.jpg",
      title: "Slider 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nunc, euismod eget nunc nunc euismod nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nunc euismod nunc, euismod ",
    },
    {
      image: "/images/slider4.jpg",
      title: "Slider 4",
      desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,the cites of the word in ",
    },
  ];

  const turnRight = () => {
    setStartTurning(true);
    setTimeout(() => {
      if (currentSlide === sliderItems.length - 1) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(currentSlide + 1);
      }
      setStartTurning(false);
    }, 1000);
  };

  const turnLeft = () => {
    setStartTurning(true);
    setTimeout(() => {
      if (currentSlide === 0) {
        setCurrentSlide(sliderItems.length - 1);
      } else {
        setCurrentSlide(currentSlide - 1);
      }
      setStartTurning(false);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <img
        onClick={turnLeft}
        className={[styles.arrow, styles.leftArrow].join(" ")}
        src="https://img.icons8.com/ios-filled/64/ffffff/back.png"
      />
      <img
        onClick={turnRight}
        className={[styles.arrow, styles.rightArrow].join(" ")}
        src="https://img.icons8.com/ios-filled/64/ffffff/forward--v1.png"
      />
      <div
        className={
          startTurning
            ? [styles.image, styles.turnImage].join(" ")
            : styles.image
        }
      >
        <Image
          src={sliderItems[currentSlide].image}
          layout="fill"
          objectFit="cover"
          priority
          placeholder="blur"
          blurDataURL="data:..."
        />
      </div>
      <div className={styles.content}>
        <h2
          className={
            startTurning
              ? [styles.title, styles.decreaseOpacity].join(" ")
              : styles.title
          }
        >
          {sliderItems[currentSlide].title}
        </h2>
        <p
          className={
            startTurning
              ? [styles.desc, styles.decreaseOpacity].join(" ")
              : styles.desc
          }
        >
          {sliderItems[currentSlide].desc}
        </p>
        <button
          className={
            startTurning
              ? [styles.button, styles.decreaseOpacity].join(" ")
              : styles.button
          }
        >
          İndi öyrən
        </button>
      </div>
    </div>
  );
};

export default Slider;
