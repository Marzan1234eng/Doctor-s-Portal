import React from 'react';
import doctor from "../../../images/doctor-small.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const DoctorsDetail = () => {
    return (
        <div className="col-md-4">
            <img style={{height:"350px"}} className='img-fluid' src={doctor} alt=""/>
            <h5 className='mt-3 mb-3'>Dr. Coudi</h5>
            <div className='d-flex justify-content-center align-items-center'>
                <FontAwesomeIcon className='me-2' icon={faPhoneAlt} />
                <p className=' mt-2 text-secondary'>+81 22 333 44</p>
            </div>
        </div>
    );
};

export default DoctorsDetail;