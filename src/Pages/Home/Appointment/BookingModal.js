import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slots } = treatment;
    const handleSubmit = e => {
        e.preventDefault()
        const slot = e.target.slot.value
        console.log(slot, name, _id)
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-xl font-bold text-center ">{name}</h3>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" value={format(date, 'PP')} disabled class=" input input-bordered input-info w-full max-w-xs" />
                        <select name='slot' class="select select-info w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Your  name" class="input input-bordered input-info w-full max-w-xs" />
                        <input name='email' type="email" placeholder="Email address" class="input input-bordered input-info w-full max-w-xs" />
                        <input name='phone' type="text" placeholder="Phone number" class="input input-bordered input-info w-full max-w-xs" />
                        <input type="submit" value='Submit' class="btn btn-accent w-full max-w-xs mt-3" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;