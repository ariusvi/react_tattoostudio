import './Facilities.css'

import { useEffect, useState } from "react";
import { Header } from '../../Common/Header/Header';
import { getFacilities } from '../../services/apiCalls';


export const Facilities = () => {
    const [facilities, setFacilities] = useState([])

    useEffect(() => {
        const getFacilitiesData = async () => {
            try {
                const fetched = await getFacilities()
                setFacilities(fetched.data)
            } catch (error) {
                console.log(error)
            }
        }       
        getFacilitiesData()
    }, [facilities])

    return (
        <>
            <Header />
            <div className='facilitiesTitle'>Nuestros Servicios</div>
            <div className='facilitiesDesign'>
            <div className='cardRoster'>
                {
                    facilities.map (facility => {
                        return (
                            <div key={facility.id} className='cardDesign'>
                                <div className='cardTitle'>{facility.serviceName}</div>
                                <div>{facility.description}</div>
                                <div>Número del serivicio: {facility.id}</div>
                            </div>
                        )
                    })
                }
                </div>
            </div> 
            </>
)
}

