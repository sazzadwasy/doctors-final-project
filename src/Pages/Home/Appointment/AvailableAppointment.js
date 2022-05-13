import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({ date }) => {
    return (
        <div>
            <h1 className='text-2xl text-secondary text-center font-bold'>Available appointments on {format(date, 'PP')}</h1>
        </div>
    );
};

export default AvailableAppointment; 