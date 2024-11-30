import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputForm from './InputForm'
import { createConsulta } from '../../db/request';
import { useData } from '../../context/ContextApi';

//type Props = {}
const DataConsultas = {
    firstName: "",
    lastName: "",
    servicio: 0,
    date: "",
    time: "",
  };

const FormConsult: React.FC = () => {
    const [formData, setFormData] = useState(DataConsultas);
    const { services } = useData();
    
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Enviar los datos al backend
      console.log(formData);
      await createConsulta({
        firstname: formData.firstName,
        lastname: formData.lastName,
        department: formData.servicio, // Cambia según la estructura en tu backend
        date: formData.date,
        time: formData.time,
      });
      alert("Consulta creada exitosamente");
      setFormData(DataConsultas); // Reiniciar formulario
    } catch (error) {
      console.error("Error al crear la consulta:", error);
      alert("Hubo un error al crear la consulta");
    }
  };

  return (
    <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4">
            {/* Tarjeta 1: Dental Services */}
            <div className="bg-secondary flex flex-col justify-center px-8 text-center py-16 md:py-0">
              <h3 className="mb-6 text-xl font-semibold text-porcelain">
                Dental Services
              </h3>
              <p className="text-porcelain mb-6 text-custom-16 leading-relaxed tracking-wider">
                A small river named Duden flows by their place and supplies
              </p>
              <Link
                to="/treatments"
                className="uppercase font-bold text-xs text-porcelain underline underline-offset-2 hover:text-primary"
              >
                See Services
              </Link>
            </div>

            {/* Formulario: Free Consultation */}
            <div className="bg-primary py-10 md:col-span-2 px-6">
              <h3 className="mb-6 text-xl font-semibold text-porcelain text-center">
                Free Consultation
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap">
                  {/* Espaciado negativo para manejar el padding */}
                  <InputForm
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    aria-label="First Name"
                  />
                  <InputForm
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    aria-label="Last Name"
                  />
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <label htmlFor="servicio" className="sr-only">
                      Select a service
                    </label>
                    <select
                      name="servicio"
                      id="servicio"
                      className="border-b-2 w-[90%] h-10 px-0 bg-primary text-porcelain font-medium text-[13px] focus:outline-none"
                      value={formData.servicio}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {services.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                      <option value="0">Other Services</option>
                    </select>
                  </div>
                  <InputForm
                    name="date"
                    type="date" // Cambiado a tipo "date" para mejor manejo
                    value={formData.date}
                    onChange={handleChange}
                    aria-label="Date"
                  />
                  <InputForm
                    name="time"
                    type="time" // Cambiado a tipo "time" para mejor manejo
                    value={formData.time}
                    onChange={handleChange}
                    aria-label="Time"
                  />

                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <button
                      type="submit"
                      className="w-full py-2 bg-secondary text-porcelain text-lg rounded-full hover:bg-goldenrod hover:text-gray-900 transition duration-300"
                    >
                      Appointment
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* Tarjeta 2: Find A Doctor */}
            <div className="bg-secondary flex flex-col justify-center px-8 text-center py-16 md:py-0">
              <h3 className="mb-4 text-xl font-semibold text-porcelain">
                Find A Doctor
              </h3>
              <p className="text-porcelain mb-6 text-custom-16 leading-relaxed tracking-wider">
                A small river named Duden flows by their place and supplies
              </p>
              <Link
                to="/doctor"
                className="uppercase font-bold text-xs text-porcelain underline underline-offset-2 hover:text-primary"
              >
                Meet our doctor
              </Link>
            </div>
          </div>
        </div>
  )
}

export default FormConsult