import { useState, useEffect } from "react";
import { CustomInput } from '../../Common/CustomInput/CustomInput'
import './Register.css'

export const Register = (e) => {

    const [user, setUser] = useState({
        //son los campos que se piden en el register del backend
        first_name: "", 
        last_name: "",
        email: "",
        password: "",
    })

    //funcion emit que esta en el padre
    const inputHandler = (e) => {
        console.log(e.target.value)
    }

    return (
        <div className='registerDesign'>
            <CustomInput 
                className={"inputDesign"}
                type={"text"}
                placeholder={"Name"}
                name={"first_name"}
                value={user.first_name || ""}
                onChange={(e) => inputHandler (e)}
            />

        <CustomInput 
                className={"inputDesign"}
                type={"text"}
                placeholder={"Surname"}
                name={"last_name"}
                value={user.last_name || ""}
                onChange={(e) => inputHandler (e)}
            />
            
        <CustomInput 
                className={"inputDesign"}
                type={"email"}
                placeholder={"email"}
                name={"email"}
                value={user.email || ""}
                onChange={(e) => inputHandler (e)}
            />
            
        <CustomInput 
                className={"inputDesign"}
                type={"password"}
                placeholder={"password"}
                name={"password"}
                value={user.password || ""}
                onChange={(e) => inputHandler (e)}
            />
        </div>
    )
}