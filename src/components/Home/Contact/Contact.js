import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='d-flex justify-content-center'>
            <div className='text-center mt-5 contact-container'>
                <h5 style={{color:"rgb(28, 199, 193)"}} className='fw-bold pt-3'>CONTACT US</h5>
                <h2 className='pb-3 text-white'>Always connect with us</h2>
                <div className="row">
                    <div className="offset-md-4 col-md-4">
                        <input type="text" className="form-control" placeholder="Email Address" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <br/>
                        <input type="text" className="form-control" placeholder="Subject" aria-label="Username" aria-describedby="basic-addon1"></input>
                        <br/>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                        <br/>
                        <button className='header-container-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;