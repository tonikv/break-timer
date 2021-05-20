import React from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { RiRestartFill } from 'react-icons/ri';


const TimerControls = ( {setState, restart} ) => {
    return (
        <div>
            <AiFillPlayCircle className='control' onClick={setState(false)}/>
            <AiFillPauseCircle className='control' onClick={setState(true)}/>
            <RiRestartFill className='control' onClick={restart()}/>
        </div>
    )
}

export default TimerControls
