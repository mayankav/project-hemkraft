import React, { useState } from 'react'
import Modal from '../../../components/Modal';
import { useNavigate } from 'react-router-dom';
const PostalCode = () => {
    const [showModal, setShowModal] = useState(false);
    const [code, setCode] = useState('');
    const navigate = useNavigate();
    const validateOnSubmit = (e) => {
        e.preventDefault();
        const formEl = e.target;
        const input0 = formEl[0];
        console.log(input0.value);
        setShowModal(true);
    };

    const onChangePostalCode = (e) => {
        setCode(e.target.value);
    }

    return (
        <>
        <form onSubmit={validateOnSubmit}>
            <input placeholder="Please enter your postal code" value={code} onChange={onChangePostalCode} />
            <button type="submit">Submit</button>
        </form>
        {showModal &&
            <Modal toggleModal={setShowModal}>
                <h2>You entered the following postal code:</h2>
                <p>{code}</p>
                <h2>Is this correct?</h2>
                <span>
                    <button onClick={() => {
                        setShowModal(false)
                        navigate('../phone')
                        
                    }}>Yes</button>
                    <button onClick={() => {
                        setShowModal(false)
                    }}>No</button>
                </span>
            </Modal>}
            
        </>
    )
}

export default PostalCode