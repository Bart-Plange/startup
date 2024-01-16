import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './homeStyle.css'
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AboutImg from '../../assets/images/carousel/about_hero.png';
import HeroImg from '../../assets/images/carousel/donation_hero.png';
import AnoImg from '../../assets/images/carousel/edu1.jpg';
import AnnoImg from '../../assets/images/carousel/hero.png';

const workItems = [
  { image: AboutImg, link: '/work' },
  { image: HeroImg, link: '/work' },
  { image: AnoImg, link: '/work' },
  { image: AnnoImg, link: '/work' },
  { image: HeroImg, link: '/work' },
];

const Carousel = () => {
  const [isHovered, setIsHovered] = useState(false);

  let slideInterval;

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    beforeChange: (current, next) => {
      clearInterval(slideInterval);
      setIsHovered(false);

      slideInterval = setInterval(() => {
        document.querySelector('.slick-slider').slickGoTo(next);
        clearInterval(slideInterval);
      }, 2000);
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 0.5, y: 0, scale: 1 },
  };

  const imgHoverVariants = {
    hover: { scale: 1.05 },
  };

  const textHoverVariants = {
    hover: { scale: 1.2, opacity: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  };

  const shakeVariants = {
    hover: { x: [-5, 5, -5, 5, 0], y: [9, -9] },
  };

  return (
    <div className="w-full h-1/2">
      <Slider {...settings} className="slick-slider">
        {workItems.map((item, index) => (
          <Link to={item.link} key={index}>
            <motion.div
              className="relative overflow-hidden w-full h-1/2"
              whileHover="hover"
              initial="rest"
              animate="rest"
              variants={shakeVariants}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="object-cover h-full w-full fit"
                variants={imgHoverVariants}
              />
              <motion.div
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center hover:bg-black hover:bg-opacity-70 text-white"
                initial="hidden"
                animate={isHovered ? 'visible' : 'hidden'}
                variants={overlayVariants}
              >
                <motion.p variants={textHoverVariants} initial="hidden" whileHover="hover">
                  Sample Work
                </motion.p>
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
