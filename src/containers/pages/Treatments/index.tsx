import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CardServices from "../../../components/card/CardServices";
import { useData } from "../../../context/ContextApi";
import Services from "../../../interfaces/Services";
import Loading from "../../../components/Loading";

//type Props = {};

const TreatmentsPage: React.FC = () => {
  const { services, loading } = useData();

  if (loading || !services) {
    return <Loading/>
  }
  return (
    <>
      <Breadcrumbs title="Our Treatments & Services" subtitle="Services" />
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {services.map((service: Services, index) => (
              <CardServices
                key={service.id}
                data={service}
                delay={0.1 * index} // Calcula el delay basado en el índice
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TreatmentsPage;
