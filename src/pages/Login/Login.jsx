import './Login.css'
import { useState, useEffect } from 'react';

export const Login = () => {

    const [credenciales, setCredenciales] = useState({ //el array con las credenciales actuales del usuario // la funcion que actualiza ese estado
        email: "",
        password: ""
    })

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
    }};