import "./SuperAdmin.css";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Header } from "../../Common/Header/Header";
import { CustomButton } from "../../Common/CustomButton/CustomButton";
import { getUsers } from "../../services/apiCalls";

export const SuperAdmin = () => {

    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const [Users, setUsers] = useState([]);
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token);
    const navigate = useNavigate()

    const allUsers = async () => {
        try {
            const fetched = await getUsers(tokenStorage)
            setUsers(fetched.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (Users.length === 0) {
            allUsers()
        }
    }, [Users, tokenStorage])

    useEffect(() => {
        if (!tokenStorage) {
            navigate("/")
        }
    }, [tokenStorage, navigate])




    return (
        <>
        <Header />
        <div className="superAdminDesign">
            {
                Users.length > 0 ? Users.map((user) => {
                    return (
                        <div key={user.id} className="cardDesign">
                            <div>{user.firstName}</div>
                            <div>{user.lastName}</div>
                            <div>{user.email}</div>
                            <div>ELIMINAR USUARIO</div>
                        </div>
                    )
                }) : <div>No hay usuarios</div>
            }
        </div>
        </>
    );
};
