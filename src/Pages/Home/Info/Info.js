import React from 'react';
import InfoCart from '../Home/InfoCart/InfoCart';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <InfoCart cardTitle="Opening hours" img={clock} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCart>
            <InfoCart cardTitle="Visit our location" img={marker} bgClass="bg-accent"></InfoCart>
            <InfoCart cardTitle="Contact us now" img={phone} bgClass="bg-gradient-to-r from-secondary to-primary"></InfoCart>
        </div>
    );
};

export default Info;