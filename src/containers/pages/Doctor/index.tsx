import React from 'react';
import Breadcrumbs from '../../../components/Breadcrumbs';
import CardDoctor from '../../../components/doctors/CardDoctor';
import { useData } from '../../../context/ContextApi';
import Doctor from '../../../interfaces/Doctor';

const DoctorPage: React.FC = () => {
  const { doctors, loading } = useData();

  if (loading || !Array.isArray(doctors)) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Breadcrumbs title="Our Dentist" subtitle="Doctors" />
      <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            {doctors.map((doctor: Doctor, index) => (
              <CardDoctor
                key={doctor.id}
                data={doctor}
                delay={0.2 * index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorPage;
