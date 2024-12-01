import React from "react";
import AboutSection from "../../../components/about";
import CardService from "../../../components/services/CardService";
import IntroSection from "./Intro";
import CardDoctor from "../../../components/doctors/CardDoctor";
import HeadingSection from "../../../components/sections/HeadingSection";
import CardBlog from "../../../components/card/CardBlog";
import IntroCarousel from "../../../components/carousel/IntroCarousel";
import CardPricing from "../../../components/card/CardPricing";
import SectionConsultation from "../../../components/sections/SectionConsultation";
import SectionTestimonial from "../../../components/sections/SectionTestimonial";
import blogs from "../../../data/blogs";
import { useData } from "../../../context/ContextApi";
import FormConsult from "../../../components/form/FormConsult";

const pricings = [
  {
    type: "Basic",
    price: 24.5,
  },
  {
    type: "Standard",
    price: 34.5,
  },
  {
    type: "Premium",
    price: 54.5,
  },
  {
    type: "Platinum",
    price: 89.5,
  },
];

const HomePage: React.FC = () => {
  const { doctors, services, loading } = useData();

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <>
      <IntroCarousel />
      <AboutSection />

      <section id="consultFree" className="relation flex items-center justify-between">
        <FormConsult/>
      </section>

      <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <HeadingSection
            title="Services"
            subtitle="Our Clinic Services"
            content="Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country."
          />
          {/* Cambia 'row' por 'flex flex-wrap justify-center' */}
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <CardService
                key={index}
                data={service}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>

      <IntroSection />

      <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <HeadingSection
            title="Doctors"
            subtitle="Our Qualified Doctors"
            content="Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country."
          />

          <div className="flex flex-wrap justify-center">
            {doctors.slice(0, 4).map((doctor, index) => (
              <CardDoctor
                key={index}
                data={doctor}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>

      <SectionTestimonial />

      <SectionConsultation />

      <section className="ftco-section flex items-center justify-center">
        <div className="container">
          <HeadingSection
            title="Pricing"
            subtitle="Our Pricing"
            content="Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country"
          />

          <div className="flex flex-wrap justify-center">
            {pricings.map((price, index) => (
              <CardPricing
                key={index}
                type={price.type}
                price={price.price}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>

      <section className="ftco-section flex items-center justify-center bg-gray-50 flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <HeadingSection
            title="Blog"
            subtitle="Recent Blog"
            content="Separated they live in. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country."
          />
          <div className="flex flex-wrap justify-center">
            {blogs.slice(0, 3).map((blog, index) => (
              <CardBlog
                key={index}
                title={blog.title}
                content={blog.content}
                comments={blog.comments}
                user={blog.user}
                img={blog.img}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

{
  /*<form onSubmit={handleSubmit}>
      <div className="flex flex-wrap">
        <InputForm name="First Name" type="text" value={formData.firstName} onChange={handleChange} />
        <InputForm name="Last Name" type="text" value={formData.lastName} onChange={handleChange} />
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <select
            name="servicio"
            id="servicio"
            className="border-b-2 w-[90%] h-10 px-0 bg-primary text-porcelain font-medium text-[13px] focus:outline-none"
            value={formData.servicio}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((item) => (
              <option key={item.id} value={item.id}>
                {item.title}
              </option>
            ))}
            <option value="0">Other Services</option>
          </select>
        </div>
        <InputForm name="Date" type="text" value={formData.date} onChange={handleChange} />
        <InputForm name="Time" type="text" value={formData.time} onChange={handleChange} />
        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
          <button
            type="submit"
            className="w-full py-2 bg-secondary text-porcelain text-lg rounded-full hover:bg-goldenrod hover:text-gray-900 transition duration-300"
          >
            Appointment
          </button>
        </div>
      </div>
    </form>
*/
}
