import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ToggleSwitch from '../../../components/ToggleSwitch';
import "./index.css";

const Phone = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate();
    const submitHandler = () => {
        navigate('../moreinfo');
    }
    const onAgreeChange = (val) => {
        setAgree(val);
    }
    const onNextClickHandler = () => {
        navigate('../moreinfo')
    }
    return (
        <>
            <span>
                <p>Would you like to enter a phone number?</p>
                <ToggleSwitch checked={agree} onChangeHandler={onAgreeChange} />
            </span>
            
            {agree ? <form onSubmit={submitHandler}>
                <p>Please enter your phone number</p>
                <input placeholder="Area code" />
                <input placeholder="Number" />
                <input placeholder="Phone type" />
                <button type="submit">Submit</button>
            </form>
            :  <button onClick={onNextClickHandler}>Next</button>}
            
        </>
    )
}

export default Phone