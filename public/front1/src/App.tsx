import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import SeleccionarUser from "./pages/SeleccionarUser"
import MainClientPage from "./pages/MainClientPage"
import SpecificStore from "./pages/SpecificStore"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/seleccionuser" element={<SeleccionarUser/>} />
        <Route path="/seleccionuser/client" element={<MainClientPage/>} />
        <Route path="/seleccionuser/client/store/:id" element={<SpecificStore/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App