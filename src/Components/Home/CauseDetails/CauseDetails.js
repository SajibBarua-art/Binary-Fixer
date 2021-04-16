import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cause.css';

const CauseDetails = ({ causeData }) => {
    return (
        <div className="card card-style text-center cause-style" style={{width: '400px'}}>
            <FontAwesomeIcon icon={causeData.img} className="p-3" style={{ color: 'blue', fontSize: "150px", margin: 'auto' }} />
            <div className="card-body">
                <h4>{causeData.name}</h4>
                <p>{causeData.description}</p>
            </div>
        </div>
    );
};

export default CauseDetails;