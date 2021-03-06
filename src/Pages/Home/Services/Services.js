import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import treatment from '../../../assets/images/treatment.png'
import Service from '../../Service/Service';
import PrimaryButton from '../../Shared/PrimaryButton';

const services = [
    {
        _id: 1,
        name: 'Fluoride Treatment',
        description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        img: fluoride
    },
    {
        _id: 2,
        name: 'Cavity Filling',
        description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        img: cavity
    },
    {
        _id: 3,
        name: 'Teeth Whitening',
        description: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
        img: whitening
    },
]
const Services = () => {
    return (
        <div className='mt-24'>
            <div>
                <h1 className='text-xl text-center font-bold uppercase text-primary'>Our Services</h1>
                <p className='text-4xl text-center'>Services We Provide</p>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-12'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                        <div>
                            <h1 className="text-4xl font-bold">Exceptional Dental <br />Care,on Your Terms</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <PrimaryButton>Explore Treatment</PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;