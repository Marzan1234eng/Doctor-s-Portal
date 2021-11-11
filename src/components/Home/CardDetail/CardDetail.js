import React from 'react';
import './CardDetail.css';

const CardDetail = ({info}) => {
    return (
        <div className="col">
            <div className="card card-shadow h-100">
                    <div className="card-body">
                        <p className="card-text justify-text">This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to show that equal
                            height action.</p>
                    </div>
                    <div className="card-footer d-flex">
                        <img src={info.img} style={{height: "50px",width:"50px"}} className="card-img-top ms-5" alt="..."></img>
                        <div>
                            <p style={{color:'rgb(28, 199, 193)'}} className="ms-3 fw-bold">Winson Harry</p>
                            <p className='text-secondary'>California</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default CardDetail;