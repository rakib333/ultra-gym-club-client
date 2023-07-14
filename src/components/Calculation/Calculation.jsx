// import React from 'react';
import { useState } from 'react';
import './Calculation.css'

const Calculation = () => {
    const [time, setTime] = useState(0);
    return (
        <div className='calculation-container'>
            <h3>Habibullah Rakib</h3>

            <div>
                <h2>Add a break</h2>
                <div className="break-btn">
                    <button>10s</button>
                    <button>20s</button>
                    <button>30s</button>
                    <button>40s</button>
                    <button>50s</button>
                </div>
            </div>


            <div className='exercise-time'>
                <h2>Exercise Details</h2>
                <div className='time-add'>
                    <span>Exercise time</span>
                    <small>{time} minutes</small>
                </div>
            </div>

        </div>
    );
};

export default Calculation;