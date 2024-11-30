import Querie from '../interfaces/Queries';
import { supabase } from './../supabase';

export const createConsulta = async (consulta: Querie) => {
  const { data, error } = await supabase
    .from('Queries')
    .insert([consulta]); // Inserta la consulta

  if (error) throw error;
  return data;
};

// Leer todas los Doctores
export const getDoctorsWithSpecialty = async () => {
  const { data, error } = await supabase
    .from('Doctor')
    .select(`
      *,
      specialty (name)
    `)
    .eq('status', 'Activo'); // Filtrar doctores activos

  if (error) throw error;
  return data;
};

// Leer todas los servicios
export const getServices = async () => {
  const { data, error } = await supabase.from('Services').select('*').eq('status', 'Activo');
  if (error) throw error;
  return data;
};


// Leer todas los testimonios
export const getTestimonials = async () => {
  const { data, error } = await supabase.from('Testimonials').select('*');
  if (error) throw error;
  return data;
};

