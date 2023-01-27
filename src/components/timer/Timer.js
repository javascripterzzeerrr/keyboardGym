import { useState, useEffect } from 'react';

import './timer.scss';

const Timer = () => {
    const [seconds, setSeconds] = useState(60);
    const [gameEnd, setGameEnd] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            console.log(seconds);
            if (seconds - 1 < 0) {
                clearInterval(timer);
                setGameEnd(true);
            } 
            else {
                setSeconds(seconds => seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    });

    return (
        <div class="timer">
            <div class="timer__items">
                <div class="timer__item timer__minutes">{parseInt(seconds / 60, 10) < 10 ? "0" + parseInt(seconds / 60, 10) : parseInt(seconds / 60, 10)}</div>
                <div class="timer__item timer__seconds">{parseInt(seconds % 60, 10) < 10 ? "0" + parseInt(seconds % 60, 10) : parseInt(seconds % 60, 10)}</div>
            </div>
        </div>
    );
}

export default Timer;