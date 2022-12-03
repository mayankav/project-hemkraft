import React from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom';
import { emptyBathroom } from '../dummyData';
import "./index.css";

const AddBathroom = () => {
    const {bathroomList, setBathroomList} = useOutletContext();
    const navigate = useNavigate();
    const onAddBathroomClick = () => {
        setBathroomList(old => [...old, emptyBathroom])
    }
    const onNextClick = () => {
        navigate('../bathroom_listing')
    }
    return (
        <div>
            <p>Please provide the details regarding the bathroom.</p>
            <p>Bathroom type:</p>
            
            {
                bathroomList.map(bathroom => {
                    return (<div key={bathroom.id} className='bathroom-form'>
                            <div className='add-bathroom-form'>
                                <div className='half-bathroom'>
                                    <label for="sinks">Sinks</label>
                                    <input type="number" id="sinks" value={bathroom.sinks} />
                                    <label for="commodes">Commodes</label>
                                    <input type="number" id="commodes" value={bathroom.commodes} />
                                    <label for="bidets">Bidets</label>
                                    <input type="number" id="bidets" value={bathroom.bidets} />
                                </div>
                            
                                <div className='half-bathroom'>
                                    <label for="bathtubs">Bathtubs</label>
                                    <input type="number" id="bathtubs" value={bathroom.bathtubs} />
                                    <label for="showers">Showers</label>
                                    <input type="number" id="showers" value={bathroom.showers}/>
                                    <label for="tubshowers">Tub/showers</label>
                                    <input type="number" id="tubshowers" value={bathroom.tubshowers} />
                                </div>
                            </div>
            
                            <div>
                                <label for="primary_bathroom">This bathroom is a primary bathroom</label>
                                <input id="primary_bathroom" type="checkbox" checked={bathroom.isPrimary} />
                            </div>
                        </div>)
                    
                })
            }
        
            <button onClick={onAddBathroomClick}>Add</button>
            <button onClick={onNextClick}>Next</button>

        </div>
    )
}

export default AddBathroom