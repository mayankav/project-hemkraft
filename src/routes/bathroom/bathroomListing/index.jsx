import React from 'react'
import { useOutletContext, useNavigate } from 'react-router-dom';

const BathroomListing = () => {
    const {bathroomList} = useOutletContext();
    const navigate = useNavigate();
    const onNextClick = () => {
        navigate('../bathroom_listing')
    }
  return (
    <div>
        <p>You have added the following bathrooms to your household</p>
        <table>
                        
            <tr>
                <th>Bathroom #</th>
                <th>Type</th> 
                <th>Primary</th>
            </tr>
            {
                bathroomList.map((bathroom, i) => (
                    <tr>
                    <td>{i}</td>
                    <td>{bathroom.tubshowers >= 1 ? 'full' : 'half'}</td>
                    <td>{bathroom.isPrimary ? 'Yes' : 'No'}</td>
                </tr>
                ))
            }

        </table>
        <button onClick={onNextClick}>Next</button>
    </div>
  )
}

export default BathroomListing