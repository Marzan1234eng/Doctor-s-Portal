import React from 'react';
import './BlogDetail.css';

const BlogDetail = ({info}) => {
    return (
        <div className='col'>
            <div className="card h-100 d-flex justify-content-evenly">
                { info.img !== '' ?
                    <div className="d-flex justify-content-start mt-3">
                        <img src={info.img} style={{height: "50px", width: "50px"}} className="card-img-top ms-5 me-2"
                             alt="..."></img>
                        <div>
                            <h5>{info.name}</h5>
                            <p className='text-secondary'>23 April, 2019</p>
                        </div>
                    </div>
                    :
                    <div className='blog-special-card text-white'>
                        <h5 className='mt-3'>{info.name}</h5>
                        <p>23 April, 2019</p>
                    </div>
                }
                {
                    info.img === '' ?

                    <div className='card-body blog-special-card text-white'>
                        <p className="card-text fw-bold">{info.advice}</p>
                    </div>
                :
                    <div className='d-flex justify-content-start card-body'>
                        <p className="card-text fw-bold">{info.advice}</p>
                    </div>
                }
                { info.description !== '' ?
                    <div className='d-flex justify-content-start'>
                        <p className='text-secondary'>{info.description}</p>
                    </div>
                :
                    <div></div>
                }
            </div>
        </div>
    );
};

export default BlogDetail;