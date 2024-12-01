import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import FormConsult from "../../../components/form/FormConsult";
import CardService from "../../../components/services/CardService";
import { useData } from "../../../context/ContextApi";
import Error404 from "../../errors/404";
import { getServiceById } from "../../../db/request";
import Services from "../../../interfaces/Services";
import Loading from "../../../components/Loading";

const ShowTreatmentPage: React.FC = () => {
  const { services } = useData();
  const { id } = useParams<{ id: string }>();
  const [treatment, setTreatment] = useState<Services | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Validar ID y obtener tratamiento
  useEffect(() => {
    const fetchTreatment = async () => {
      if (!id || isNaN(Number(id))) {
        setTreatment(null);
        setLoading(false);
        return;
      }

      try {
        const fetchedTreatment = await getServiceById(Number(id));
        setTreatment(fetchedTreatment);
      } catch (error) {
        console.error("Error fetching treatment:", error);
        setTreatment(null);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatment();
  }, [id]);

  if (loading) {
    return <Loading/>;
  }

  if (!treatment) {
    return <Error404 />;
  }

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative hero-wrap hero-wrap-2 py-24 bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${treatment.img})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "top center",
        }}
      >
        <div className="absolute inset-0 bg-primary opacity-40"></div>
        <div className="container mx-auto px-6 relative">
          <div className="text-white flex flex-wrap items-center justify-center h-full">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="w-full md:w-9/12 text-center text-4xl font-bold"
            >
              <h1 className="mb-2">Servicios de </h1>
              <p className="uppercase text-primary">{treatment.title}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Información del tratamiento */}
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <h2>{treatment.title}</h2>
          <p>{treatment.content}</p>
        </div>
      </section>

      {/* Formulario de consulta */}
      <section className="relation flex items-center justify-between">
        <FormConsult />
      </section>

      {/* Servicios relacionados */}
      <section className="ftco-section ftco-services flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {services.map((service: Services, index) => (
              <CardService
                key={service.id}
                data={service}
                delay={0.1 * index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowTreatmentPage;
