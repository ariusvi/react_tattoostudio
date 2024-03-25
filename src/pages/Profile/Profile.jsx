import "./Profile.css"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const datosUser = JSON.parse(localStorage.getItem("passport"));

export const Profile = () => {
    const navigate = useNavigate()
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)

    useEffect(()=> {
        if(!tokenStorage){
            navigate("/")  //si no tienes token, te redirige al home
        }
    }, [tokenStorage])

    return (
        <div className='profileDesign'>
            Soy el perfil de {datosUser.decodificado?.first_name}
        </div>
    )
}