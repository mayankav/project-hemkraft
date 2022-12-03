import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../../components/ToggleSwitch';
import "./index.css";

const Phone = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const submitHandler = () => {
        navigate('./other');
    }
    const onAgreeChange = (val) => {
        setAgree(val);
    }
    return (
        <>
            <span>
                <p>Would you like to enter a phone number?</p>
                <ToggleSwitch checked={agree} onChangeHandler={onAgreeChange} />
            </span>
            
            <form onSubmit={submitHandler}>
                <p>Please enter your phone number</p>
                <input placeholder="Area code" />
                <input placeholder="Number" />
                <input placeholder="Phone type" />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Phone