import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { Facilities } from "../Facilities/Facilities";
import { Appointments } from "../Appointments/Appointments";
import { Profile } from "../Profile/Profile";

export const Body = () => {
    return (
        <Routes>
            {/* aqui iran las vistas/pages*/}
            <Route path="*" element={<Navigate to={"/"} replace/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/facilities" element={<Facilities/>} />
            <Route path="/appointments" element={<Appointments/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    )
}