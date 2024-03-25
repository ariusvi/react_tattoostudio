import "./Profile.css"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const {decodificado} = JSON.parse(localStorage.getItem("passport"))

export const Profile = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState(decodificado?.token)
    
    useEffect(()=> {
        if(!token){
            navigate("/")  //si no tienes token, te redirige al home
        }
    }, [token])

    return (
        <div className='profileDesign'>
            Soy la vista Profile
        </div>
    )
}