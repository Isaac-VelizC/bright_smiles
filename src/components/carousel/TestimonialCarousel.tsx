import React from "react";
import Slider from "react-slick";
import CardTestimonial from "../card/CardTestimonial";

//type Props = {}

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="m-0 relative">
      <CardTestimonial
        name="Racky Henderson"
        img="public/images/person_1.jpg"
        content="Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
        rol="Farmer"
      />
      <CardTestimonial
        name="Henry Dee"
        img="public/images/person_2.jpg"
        content="Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
        rol="Businessman"
      />
      <CardTestimonial
        name="Mark Ruff"
        img="public/images/person_3.jpg"
        content="Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
        rol="Students"
      />
      <CardTestimonial
        name="Rodel Golez"
        img="public/images/person_4.jpg"
        content="Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts."
        rol="Striper"
      />
    </Slider>
  );
};

export default TestimonialCarousel;
