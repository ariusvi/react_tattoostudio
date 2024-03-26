import './Facilities.css'

import { useEffect, useState } from "react";
import { Header } from '../../Common/Header/Header';
import { getFacilities } from '../../services/apiCalls';
import { CustomDropdown } from '../../Common/CustomDropdown/CustomDropdown';

export const Facilities = () => {

    return (
        <>
            <Header />
            <div className='facilitiesDesign'>
                <CustomDropdown
                title="Servicios"
                items={["patata", "queso", "fresa"]}
                    />
            </div>
        </>

    )
}