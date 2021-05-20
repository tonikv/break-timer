import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const TimerAdjust = ( {changeValue, time, type} ) => {
    let showtime = type === 'work' ? time.work : time.break
    return (
        <div>
            {type}
            <FaArrowUp onClick={changeValue('up')} className="arrows"/> 
            {showtime} 
            <FaArrowDown onClick={changeValue('down')} className="arrows"/> 
        </div>
    )
}

export default TimerAdjust
