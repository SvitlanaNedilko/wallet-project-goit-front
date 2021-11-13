import { Routes, Route } from "react-router-dom";
import Container from "./components/Container";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import HomeTab from "./components/HomeTab";
import DiagramTab from "./components/DiagramTab";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<DashboardPage />}>
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegistrationPage />} />
      </Routes>
    </Container>
  );
}

export default App;
