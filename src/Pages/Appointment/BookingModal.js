import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, treatment, setTreatment }) => {
    const { _id, name, slots } = treatment;

    const handleBooking =event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary py-6">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input w-full max-w-xs bg-base-200" />
                        <select name='slot' class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Full-name" class="input w-full max-w-xs bg-base-200" />
                        <input type="number" name="phone" placeholder="Phone-number" class="input w-full max-w-xs bg-base-200" />
                        <input type="email" name="email" placeholder="Your-email" class="input w-full max-w-xs bg-base-200" />
                        <input type="submit" placeholder="SUBMIT" class="btn btn-accent w-1/2 max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;