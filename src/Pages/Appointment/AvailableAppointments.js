import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointments = ({date, setDate}) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] =useState(null)

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return (
        <div className=''>
            <h2 className='text-center text-xl text-secondary mb-20'>Available Services on {format(date,'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service=> <Service 
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                        ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;