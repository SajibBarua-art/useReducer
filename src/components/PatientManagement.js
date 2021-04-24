import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../reducer/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer( patientReducer, patientState );
    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            // it is not a good option to make an id with it's length
            id: state.patients.length+1,
            name: nameRef.current.value
        })
        nameRef.current.value = '';
    }
    return (
        <div>
            <h1>Patient Management: {state.patients.length} </h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text"/>
            </form>

            {
                state.patients.map(pt => <li 
                    key={pt.id}
                    onClick={()=>dispatch({type: 'REMOVE_PATIENT', id: pt.id})}
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;