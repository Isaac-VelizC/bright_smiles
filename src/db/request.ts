import Querie from "../interfaces/Queries";
import { supabase } from "./../supabase";

export const createConsulta = async (consulta: Querie) => {
  const { data, error } = await supabase.from("Queries").insert([consulta]); // Inserta la consulta

  if (error) throw error;
  return data;
};

// Leer todas los Doctores
export const getDoctorsWithSpecialty = async () => {
  const { data, error } = await supabase
    .from("Doctor")
    .select(
      `
      *,
      specialty (name)
    `
    )
    .eq("status", "Activo"); // Filtrar doctores activos

  if (error) throw error;
  return data;
};

// Leer todas los servicios
export const getServices = async () => {
  const { data, error } = await supabase
    .from("Services")
    .select("*")
    .eq("status", "Activo");
  if (error) throw error;
  return data;
};

// Leer todas los testimonios
export const getTestimonials = async () => {
  const { data, error } = await supabase.from("Testimonials").select("*");
  if (error) throw error;
  return data;
};

// Leer todas los blogs
export const getBlogs = async () => {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("status", "Activo");
  if (error) throw error;
  return data;
};

// Buscar un servicio por ID
export const getServiceById = async (id: number) => {
  const { data, error } = await supabase
    .from("Services")
    .select("*")
    .eq("id", id)
    .single(); // Devuelve un único resultado

  if (error) throw error;
  return data;
};

// Buscar un blog por ID
export const getBlogById = async (id: number) => {
  const { data, error } = await supabase
    .from("Blogs")
    .select("*")
    .eq("id", id)
    .single(); // Devuelve un único resultado

  if (error) throw error;
  return data;
};
