import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Register from "./Components/Register/Register.jsx";
import Home from "./Components/Home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Register" />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/useRegisterPage" element={<useRegister />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
