import React from "react";
import AboutSection from "../../../components/about";
import CardService from "../../../components/services/CardService";
import IntroSection from "./Intro";
import CardDoctor from "../../../components/doctors/CardDoctor";
import HeadingSection from "../../../components/sections/HeadingSection";
import CardBlog from "../../../components/card/CardBlog";
import IntroCarousel from "../../../components/carousel/IntroCarousel";
import CardPricing from "../../../components/card/CardPricing";
import InputForm from "../../../components/form/InputForm";
import SectionConsultation from "../../../components/sections/SectionConsultation";
import SectionTestimonial from "../../../components/sections/SectionTestimonial";
import services from "../../../data/services";
import doctors from "../../../data/doctors";
import blogs from "../../../data/blogs";
import { Link } from "react-router-dom";

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

//type Props = {};

const HomePage: React.FC = () => {
  return (
    <>
      <IntroCarousel />
      <AboutSection />

      <section className="relation flex items-center justify-between">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Tarjeta 1: Dental Services */}
            <div className="bg-secondary flex flex-col justify-center px-8 text-center py-16 md:py-0">
              <h3 className="mb-6 text-xl font-semibold text-porcelain">
                Dental Services
              </h3>
              <p className="text-porcelain mb-6 text-custom-16 leading-relaxed tracking-wider">
                A small river named Duden flows by their place and supplies
              </p>
              <Link
                to="/treatments"
                className="uppercase font-bold text-xs text-porcelain underline underline-offset-2 hover:text-primary"
              >
                See Services
              </Link>
            </div>

            {/* Formulario: Free Consultation */}
            <div className="bg-primary py-10 md:col-span-2 px-6">
              <h3 className="mb-6 text-xl font-semibold text-porcelain text-center">
                Free Consultation
              </h3>
              <form action="#">
                <div className="flex flex-wrap">
                  {/* Espaciado negativo para manejar el padding */}
                  <InputForm name="First Name" type="text" />
                  <InputForm name="Last Name" type="text" />
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <select
                      name=""
                      id=""
                      className="border-b-2 w-[90%] h-10 px-0 bg-primary text-porcelain font-medium text-[13px] focus:outline-none"
                    >
                      <option value="" className="">
                        Department
                      </option>
                      <option value="" className="">
                        Neurology
                      </option>
                      <option value="" className="">
                        Cardiology
                      </option>
                      <option value="" className="">
                        Dental
                      </option>
                      <option value="" className="">
                        Ophthalmology
                      </option>
                      <option value="" className="">
                        Other Services
                      </option>
                    </select>
                  </div>
                  <InputForm name="Date" type="text" />
                  <InputForm name="Time" type="text" />
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
            </div>

            {/* Tarjeta 2: Find A Doctor */}
            <div className="bg-secondary flex flex-col justify-center px-8 text-center py-16 md:py-0">
              <h3 className="mb-4 text-xl font-semibold text-porcelain">
                Find A Doctor
              </h3>
              <p className="text-porcelain mb-6 text-custom-16 leading-relaxed tracking-wider">
                A small river named Duden flows by their place and supplies
              </p>
              <Link
                to="/doctor"
                className="uppercase font-bold text-xs text-porcelain underline underline-offset-2 hover:text-primary"
              >
                Meet our doctor
              </Link>
            </div>
          </div>
        </div>
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
                title={service.title}
                content={service.content}
                icon={service.icon}
                delay={0.2 * index} // Calcula el delay basado en el índice
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
                name={doctor.name}
                content={doctor.content}
                specialty={doctor.specialty}
                img={doctor.img}
                delay={0.2 * index} // Calcula el delay basado en el índice
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
                delay={0.2 * index} // Calcula el delay basado en el índice
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
                delay={0.2 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
