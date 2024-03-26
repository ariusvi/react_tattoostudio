import "./Profile.css"

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../services/apiCalls";
import { CustomInput } from "../../Common/CustomInput/CustomInput";
import { Header } from '../../Common/Header/Header';
import { CustomButton } from "../../Common/CustomButton/CustomButton";


export const Profile = () => {
    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const navigate = useNavigate()

    const [write, setWrite] = useState("disabled");
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token);
    const [loadedData, setLoadedData] = useState(false);
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        email: "",
        // password: "",
    });

    const [userError, setUserError] = useState({
        first_nameError: "",
        last_nameError: "",
        emailError: "",
        // passwordError: "",
    });

    const inputHandler = (e) => {
        setUser((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const checkError = (e) => {
        //todo terminar
    };

    useEffect(() => {
        if (!tokenStorage) {
            navigate("/")  //si no tienes token, te redirige al home
        }
    }, [tokenStorage])

    useEffect(() => {

        const getUserProfile = async () => {
            try {
                const fetched = await getProfile(tokenStorage)

                setLoadedData(true)

                setUser({
                    first_name: fetched.data.firstName,
                    last_name: fetched.data.lastName,
                    email: fetched.data.email,          //todo revisar en el backend que todo esto se pueda modificar
                    // password: fetched.data.passwordHash, //todo la contraseña está hasheada
                })

            } catch (error) {
                console.log(error);
            }
        }

        if (!loadedData) {
            getUserProfile()
        }
    }, [user])

    const updateData = async () => {

        try {
            const fetched = await updateProfile(tokenStorage.userId, user)
            // const fetched = await updateProfile(datosUser.userId, user)
            setUser({
                first_name: fetched.data.firstName,
                last_name: fetched.data.lastName,
                email: fetched.data.email,          //todo aqui tengo algun error
            })
            console.log(first_name, "patatita");
            setWrite("disabled")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Header />
            <div className='profileDesign'>
                {!loadedData
                    ? (<div>LOADING</div>) //toodo poner un gif cargando
                    : (<div>
                        <CustomInput
                            className={`inputDesign ${userError.first_nameError !== "" ? "inputDesignError" : ""}`}
                            type={"text"}
                            name={"first_name"}
                            value={user.first_name || ""}
                            placeholder={"Name"}
                            functionChange={(e) => inputHandler(e)}
                            disabled={write}
                            onBlurFunction={(e) => checkError(e)}
                        />

                        <CustomInput
                            className={`inputDesign ${userError.last_nameError !== "" ? "inputDesignError" : ""}`}
                            type={"text"}
                            name={"last_name"}
                            value={user.last_name || ""}
                            placeholder={"Surname"}
                            functionChange={(e) => inputHandler(e)}
                            disabled={write}
                            onBlurFunction={(e) => checkError(e)}
                        />

                        <CustomInput
                            className={`inputDesign ${userError.emailError !== "" ? "inputDesignError" : ""}`}
                            type="email"
                            name="email"
                            value={user.email || ""}
                            placeholder="write your email"
                            functionChange={inputHandler}
                            disabled={write}
                            onBlur={(e) => checkError(e)}
                        />

                        {/* <CustomInput
                        className={`inputDesign ${userError.passwordError !== "" ? "inputDesignError" : ""}`}
                        type="password"
                        name="password"
                        value={user.password || ""}
                        placeholder="write your password"
                        functionChange={inputHandler}
                        disabled={""}
                        onBlur={(e) => checkError(e)}
                    /> */}
                    </div>)
                }
                <CustomButton
                    className={write === "" ? "CustomButtonDesignB CustomButtonDesign" : "CustomButtonDesign"}
                    title={write === "" ? "Confirm" : "Edit"}
                    functionEmit={write === "" ? () => updateData() : () => setWrite("")}
                />
            </div>
        </>
    )
}