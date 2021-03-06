import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-12'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-85px] max-w-md' src={doctor} alt='' />
            </div>
            <div className='flex-1 p-8'>
                <h1 className='text-secondary font-bold'>Appoinment</h1>
                <h2 className='text-3xl text-white mt-4'>Make an appoinment today</h2>
                <p className='text-white mt-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <br />
                <PrimaryButton>Appoinment</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;