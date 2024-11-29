import "./styles/App.css";
import AppRoutes from "./routes";
import "./styles/icomoon.css";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader";

function App() {
  const [loading, setLoading] = useState(true); // Cambia useLoading a setLoading

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Cambia loading a false después de 2 segundos
    }, 2000); // 2000 ms = 2 segundos

    return () => clearTimeout(timer); // Limpia el timeout al desmontar
  }, []); // El array vacío asegura que esto solo se ejecute una vez al montar

  if (loading) {
    return <Preloader />;
  }

  return <AppRoutes />;
}

export default App;