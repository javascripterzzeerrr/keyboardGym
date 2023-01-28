import { useState, useEffect } from 'react';

import './timer.scss';

const Timer = ({ updateGameProgress }) => {
    const [seconds, setSeconds] = useState(60);
    const [gameEnd, setGameEnd] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            if (seconds - 1 < 0) {
                updateGameProgress();
                setGameEnd(true);
                clearInterval(timer);
            }
            else {
                setSeconds(seconds => seconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

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