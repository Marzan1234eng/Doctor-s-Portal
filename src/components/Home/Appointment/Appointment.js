import React from 'react';
import doctor from '../../../images/doctor.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div className='row appointment-container mt-5'>
            <div className="col-md-6 text-center">
                <img className="appointment-doc-img img-fluid" src={doctor} alt=""/>
            </div>
            <div className="col-md-6 text-white">
                <h4 className='mt-5' style={{color:"rgb(28, 199, 193)"}}>APPOINTMENT</h4>
                <h2>Make an appointment <br/>Today</h2>
                <p className='w-75 justify-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto dolore ducimus eaque est facere fugiat, harum incidunt ipsum molestias nihil nisi, non nulla quasi, quis repellendus tempore veritatis. Ex, expedita.</p>
                <button className="header-container-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Appointment;