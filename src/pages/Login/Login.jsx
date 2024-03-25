import './Login.css'

import { useState, useEffect } from 'react';
import { CustomInput } from '../../Common/CustomInput/CustomInput';
import { loginUser } from '../../services/apiCalls';
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { validame } from '../../utils/functions';

export const Login = () => {

    const navigate = useNavigate();

    const [credenciales, setCredenciales] = useState({ //el array con las credenciales actuales del usuario, la funcion que actualiza ese estado
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        emailError: "",
        passwordError:"",
    }) //lanzar el mensaje de error

    const [msgError, setMsgError] = useState("");

    const inputHandler = (e) => {
        setCredenciales((prevState) => ({
            ...prevState, 
            [e.target.name]: e.target.value 
        }));
    };

    const checkError = (e) => {
        const error = validame(e.target.name, e.target.value);
        
        setCredencialesError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"] : error,
        }))
    };

    const logMe = async () => {

            for (let credencial in credenciales){
                if(credenciales[credencial]===""){
                throw new Error ("email and password are required")
                }
            }

            const fetched = await loginUser(credenciales)

            // if (!fetched.success) {
            //     setMsgError(fetched.message)
            //     return;
            // }

            // if (!fetched.token) {
            //     return              //todo terminar esto
            // }

            const decodificado = decodeToken(fetched.token) //decodificamos el token

            const passport = {
                token: fetched.token,
                decodificado: decodificado,
            }

            localStorage.setItem("passport", JSON.stringify(passport))
            
            setMsgError(`Bienvenido ${decodificado.first_name}`)

            setTimeout(() => { navigate("/") }, 2000) //redirige al home

    }

    return (
        <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            <CustomInput
                className={`inputDesign ${credencialesError.emailError !== "" ? "inputDesignError" : ""}`}
                // design="inputDesign"
                type="email"
                name="email"
                value={credenciales.email || ""}
                placeholder="write your email"
                functionChange={inputHandler}
                disabled={""}
                onBlur={(e) => checkError (e)}
            />
            <div className="error">{credencialesError.emailError}</div>
            <CustomInput
                className={`inputDesign ${credencialesError.passwordError !== "" ? "inputDesignError" : ""}`}
                // design={credenciales.errores ? "inputDesign inputerror" : "inputDesign"} //todo
                type="password"
                name="password"
                value={credenciales.password || ""}
                placeholder="write your password"
                functionChange={inputHandler}
                disabled={""}
                onBlur={(e) => checkError (e)}
            />
            <div className="error">{credencialesError.passwordError}</div>
            <div className="loginButton" onClick={logMe}>Log in</div>
            {/* cuando hay un error al loggearse, muestra el mensaje de error definido en backend */}
            <div className="error">{msgError}</div> 
        </div>
    )
};