import React from 'react';
import chair from '../../../src/assets/images/chair.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img className="w-[374px] lg:max-w-lg" src={chair} alt='' />
                <div className="mb-24">
                    <h1 className="text-5xl font-bold">Your new smile starts
                        <br /><span className="pt-4">here</span></h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;