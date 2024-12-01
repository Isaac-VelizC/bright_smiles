import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

interface SlideProps {
  backgroundImage: string;
  title: React.ReactNode;
  text: string;
  link: string;
}

const Slide: React.FC<SlideProps> = ({ backgroundImage, title, text, link }) => (
  <motion.section
    className="h-[600px] relative"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
  >
    <div
      className="bg-cover bg-no-repeat h-full flex items-center border-none"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundPosition: "top center",
      }}
    >
      <div className="absolute inset-0 bg-porcelain bg-opacity-40"></div>
      <div className="container mx-auto px-6 relative z-10 text-center md:text-left flex justify-center lg:justify-end">
        <motion.div
          className="max-w-xl space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-wider text-primary">{title}</h1>
          <p className="text-lg mb-2">{text}</p>
          <a
            href={link}
            className="inline-block px-8 py-4 bg-primary text-white text-base rounded-full hover:bg-secondary transition duration-300 ease-in-out"
          >
            View our works
          </a>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const IntroCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true, // Para efecto de desvanecimiento entre slides
  };

  const slides = [
    {
      backgroundImage: "/imgs/bg-2.webp",
      title: (
        <>
          Helping You <span className="block pt-3">Stay Happy One</span>
        </>
      ),
      text: "Everyday we bring hope and smiles to the patients we serve.",
      link: "/treatments",
    },
    {
      backgroundImage: "/imgs/bg-4.jpg",
      title: (
        <>
          Smile Makes <br /> A Lasting Impression
        </>
      ),
      text: "Your health is our top priority with comprehensive and affordable medical care.",
      link: "/treatments",
    },
  ];

  return (
    <Slider {...settings} className="h-[600px] relative overflow-hidden">
      {slides.map((slide, index) => (
        <Slide
          key={index}
          backgroundImage={slide.backgroundImage}
          title={slide.title}
          text={slide.text}
          link={slide.link}
        />
      ))}
    </Slider>
  );
};

export default IntroCarousel;
