import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="ms-5 row d-flex justify-content-evenly mt-5">
            <div className="col-md-3 mt-5">
                <p><a href=''>Emergency Dental Care</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Treatment of personal Diseases</a></p>
                <p><a href=''>Tooth Extraction</a></p>
                <p><a href=''>Check Up</a></p>
            </div>
            <div className="col-md-3">
                <h5 className='mb-3 title'>Services</h5>
                <p><a href=''>Emergency Dental Care</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Treatment of personal Diseases</a></p>
                <p><a href=''>Tooth Extraction</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Check Up</a></p>
            </div>
            <div className="col-md-3">
                <h5 className='mb-3 title'>Our Health</h5>
                <p><a href=''>Emergency Dental Care</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Treatment of personal Diseases</a></p>
                <p><a href=''>Tooth Extraction</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Check Up</a></p>
                <p><a href=''>Check Up</a></p>
            </div>
            <div className="col-md-3">
                <h5 className='mb-3 title'>Our Address</h5>
                <p><a href=''>New Your - 101010 Hudosn <br/>Yeards</a></p>
                <p><a href=''>Call Now</a></p>
                <button className='header-container-btn'>+202056124</button>
            </div>
        </div>
    );
};

export default Footer;