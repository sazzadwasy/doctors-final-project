import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-8">
            <div className="card-body">
                <p>{review.review}</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5 ">
                            <img src={review.img} alt="" />
                        </div>
                    </div>
                    <div>
                        <p className='text-xl'>{review.name}</p>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews; <h1>Review</h1>