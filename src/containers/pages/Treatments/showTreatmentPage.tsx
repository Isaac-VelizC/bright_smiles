import FormConsult from "../../../components/form/FormConsult";
import { motion } from "framer-motion";
import React from "react";
import CardService from "../../../components/services/CardService";
import { useData } from "../../../context/ContextApi";
import Services from "../../../interfaces/Services";

//type Props = {}

const showTreatmentPage: React.FC = () => {
  const { services } = useData();
  return (
    <>
      <section
        className="relative hero-wrap hero-wrap-2 py-24 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/imgs/bg-1.webp')",
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-40"></div>
        {/* Overlay oscuro */}
        <div className="container mx-auto px-6 relative">
          <div className="text-white flex flex-wrap items-center justify-center h-full">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }} // Usa el delay pasado como prop
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-9/12 text-center text-4xl font-bold"
            >
              <h1 className="mb-2 ">Servicos de </h1>
              <p className="uppercase text-primary">Hola </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">informacion</div>
      </section>
      <section className="relation flex items-center justify-between">
        <FormConsult />
      </section>
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {services.map((service: Services, index) => (
              <CardService
                key={service.id}
                data={service}
                delay={0.2 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default showTreatmentPage;
