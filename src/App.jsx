import MainLayout from "./Contents/MainLayout/MainLayout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Registerss from "./pages/Register/Registerss";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registerss />} />
      </Routes>
    </div>
  );
}

export default App;
