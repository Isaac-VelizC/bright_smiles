import "./styles/App.css";
import "./styles/icomoon.css";
import AppRoutes from "./routes";
import Preloader from "./components/preloader";
import { DataProvider, useData } from "./context/ContextApi"; // Asegúrate de importar el DataProvider

function App() {
  return (
    <DataProvider>
      <MainContent />
    </DataProvider>
  );
}

const MainContent = () => {
  const { loading } = useData();

  if (loading) {
    return <Preloader />;
  }

  return <AppRoutes />;
};

export default App;