import './Appointments.css'

import { Header } from '../../Common/Header/Header';
import { useState, useEffect } from "react";

export const Appointments = () => {
    const datosUser = JSON.parse(localStorage.getItem("passport"));

    return (
        <>
            <Header />
            <div className='appointmentsDesign'>
                Soy la vista Appointment
            </div>
        </>
    )
}