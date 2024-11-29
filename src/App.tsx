import "./styles/App.css";
import "./styles/icomoon.css";
import AppRoutes from "./routes";
import { useEffect, useState } from "react";
import Preloader from "./components/preloader";
import { getTasks } from "./db/request";

function App() {
  const [loading, setLoading] = useState(true);
  const [showPreloader, setShowPreloader] = useState(true); // Controla visibilidad del preloader
  const [tasks, setTasks] = useState<any[]>([]);

  // Simular preloader y cargar tareas al inicio
  useEffect(() => {
    const initializeApp = async () => {
      const [tasksData] = await Promise.all([
        getTasks(),
        new Promise((resolve) => setTimeout(resolve, 5000)),
      ]);

      setTasks(tasksData);
      setLoading(false); // Detener preloader
    };

    initializeApp();
  }, []);

  // Ocultar preloader después de la animación
  const handlePreloaderComplete = () => setShowPreloader(false);

  return (
    <>
      {showPreloader && loading && (
        <Preloader onAnimationComplete={handlePreloaderComplete} />
      )}
      {!loading && <AppRoutes />}
    </>
  );
}

export default App;
