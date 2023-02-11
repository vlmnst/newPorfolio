import Home from "./screens/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout/layout";
import Contacto from "./screens/Contacto";
import Perfil from "./screens/Perfil";
import Experiencia from "./screens/Experiencia";
import NoPage from "./screens/NoPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="experiencia" element={<Experiencia />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
