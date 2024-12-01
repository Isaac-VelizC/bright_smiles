import React, { useState, useEffect } from "react";

const IntroSection: React.FC = () => {
  const [backgroundAttachment, setBackgroundAttachment] = useState<string>("scroll");

  useEffect(() => {
    const updateBackgroundAttachment = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      setBackgroundAttachment(isMobile ? "scroll" : "fixed");
    };

    // Inicializa el estado al cargar el componente
    updateBackgroundAttachment();

    // Agrega el listener para cambios de tamaño
    window.addEventListener("resize", updateBackgroundAttachment);
    
    // Limpia el listener al desmontar
    return () => window.removeEventListener("resize", updateBackgroundAttachment);
  }, []);

  const sectionStyle = {
    backgroundImage: "url(/imgs/bg-5.webp)",
    backgroundSize: "cover",
    paddingTop: "6rem",
    paddingBottom: "7rem",
    backgroundAttachment,
    backgroundPosition: "top",
  };

  return (
    <section style={sectionStyle} className="relative bg-no-repeat">
      <div className=" absolute bg-white opacity-40 inset-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-medium leading-normal tracking-wide mb-4 text-gray-800">
              We promised to take care of our patients and we delivered.
            </h3>
            <p className="text-gray-700 text-base tracking-normal leading-snug md:leading-normal">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;