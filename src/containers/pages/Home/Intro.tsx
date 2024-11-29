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
    backgroundImage: "url(/images/bg_3.jpg)",
    backgroundSize: "cover",
    paddingTop: "7rem",
    paddingBottom: "7rem",
    backgroundAttachment,
    backgroundPosition: "top",
  };

  return (
    <section style={sectionStyle} className="relative bg-no-repeat">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl leading-normal tracking-wider mb-4">
              We promised to take care of our patients and we delivered.
            </h3>
            <p className="text-gray-600 text-custom-16 tracking-normal leading-snug md:leading-normal">
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