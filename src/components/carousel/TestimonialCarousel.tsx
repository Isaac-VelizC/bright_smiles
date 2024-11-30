import React from "react";
import Slider from "react-slick";
import CardTestimonial from "../card/CardTestimonial";
import { useData } from "../../context/ContextApi";
import Testimonial from "../../interfaces/Testimonial";

//type Props = {}

const TestimonialCarousel: React.FC = () => {
  const { testimonials, loading } = useData();
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
  if (loading || !testimonials) {
    return <div> loading</div>;
  }
  return (
    <Slider {...settings} className="m-0 relative">
      {testimonials.map((item: Testimonial) => (
        <CardTestimonial key={item.id} data={item} />
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
