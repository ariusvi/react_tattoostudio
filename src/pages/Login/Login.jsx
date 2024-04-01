import './Login.css'

import { useState, useEffect } from 'react';
import { CustomInput } from '../../Common/CustomInput/CustomInput';
import { loginUser } from '../../services/apiCalls';
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { validame } from '../../utils/functions';
import { Header } from '../../Common/Header/Header';
import { CustomButton } from '../../Common/CustomButton/CustomButton';


export const Login = () => {
    
    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const navigate = useNavigate();
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)

    const [credenciales, setCredenciales] = useState({ //el array con las credenciales actuales del usuario, la funcion que actualiza ese estado
        email: "",
        password: "",
    });

    const [credencialesError, setCredencialesError] = useState({
        emailError: "",
        passwordError:"",
    }) //lanzar el mensaje de error

    const [msgError, setMsgError] = useState("");

    useEffect(()=> {
        if(tokenStorage){
            navigate("/")  
        }
    }, [tokenStorage])

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


            const decodificado = decodeToken(fetched.token) //decodificamos el token

            const passport = {
                token: fetched.token,
                decodificado: decodificado,
            }

            localStorage.setItem("passport", JSON.stringify(passport))
            
            setMsgError(`Bienvenido ${decodificado.first_name}`)

            setTimeout(() => { navigate("/") }, 1000) //redirige al home

    }

    return (<>
        <Header />
        <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            <CustomInput
                className={`inputDesign ${credencialesError.emailError !== "" ? "inputDesignError" : ""}`}
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
                type="password"
                name="password"
                value={credenciales.password || ""}
                placeholder="write your password"
                functionChange={inputHandler}
                disabled={""}
                onBlur={(e) => checkError (e)}
            />
            <div className="error">{credencialesError.passwordError}</div>
            <CustomButton 
                className={"CustomButtonDesign"}
                title={"Log in"}
                functionEmit={logMe}
            />
            <div className="error">{msgError}</div> 
            {/* cuando hay un error al loggearse, muestra el mensaje de error definido en backend */}
        </div>
        </>
    )
};