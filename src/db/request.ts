import { supabase } from './../supabase';

// Crear una tarea
export const createTask = async (title: string) => {
  const { data, error } = await supabase.from('tasks').insert([{ title, is_done: false }]);
  if (error) throw error;
  return data;
};

// Leer todas las tareas
export const getTasks = async () => {
  const { data, error } = await supabase.from('specialty').select('*');
  if (error) throw error;
  return data;
};

// Actualizar una tarea
export const updateTask = async (id: number, updates: { title?: string; is_done?: boolean }) => {
  const { data, error } = await supabase.from('tasks').update(updates).eq('id', id);
  if (error) throw error;
  return data;
};

// Eliminar una tarea
export const deleteTask = async (id: number) => {
  const { data, error } = await supabase.from('tasks').delete().eq('id', id);
  if (error) throw error;
  return data;
};
