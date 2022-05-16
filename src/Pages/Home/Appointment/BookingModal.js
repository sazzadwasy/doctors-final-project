import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user] = useAuthState(auth);
    const { _id, name, slots } = treatment;
    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot, name, _id)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-center ">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" value={format(date, 'PP')} disabled className=" input input-bordered input-info w-full max-w-xs" />
                        <select name='slot' className="select select-info w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' disabled value={user.displayName || ''} type="text" placeholder="Your  name" className="input input-bordered input-info w-full max-w-xs" />
                        <input name='email' disabled value={user.email || ''} type="email" placeholder="Email address" className="input input-bordered input-info w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone number" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value='Submit' className="btn btn-accent w-full max-w-xs mt-3" />
                    </form>
                </div >
            </div >
        </div >
    );
};

export default BookingModal;