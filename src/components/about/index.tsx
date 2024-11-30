import { motion } from "framer-motion";
import React from "react";

//type Props = {};

const AboutSection: React.FC = () => {
  return (
    <section className="flex items-center justify-center lg:h-screen h-auto mx-6 md:mx-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center mx-0 px-0">
          {/* Imagen de fondo */}
          <div
            className="w-full h-56 md:h-80 lg:h-screen lg:w-5/12 md:p-5 img img-2 mt-5 md:mt-0"
            style={{
              backgroundImage: "url(/imgs/about-2.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Contenido de la sección */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0.5, y: 50 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative w-full lg:w-7/12 py-4 md:py-5 lg:pl-12"
          >
            <div className="tracking-wide block relative mb-6">
              <div className="md:pl-5 md:ml-5 md:pt-5">
                <span className="uppercase tracking-tight text-custom-16 mb-8">
                  Welcome to Dentista
                </span>
                <h2 className="mb-10 text-custom-32 pt-4 md:tracking-widest leading-tight">
                  Medical specialty concerned with the care of acutely ill
                  hospitalized patients
                </h2>
              </div>
            </div>
            <div className="md:pl-5 md:ml-5 mb-5 text-custom-16 leading-loose text-gray-500">
              <p className="mb-8">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth. Even the
                all-powerful Pointing has no control about the blind texts it is
                an almost unorthographic life One day however a small line of
                blind text by the name of Lorem Ipsum decided to leave for the
                far World of Grammar.
              </p>
              <p className="mb-8">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <div className="founder flex items-center mt-5">
                <div
                  className="img w-16 h-16 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: "url(images/doc-1.jpg)" }}
                />
                <div className="text pl-4 leading-snug">
                  <h3 className="mb-0 text-2xl text-gray-800">
                  Clínica Dental Go Smile
                  </h3>
                  <span className="position text-sm">Expertos dentales</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
