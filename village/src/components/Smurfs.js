import React from 'react';
import { Link } from 'react-router-dom';
import Smurf from './Smurf';

const Smurfs = props => (
    <div className="list-container">
        <div className="list">
            {props.smurfs.map(smurf => (
                <Smurf name={smurf.name}
                    age={smurf.age}
                    height={smurf.height}
                    id={smurf.id}
                    key={smurf.id}
                />
            ))}
        </div>
    </div>
);

export default Smurfs; 