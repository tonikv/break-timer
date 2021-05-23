import React from 'react'
import { AiFillPlayCircle, AiFillPauseCircle } from 'react-icons/ai';
import { RiRestartFill } from 'react-icons/ri';


const TimerControls = ( {setPaused, restart} ) => {
    return (
        <div>
            <AiFillPlayCircle className='control' onClick={setPaused(false)}/>
            <AiFillPauseCircle className='control' onClick={setPaused(true)}/>
            <RiRestartFill className='control' onClick={restart()}/>
        </div>
    )
}

export default TimerControls
