import React from 'react';
import BookingCard from "../BookingCard/BookingCard";

const  bookingData = [
    {
        id: 1,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 AM - 9.00 AM',
        totalSPace : 10
    },
    {
        id: 2,
        subject: 'Cosmic Dentistry',
        visitingHour: '10.05 AM - 11.30 AM',
        totalSPace : 10
    },
    {
        id: 3,
        subject: 'Teeth Cleaning',
        visitingHour: '5.00 PM - 6.30 PM',
        totalSPace : 10
    },
    {
        id: 4,
        subject: 'Cavity Protection',
        visitingHour: '7.00 PM - 8.30 PM',
        totalSPace : 10
    },
    {
        id: 5,
        subject: 'Cavity Protection',
        visitingHour: '7.00 PM - 8.30 PM',
        totalSPace : 10
    },
    {
        id: 6,
        subject: 'Teeth Orthodontics',
        visitingHour: '8.00 PM - 9.00 PM',
        totalSPace : 10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available Appointment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(
                        booking =>
                            <BookingCard
                                booking={booking}
                                key={booking.id}
                                date={date}
                            >

                            </BookingCard>
                    )
                }
            </div>
        </section>
    );
};

export default BookAppointment;