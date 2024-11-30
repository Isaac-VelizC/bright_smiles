import React from "react";
import Breadcrumbs from "../../../components/Breadcrumbs";
import Input from "../../../components/form/Input";
import TextArea from "../../../components/form/TextArea";

//type Props = {};

const ContactPage: React.FC = () => {
  return (
    <main>
      <Breadcrumbs title="Contact Us" subtitle="Contact" />
      <section>
        {" "}
        {/* Espaciado vertical */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -mx-4">
            {" "}
            {/* Espaciado negativo para manejar el padding */}
            <div className="w-full md:w-1/2 p-4 md:p-5 md:order-2 bg-gray-100">
              {" "}
              {/* Fondo claro y padding */}
              <form
                action="mailto:aisakvelizdc@gmail.com"
                method="post"
                encType="text/plain"
                className="md:m-6"
              >
                <Input name="Your Name" placeholder="Your Name" type="text" />
                <Input type="email" placeholder="Your Email" />
                <Input type="text" placeholder="Subject" />
                <TextArea placeholder="Message" cols={30} rows={7} />
                <div>
                  <input
                    type="submit"
                    value="Send Message"
                    className="bg-primary text-lg text-white py-3 px-12 rounded-full hover:bg-secondary transition duration-300 cursor-pointer"
                  />
                </div>
              </form>
            </div>
            <div className="w-full md:w-1/2 flex items-stretch">
              <div className="w-full h-full md:order-1 border-none">
                {" "}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.123456789012!2d-122.0840897!3d37.4220656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5b5b5b5b5b5%3A0x1234567890abcdef!2sGoogleplex!5e0!3m2!1ses-419!2sus!4v1616161616161"
                  className="w-full h-full border-none"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section contact-section py-8">
        {" "}
        {/* Espaciado vertical */}
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap mb-5 contact-info">
            <div className="w-full mb-4">
              <h2 className="text-2xl font-bold">Contact Information</h2>
            </div>
            <div className="w-full"></div>
            <div className="w-full md:w-1/4 md:p-2">
              {" "}
              {/* Ancho responsivo */}
              <div className="bg-gray-50 p-6 md:p-4 h-full flex items-center">
                {" "}
                {/* Fondo, padding y sombra */}
                <p className="text-custom-16 leading-relaxed text-gray-500">
                  <span className="font-semibold">Address:</span> 198 West 21th
                  Street, Suite 721 New York NY 10016
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:p-2">
              <div className="bg-gray-50 p-6 md:p-4 h-full">
                <p className="text-custom-16">
                  <span className="text-gray-500">Phone:</span>{" "}
                  <a
                    href="tel://1234567920"
                    className="text-secondary font-semibold hover:underline"
                  >
                    + 1235 2355 98
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:p-2">
              <div className="bg-gray-50 p-6 md:p-4 h-full">
                <p className="text-custom-16">
                  <span className="text-gray-500">Email:</span>{" "}
                  <a
                    href="mailto:info@yoursite.com"
                    className="text-secondary hover:underline font-semibold"
                  >
                    info@yoursite.com
                  </a>
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/4 md:p-2">
              <div className="bg-gray-50 p-6 md:p-4 h-full">
                <p className="text-custom-16">
                  <span className="text-gray-500">Website:</span>{" "}
                  <a
                    href="#"
                    className="text-secondary hover:underline font-semibold"
                  >
                    yoursite.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
