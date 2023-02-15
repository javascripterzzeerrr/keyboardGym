import { useSelector } from "react-redux";
import * as fieldSelectors from "../../selectors/index";

import './result.scss';

import cross from '../../img/cross.png';
import speed from '../../img/speedometer.png';
import finish from '../../img/finish-flag.png';
import chilli from '../../img/chilli.png';
import cool from '../../img/cool.png';
import speechless from '../../img/speechless.png';

const Result = () => {

  const wrongCounter = useSelector(fieldSelectors.wrongCounter);
  const pressCounter = useSelector(fieldSelectors.pressCounter);

  let answer = {
      img: "",
      desc: "",
  };

  switch(true) {
      case ((wrongCounter / pressCounter) * 100 < 20):
          answer.img = cool;
          answer.desc = "Неплохо, совсем неплохо!";
          break;
      case ((wrongCounter / pressCounter) * 100 < 50):
          answer.img = chilli;
          answer.desc = "Не самые быстрые пальцы на диком западе!";
          break;
      default:
          answer.img = speechless;
          answer.desc = "Есть к чему стремиться";
          break;
  };

  const renderAnswer = () => {
      return (
          <div className="answer" style={{"display": "flex", "alignItems": "center"}}>
              <img style={{"width": "64px", "height": "64px", "object-fit": "cover", "margin-right": "10px"}} src={answer.img != "" ? answer.img : null} />
              <h1 style={{"font-size": "36px", "font-weight": "300"}}>{answer.desc}</h1>
          </div>
      );
  }

  const content = (answer.img !== "" && answer.desc !== "") ? renderAnswer() : null;

  return (
      <>
          <img src={finish} alt="finish" />
          <div className="statistic">
              <div className="statistic__content">
              <div className='speed'>
                      <img src={speed} alt="speed" />
                      <p>Символов в мин. - {pressCounter - wrongCounter}</p>
                  </div>
                  <div className='cross'>
                      <img src={cross} alt="cross" />
                          <p>Процент ошибок - <em className='res'>{(wrongCounter > 0 && pressCounter > 0) ? Math.floor((wrongCounter / pressCounter) * 100) + " %" : null}</em></p>
                      </div> 
                  </div>
          </div>
          <div className="answer">
              {content} 
          </div>
         
      </>
  );
}

export default Result;