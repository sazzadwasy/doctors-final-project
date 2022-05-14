import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-primary">{name}</h2>
                    <p>{
                        slots.length > 0
                            ?
                            <span>{slots[0]}</span>
                            :
                            <span className='text-red-500' >Try anoter date!</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                    <div class="card-actions justify-end">
                        <label
                            for="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            class="btn btn-sm btn-primary bg-gradient-to-r from-secondary to-primary uppercase font-bold text-white mt-3">Book Appoinment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;