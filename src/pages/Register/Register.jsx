import { useState, useEffect } from "react";
import { CustomInput } from '../../Common/CustomInput/CustomInput'
import './Register.css'
import { CustomButton } from "../../Common/CustomButton/CustomButton";

export const Register = () => {

    const [user, setUser] = useState({
        //son los campos que se piden en el register del backend
        first_name: "", 
        last_name: "",
        email: "",
        password: "",
    })

    //funcion emit que esta en el padre
    const inputHandler = (e) => {
        setUser(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
        console.log(e.target.value)
    }

    //funcion emit para registrar
    const registerMe = () => {
        console.log(user, "funcion register")
    }

    return (
        <div className='registerDesign'>
            <pre>{JSON.stringify(user, null, 2)}</pre>
            <CustomInput 
                className={"inputDesign"}
                type={"text"}
                name={"first_name"}
                value={user.first_name || ""}
                placeholder={"Name"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
            />

        <CustomInput 
                className={"inputDesign"}
                type={"text"}
                name={"last_name"}
                value={user.last_name || ""}
                placeholder={"Surname"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
            />
            
        <CustomInput 
                className={"inputDesign"}
                type={"email"}
                name={"email"}
                value={user.email || ""}
                placeholder={"email"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
            />
            
        <CustomInput 
                className={"inputDesign"}
                type={"password"}
                name={"password"}
                value={user.password || ""}
                placeholder={"password"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
            />
            <CustomButton 
                className={"CustomButtonDesign"}
                title={"Register"}
                functionEmit={registerMe}
            />
        </div>
    )
}