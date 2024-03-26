import './Facilities.css'

import { useEffect, useState } from "react";
import { Header } from '../../Common/Header/Header';
import { getFacilities } from '../../services/apiCalls';

export const Facilities = () => {

    useEffect(() => { const getFacilities = async () => { 
        
    }})

    return (
        <>
            <Header />
            <div className='facilitiesDesign'>
                Soy la vista Facilities
            </div>
        </>

    )
}