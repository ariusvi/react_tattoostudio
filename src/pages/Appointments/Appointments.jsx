import './Appointments.css'

import { Header } from '../../Common/Header/Header';
import { useState, useEffect } from "react";
import { getAppointments } from '../../services/apiCalls';
import dayjs from 'dayjs';


export const Appointments = () => {
    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)
    const [appointments, setAppointments] = useState([])

    useEffect(() => {
        const getDataAppointment = async () => {
            try {
                const fetched = await getAppointments(tokenStorage)
                if (Array.isArray(fetched.data)) {
                    setAppointments(fetched.data)
                } else {
                    console.error('fetched.data is not an array:', fetched.data)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getDataAppointment()
    }, [])
    console.log(appointments);

    return (
        <>
            <Header />
            <div className='appointmentsDesign'>
                <div className='cardAppointments'>
                    {
                        appointments.map(appointment => {
                            const formattedDate = dayjs(appointment.dateAppointment).format('DD/MM/YYYY');
                            return (
                                <div key={appointment.id} className='cardAppointmentsDesign'>
                                    <div>{appointment.service.serviceName}</div>
                                    <div>{formattedDate}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
        
    )
}