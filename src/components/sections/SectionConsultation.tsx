import React from 'react'

const SectionConsultation: React.FC = () => {
  return (
    <section
        className="w-full h-full bg-cover bg-no-repeat relative py-24"
        style={{
          backgroundImage: "url(/imgs/bg-6.jpg)",
          backgroundPosition: "top center",
        }}
      >
        {/* Capa de superposición */}
        <div className="absolute inset-0 bg-secondary opacity-70"></div>

        {/* Contenedor */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap items-center">
            {/* Texto principal */}
            <div className="w-full md:w-3/4 lg:w-9/12">
              <h2 className="text-porcelain text-4xl font-bold mb-4 leading-snug">
                We Provide Free Dental Care Consultation
              </h2>
              <p className="text-gray-100 text-xs md:text-sm">
                Your Health is Our Top Priority with Comprehensive, Affordable
                medical.
              </p>
            </div>

            {/* Botón */}
            <div className="w-full md:w-1/4 lg:w-3/12 flex md:justify-start mt-6 md:mt-0">
              <a
                href="#consultFree"
                className="bg-primary px-6 py-4 text-white text-sm rounded-full shadow-lg hover:bg-secondary transition duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default SectionConsultation;