import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        width: '50%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        closeModal();
    };
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className='text-center text-brand mb-3'>{appointmentOn}</h2>
                <p className='mb-3 text-secondary'>On {date.toString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input required id='name' type="text" className="form-control" placeholder="Your Name"></input><br/>
                    <input required id='phone' type="number" className="form-control" placeholder="Phone Number"></input><br/>
                    <input required id='email' type="email" className="form-control" placeholder="Email"></input><br/>
                    <div className='d-flex mb-3'>
                        <select name='gender' className="form-select me-2" aria-label="Default select example">
                            <option selected value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <input id='age' required type="number" className="form-control me-2" placeholder="Age"></input><br/>
                        <input id='weight' required type="number" className="form-control" placeholder="Weight"></input><br/>
                    </div>
                    <button className='header-container-btn'>Send</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;