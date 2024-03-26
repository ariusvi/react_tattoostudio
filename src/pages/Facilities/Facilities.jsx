import './Facilities.css'

import { useEffect, useState } from "react";
import { Header } from '../../Common/Header/Header';
import { getFacilities } from '../../services/apiCalls';
import { CustomDropdown } from '../../Common/CustomDropdown/CustomDropdown';

export const Facilities = () => {

    useEffect(() => {
        const getFacilitiesData = async () => {
            try {
                const fetched = await getFacilities()
                console.log(fetched)
            } catch (error) {
                console.log(error)
            }
        }
        getFacilitiesData()
    }, []) 

    return (
        <>
            <Header />
            {/* <div className='facilitiesDesign'>
                <CustomDropdown
                title="Servicios"
                items={["patata", "queso", "fresa"]}
                    />
            </div> */}
            {/* usar esto en otra parte */}

            Soy la página de Facilities
        </>

    )
}