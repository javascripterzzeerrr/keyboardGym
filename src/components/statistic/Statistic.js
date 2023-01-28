import './statistic.scss';

import cross from '../../img/cross.png';
import speed from '../../img/speedometer.png';

const Statistic = ({pressCounter, wrongCounter}) => {
    return (
        <div className="statistic">
            <div className="statistic__content">
               <div className='speed'>
                    <img src={speed} alt="speed" />
                    <p>Символов в мин. - {}</p>
                </div>
                <div className='cross'>
                    <img src={cross} alt="cross" />
                    <p>Процент ошибок - <em className='res'>{(wrongCounter > 0 && pressCounter > 0) ? Math.floor((wrongCounter / pressCounter) * 100) + " %" : null}</em></p>
                </div> 
            </div>
        </div>
    );
}

export default Statistic;