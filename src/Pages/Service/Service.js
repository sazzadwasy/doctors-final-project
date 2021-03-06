import React from 'react';

const Service = ({ service }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="lg:px-8 py-10 pt-8">
                <img src={service.img} alt="Shoes" className="rounded-xl " />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{service.name}</h2>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default Service;