import React, { useState, useEffect } from 'react'

function Timer() {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [multiple, setMultiple] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            if (isRunning) {
                setTime((prevTime) => prevTime + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handlePause = () => {
        setIsRunning((prevState) => !prevState)
        document.cookie = `timerTime=${time}`
    }
    const handleStop = () => {
        setIsRunning(false)
        setTime(0)
        document.cookie = 'timerTime=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    const formatTime = (time) => {
        const min = Math.floor(time / 60)
        const sec = time % 60
        return sec
    }
    const handleMultiple = () => {
        if(time % 2 === 0){
            const style = {border: '3px solid red', color: 'red'}
            return style
        }

    }
    return (
        <>
            <h1>Timer</h1>
            <div style={handleMultiple()}>
                <div id='timer'><b>{formatTime(time)}</b></div>
                <button onClick={handlePause}>{isRunning ? "Pause":"Play"}</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </>
    )
}

export default Timer
