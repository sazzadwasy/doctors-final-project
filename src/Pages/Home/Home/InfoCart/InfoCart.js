import React from 'react';

const InfoCart = ({ img, cardTitle, bgClass }) => {
    return (
        <div className={`mx-auto card lg:card-side shadow-xl ${bgClass}`}>
            <figure className="pl-5 py-4">
                <img src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white">{cardTitle}</h2>
                <p className="text-white">Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCart;