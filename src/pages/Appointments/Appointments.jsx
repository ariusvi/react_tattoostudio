import './Appointments.css'

import { Header } from '../../Common/Header/Header';
import { useState, useEffect } from "react";
import { createAppointments, getAppointments } from '../../services/apiCalls';
import dayjs from 'dayjs';
import { CustomInput } from '../../Common/CustomInput/CustomInput';
import { CustomButton } from '../../Common/CustomButton/CustomButton';


export const Appointments = () => {
    const datosUser = JSON.parse(localStorage.getItem("passport"));
    const [appointments, setAppointments] = useState([])
    
    const [tokenStorage, setTokenStorage] = useState(datosUser?.token)
    

    const [appointmentsData, setAppointmentsData] = useState({
        dateAppointment: "",
        serviceId: ""
    })

    const appointmentInputHandler = (e) => {
        setAppointmentsData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };


    useEffect(() => {
        const getDataAppointment = async () => {
            try {
                const fetched = await getAppointments(tokenStorage)
                setAppointments(fetched.data)
            } catch (error) {
                console.log(error);
            }
        }
        getDataAppointment()
    }, [])


    const newAppointment = async () => {
        try {
            const response = await createAppointments(tokenStorage, appointmentsData)
            const data = response.data
            setAppointmentsData({
                dateAppointment: data.dateAppointment,
                serviceId: data.service,
            })
            }catch (error) {
            console.log(error);
        }
    }
    
    console.log(appointmentsData);

    return (
        <>
            <Header />
            <div className='appointmentsDesign'>
                <div className='cardAppointmentsTitle'>Nueva Cita</div>
                <div className='cardAppointments'>
                <CustomInput 
                    className={'inputAppointmentsDesign'}
                    type={'date'}
                    name={'dateAppointment'}
                    value={appointmentsData.dateAppointment || ""}
                    placeholder={"DD/MM/YYYY"}
                    functionChange={appointmentInputHandler}
                    disabled={""}
                />
                <CustomInput 
                    className={'inputAppointmentsDesign'}
                    type={'text'}
                    name={'serviceId'}
                    value={appointmentsData.serviceId || ""}
                    placeholder={"service_id"}
                    functionChange={appointmentInputHandler}
                    disabled={""}
                />
                <CustomButton 
                    className={'customButtonDesignAppointments'}
                    title={'Crear Cita'}
                    functionEmit={newAppointment}
                />
                </div>
                    <div className='cardAppointmentsTitle'>Mis Citas</div>
                
                    {
                        (appointments.length > 0)? 
                            appointments.map(appointment => {
                                const formattedDate = dayjs(appointment.dateAppointment).format('DD/MM/YYYY');
                                return (
                                    <div key={appointment.id} className='cardAppointmentsDesign'>
                                        <div className='cardAppointments'>
                                        <div>{appointment.service.serviceName}</div>
                                        <div>{formattedDate}</div>
                                        </div>
                                    </div>
                                )
                            })
                        : null
                        }
                </div>
            
        </>
        
    )
}