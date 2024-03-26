import './Appointments.css'

import { Header } from '../../Common/Header/Header';
import { useState, useEffect } from "react";
import { getAppointments } from '../../services/apiCalls';

export const Appointments = () => {
    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)
    const [loadedData, setLoadedData] = useState(false)
    const [appointments, setAppointments] = useState([])

    useEffect(() => {


        const getDataAppointment = async () => {
            try {

                const fetched = await getAppointments(tokenStorage)
                setAppointments(fetched.data.appointment)
                setLoadedData(true)
                console.log(fetched.data, "patata") //devuelve array de los appointments del usuario logeado
                //datos del array: fecha de la cita (dateAppointment) y la id de la cita (id)
                console.log(appointments, "fresas") //array vacio

                //todo ¿deberia revisar para que devuelva tambien el nombre de la cita?

            } catch (error) {
                console.log(error);
            }
        }
        if (!loadedData) {
            getDataAppointment()
        }
    }, [appointments])

    return (
        <>
            <Header />
            <div className='appointmentsDesign'>
                Soy la vista Appointment
            </div>
        </>
    )
}