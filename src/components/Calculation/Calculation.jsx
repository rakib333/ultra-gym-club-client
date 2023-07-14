
// import { useState } from 'react';
import { useState } from 'react';
import './Calculation.css'

const Calculation = ({ time }) => {
    const breaksTime = [10, 20, 30, 40, 50];
    const [breaks, setBreaks] = useState(0);
    const handleAddTime = time => {
        setBreaks(time)
    }
    return (
        <div className='calculation-container'>
            <h3>Habibullah Rakib</h3>

            <div className='break-btn'>
                <h2>Add a break</h2>
                {
                    breaksTime.map(br => <button onClick={() => handleAddTime(br)} key={br}>{br}</button>)
                }
            </div>


            <div className='exercise-time'>
                <h2>Exercise Details</h2>
                <div className='time-add'>
                    <span>Exercise time</span>
                    <small style={{ color: 'green', fontSize: '20px', fontWeight: "bold" }}>{time} m</small>
                </div>
                <div className='time-add'>
                    <span>Break time</span>
                    <small style={{ color: 'green', fontSize: '20px', fontWeight: "bold" }}>{breaks} s</small>
                </div>
            </div>

        </div>
    );
};

export default Calculation;