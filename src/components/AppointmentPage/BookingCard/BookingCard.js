import React, {useState} from 'react';
import AppointmentForm from "../AppointmentForm/AppointmentForm";

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4 mb-5 d-flex justify-content-around">
            <div className="card p-3" style={{width: "18rem"}}>
                <div className="card-body text-center">
                    <h5 className="card-title text-brand mb-3">{booking.subject}</h5>
                    <h6>{booking.visitingHour}</h6>
                    <p>{booking.totalSPace} Spaces Available</p>
                    <button onClick={openModal} className='btn header-container-btn text-uppercase'>Book Appointment</button>
                    <AppointmentForm date={date} modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal}>

                    </AppointmentForm>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;