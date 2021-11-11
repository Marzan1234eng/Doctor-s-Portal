import React from 'react';
import treatment from '../../../images/treatment.png';

const Description = () => {
    return (
        <div className="row">
            <div className="col-md-6 text-center mb-5">
                <img style={{height:"500px", width:"80%"}} className="img-fluid" src={treatment} alt=""/>
            </div>
            <div className="col-md-6">
                <h2 className="mt-5">Exceptional Dental <br/>Care, on your terms</h2>
                <p className="justify-text text-secondary w-75 mt-4 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda eaque eius enim eos ipsa itaque odit veritatis. Aspernatur blanditiis consectetur culpa, cum dolores ducimus, eligendi et nam, praesentium quod similique voluptas! Illum natus recusandae voluptates. Dolore ducimus facilis maxime optio, pariatur quia quod! Cum illum incidunt libero repellat vero vitae.</p>
                <button className="header-container-btn">Learn More</button>
            </div>
        </div>
    );
};

export default Description;