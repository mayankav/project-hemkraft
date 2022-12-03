import React from 'react'
import { useNavigate } from 'react-router-dom';

const MoreInfo = () => {
    const navigate = useNavigate();
    
    const submitHandler = () => {
        navigate('../../bathroom/add_bathroom');
    }
  return (
    <>
        <p>Please enter the following details for your household</p>
  
        <form onSubmit={submitHandler}>
            <p>Please enter your phone number</p>
            <label for="hometype">HTML</label>
            <select name="hometype" id="hometype">
                <option value="townhome">Townhome</option>
            </select>
            <label for="sqfoot">Square footage</label>
            <input id="sqfoot" />

            <label for="occupants">Occupants</label>
            <input type="number" id="occupants" />

            <label for="bedrooms">Bedrooms</label>
            <input type="number" id="bedrooms" />
            
            <button type="submit">Submit</button>
        </form>
            
    </>
  )
}

export default MoreInfo