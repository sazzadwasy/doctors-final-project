import React from 'react';

const Service = ({ service }) => {
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
                            <span className='text-red-500' >No slots available</span>

                    }</p>
                    <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                    <div class="card-actions justify-end">
                        <button disabled={slots.length === 0} class="btn btn-primary uppercase font-bold text-white">Book Appoinment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;