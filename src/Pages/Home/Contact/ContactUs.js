import React from 'react';
import backbanner from '../../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <section
            className='my-24 p-12'
            style={{
                background: `url(${backbanner})`
            }}
        >
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-secondary text-xl font-bold'>Contact Us</h1>
                <p className='text-white text-3xl'>Stay Connected With Us</p>
                <div>
                    <form className='mx-auto'>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                        <input type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                        <textarea type="text" placeholder="Type here" className="input input-bordered w-full mt-4" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;