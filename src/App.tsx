import "./App.css";
import Layout from "./assets/components/Layout";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MembersPage from "./pages/Members";
import WorkshopsPage from "./pages/Workshops";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/members" element={<MembersPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
