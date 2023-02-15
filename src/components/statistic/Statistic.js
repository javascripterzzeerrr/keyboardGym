import { useSelector } from 'react-redux';

import { wrongCounter, pressCounter } from "../../selectors/index";

import './statistic.scss';

import cross from '../../img/cross.png';
import speed from '../../img/speedometer.png';

const Statistic = () => {
    const wrongCounterState = useSelector(wrongCounter);
    const pressCounterState = useSelector(pressCounter);

    return (
        <div className="statistic">
            <div className="statistic__content">
               <div className='speed'>
                    <img src={speed} alt="speed" />
                    <p>Символов в мин. - {}</p>
                </div>
                <div className='cross'>
                    <img src={cross} alt="cross" />
                    <p>Процент ошибок - <em className='res'>{(wrongCounterState > 0 && pressCounterState > 0) ? Math.floor((wrongCounterState / pressCounterState) * 100) + " %" : null}</em></p>
                </div> 
            </div>
        </div>
    );
}

export default Statistic;