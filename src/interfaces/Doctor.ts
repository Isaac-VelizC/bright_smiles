interface Specialty {
    name: string;
  }
  
  interface Doctor {
    id: number;
    name: string;
    content: string;
    specialty: Specialty | null; // specialty puede ser null
    img: string;
  }
  
  
  export default Doctor;
  