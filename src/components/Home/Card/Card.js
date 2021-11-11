import React from 'react';
import person1 from '../../../images/people-1.png'
import person2 from '../../../images/people-2.png'
import person3 from '../../../images/people-3.png'
import CardDetail from "../CardDetail/CardDetail";

const cardInfo = [
    {
        img: person1
    },
    {
        img: person2
    },
    {
        img: person3
    }
];

const Card = () => {
    return (
        <div className='text-center'>
            <h5 className='mt-5 ms-5' style={{color: "rgb(28, 199, 193)"}}>TESTIMONIAL</h5>
            <h2 className='ms-5 mb-5'>What's Our Patients <br/> Says</h2>
            <div className='d-flex justify-content-center'>
                <div className="row row-cols-1 w-75 row-cols-md-3 g-4">
                    {
                        cardInfo.map(
                            info =>
                                <CardDetail info={info}>

                                </CardDetail>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;