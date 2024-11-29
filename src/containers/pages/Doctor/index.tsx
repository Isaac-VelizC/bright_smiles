import React from 'react'
import Breadcrumbs from '../../../components/Breadcrumbs'
import CardDoctor from '../../../components/doctors/CardDoctor'
import doctors from '../../../data/doctors'

//type Props = {}

const DoctorPage: React.FC = () => {
  return (
    <>
    <Breadcrumbs title='Our Dentist' subtitle='Doctors'/>
    <section className="ftco-section flex items-center justify-center flex-col h-auto mx-6 md:mx-0">
        <div className="container">
          <div className="flex flex-wrap justify-center">
          {doctors.map((doctor, index) => (
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
    </>
  )
}

export default DoctorPage