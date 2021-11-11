import React from 'react';
import doctor from '../../../images/doctor-small.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import DoctorsDetail from "../DoctorsDetail/DoctorsDetail";

const Doctors = () => {
    const callComponent =[1,2,3];
    return (
        <div className="text-center">
            <h5 className="mb-5 fw-bold" style={{color:"rgb(28, 199, 193)"}}>Our Doctors</h5>
            <div className="row d-flex justify-content-around">
                {
                    callComponent.map(e => <DoctorsDetail></DoctorsDetail>)
                }
            </div>
        </div>
    );
};

export default Doctors;