import './Login.css'

import { useState, useEffect } from 'react';
import { CustomInput } from '../../Common/CustomInput/CustomInput';
import { loginMe } from '../../services/apiCalls';
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";

export const Login = () => {

    const navigate = useNavigate()
    const [credenciales, setCredenciales] = useState({ //el array con las credenciales actuales del usuario // la funcion que actualiza ese estado
        email: "",
        password: "",
    });

    const [msgError, setMsgError] = useState("") //lanzar el mensaje de error

    const inputHandler = (e) => {
        // In the CustomInput component, there is a function called functionChange with the inputHandler object. 
        // This function triggers an onChange event in the setCredenciales field.

        setCredenciales((prevState) => ({
            ...prevState, // Shallow copy of the previous state to avoid direct modification. (prevState is a placeholder)
            // (...) creates a new instance.
            [e.target.name]: e.target.value // e.target accesses the name property of the object to be modified. [] because it access to the property refeared in e.target.name
            //e.target.value access to the field "name" to modified the data.
            // if i write in email, e.target.name is .. email.
            // if i write in password, e.target.name is .. password.
        }));
    };

    const logMe = async () => {

            for (let credencial in credenciales){
                if(credenciales[credencial]===""){
                setMsgError("email and password are required")
                return;}
            }

            const fetched = await loginMe(credenciales)

            if (!fetched.success) {
                setMsgError(fetched.message)
                return;
            }

            // if (!fetched.token) {
            //     return              //todo terminar esto
            // }

            const decodificado = decodeToken(fetched.token) //decodificamos el token

            sessionStorage.setItem("token", fetched)
            sessionStorage.setItem("user", JSON.stringify(decodificado))

            setTimeout(() => {
                navigate("/profile") 
            },750)

    }

    return (
        <div className='loginDesign'>
            {/* <pre>{JSON.stringify(credenciales, null, 2)}</pre> */}
            <CustomInput
                design="inputDesign"
                type="email"
                name="email"
                value={credenciales.email || ""}
                placeholder="write your email"
                functionChange={inputHandler}
                disabled={""}
                onBlur={""}
            />
            <CustomInput
                design="inputDesign"
                // design={credenciales.errores ? "inputDesign inputerror" : "inputDesign"} //todo
                type="password"
                name="password"
                value={credenciales.password || ""}
                placeholder="write your password"
                functionChange={inputHandler}
                disabled={""}
                onBlur={""}
            />
            <div className="loginButton" onClick={logMe}>Log in</div>
            <div>{msgError}</div> 
            {/* cuando hay un error al loggearse, muestra el mensaje de error definido en backend */}
        </div>
    )
};