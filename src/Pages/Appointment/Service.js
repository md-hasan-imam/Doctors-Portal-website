import React from 'react';


const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class=" text-xl font-bold text-secondary">{name}</h2>
                <p>{
                    slots.length > 0 
                    ? <span className='text-sm'>{slots[0]}</span>
                    : <span className='text-red-500 text-sm'>Try another date</span>   
                }</p>
                <p className=' text-xs py-1'>{slots.length} {slots.length > 1 ? "Spaces" : "Space"} Available</p>
                <div className='w-2/3 mx-auto pt-3 pb-2'>

                    <label 
                    for="booking-modal"
                    disabled={slots.length === 0} 
                    onClick={()=>setTreatment(service)}
                     class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">BOOK APPOINTMENT</label>
                </div>
            </div>
        </div>
    );
};

export default Service;