import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from '../Reviews/Reviews';
const reviews = [
    {
        _id: 1,
        name: 'Winson Harry',
        img: people1,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'America'
    },
    {
        _id: 2,
        name: 'Maria Wilson',
        img: people2,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'America'
    },
    {
        _id: 3,
        name: 'Henry Jorge',
        img: people3,
        review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'America'
    },
]

const Testimonial = () => {
    return (
        <section className='my-24'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-secondary text-xl font-bold'>Testimonial</h2>
                    <h4 className=' text-3xl mt-4'>What our patients says</h4>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt='' />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review => <Reviews
                        key={review._id}
                        review={review}
                    >
                    </Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonial;