import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import {
  getBlogs,
  getDoctorsWithSpecialty,
  getServices,
  getTestimonials,
} from "./../db/request"; // Funciones para obtener datos
import Doctor from "../interfaces/Doctor";
import Services from "../interfaces/Services";
import Testimonial from "../interfaces/Testimonial";
import Blog from "../interfaces/Blog";

interface DataContextType {
  doctors: Doctor[];
  services: Services[];
  testimonials: Testimonial[];
  blogs: Blog[];
  loading: boolean;
}

// Definir el tipo de las props del DataProvider, incluyendo 'children'
interface DataProviderProps {
  children: ReactNode; // ReactNode es el tipo adecuado para 'children' en React
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [services, setServices] = useState<Services[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [doctorsData, servicesData, testimonialData, blogData] = await Promise.all([
          getDoctorsWithSpecialty(),
          getServices(),
          getTestimonials(),
          getBlogs(),
        ]);
        setDoctors(doctorsData);
        setServices(servicesData);
        setTestimonials(testimonialData);
        setBlogs(blogData);
      } catch (error) {
        console.error("Error loading data:", error);
      } finally {
        setLoading(false); // Finaliza la carga
      }
    };

    fetchData();
  }, []); // Solo se ejecuta al montar el componente

  return (
    <DataContext.Provider value={{ doctors, services, testimonials, blogs, loading }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
