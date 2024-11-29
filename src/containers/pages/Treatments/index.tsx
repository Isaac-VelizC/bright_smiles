import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CardServices from "../../../components/card/CardServices";
import services from "../../../data/services";

//type Props = {};

const TreatmentsPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs title="Our Treatments & Services" subtitle="Services" />
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {services.map((service, index) => (
              <CardServices
                key={index}
                title={service.title}
                content={service.content}
                img={service.img}
                delay={0.2 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;
