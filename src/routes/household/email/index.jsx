import React from 'react'
import { useNavigate } from 'react-router-dom';
const Email = () => {
    const navigate = useNavigate();
    const validateOnSubmit = (e) => {
        e.preventDefault();
        const formEl = e.target;
        const input0 = formEl[0];
        console.log(input0.value);
        navigate('../postal')
    };
    return (
        <form onSubmit={validateOnSubmit}>
            <input placeholder="Please enter your email address" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Email