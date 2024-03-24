import { useState, useEffect } from "react";
import { CustomInput } from '../../Common/CustomInput/CustomInput'
import './Register.css'
import { CustomButton } from "../../Common/CustomButton/CustomButton";
import { registerUser } from "../../services/apiCalls";
import { validame } from "../../utils/functions";

export const Register = () => {

    const [user, setUser] = useState({
        //son los campos que se piden en el register del backend
        first_name: "", 
        last_name: "",
        email: "",
        password: "",
    })

    const [userError, setUserError] = useState({
        first_nameError: "", 
        last_nameError: "",
        emailError: "",
        passwordError: "",

    });

    const [msgError, setMsgError] = useState("");

    //funcion emit que esta en el padre
    const inputHandler = (e) => {
        setUser(
            (prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value
            })
        )
    }

    const checkError = (e) => {
        const error = validame(e.target.name, e.target.value);
        
        setUserError((prevState) => ({
            ...prevState,
            [e.target.name + "Error"] : error,
        }))
    };

    //funcion emit para registrar
    const registerMe = async () => {
        try {
            for (let elemento in user) {
                if (user[elemento] === "") {
                    throw new Error ("Todos los campos tienen que estar completos")
                }
            }
            setMsgError("")
            
            const fetched = await registerUser()

            console.log(fetched);

        } catch (error) {
            setMsgError(error.message)
        }
    }

    return (
        <div className='registerDesign'>
            {/* para previsualizar lo que se esta metiendo en los campos */}
            {/* <pre>{JSON.stringify(user, null, 2)}</pre>  */}
            <CustomInput 
                className={`inputDesign ${userError.first_nameError !== "" ? "inputDesignError" : ""}`}
                type={"text"}
                name={"first_name"}
                value={user.first_name || ""}
                placeholder={"Name"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
                onBlurFunction={(e) => checkError (e)}
            />
            <div className="error">{userError.first_nameError}</div>

        <CustomInput 
                className={`inputDesign ${userError.last_nameError !== "" ? "inputDesignError" : ""}`}
                type={"text"}
                name={"last_name"}
                value={user.last_name || ""}
                placeholder={"Surname"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
                onBlurFunction={(e) => checkError (e)}
            />
            <div className="error">{userError.last_nameError}</div>
            
        <CustomInput 
                className={`inputDesign ${userError.emailError !== "" ? "inputDesignError" : ""}`}
                type={"email"}
                name={"email"}
                value={user.email || ""}
                placeholder={"email"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
                onBlurFunction={(e) => checkError (e)}
            />
            <div className="error">{userError.emailError}</div>
            
        <CustomInput 
                className={`inputDesign ${userError.passwordError !== "" ? "inputDesignError" : ""}`}
                type={"password"}
                name={"password"}
                value={user.password || ""}
                placeholder={"password"}
                functionChange={(e) => inputHandler (e)}
                disabled={""}
                onBlurFunction={(e) => checkError (e)}
            />
            <div className="error">{userError.passwordError}</div>


            <CustomButton 
                className={"CustomButtonDesign"}
                title={"Register"}
                functionEmit={registerMe}
            />
            <div className="error">{msgError}</div>
        </div>
    )
}