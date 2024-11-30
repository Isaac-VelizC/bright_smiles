import "./styles/App.css";
import "./styles/icomoon.css";
import AppRoutes from "./routes";
import { useState, useEffect } from "react";
import Preloader from "./components/preloader";
import { DataProvider } from "./context/ContextApi"; // Asegúrate de importar el DataProvider

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [loading, setLoading] = useState(true);

  // Simula una carga de 4 segundos como mínimo
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Detener el preloader después de 4 segundos
    }, 4000); // 4000 ms (4 segundos)

    return () => clearTimeout(timeout); // Limpiar el timeout cuando el componente se desmonte
  }, []);

  // Ocultar el preloader después de la animación
  const handlePreloaderComplete = () => setShowPreloader(false);

  return (
    <DataProvider>
      <>
        {showPreloader && loading && (
          <Preloader onAnimationComplete={handlePreloaderComplete} />
        )}
        {!loading && (
          <AppRoutes />
        )}
      </>
    </DataProvider>
  );
}

export default App;
